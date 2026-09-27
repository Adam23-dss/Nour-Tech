const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');

// Chargé avant les modèles : DATABASE_URL décide de la base utilisée
dotenv.config();
const { sequelize, User, Product, Project, Post, TeamMember, Media } = require('./models');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// Images produits livrées avec le code (public/images/produits)
app.use('/uploads', express.static(path.join(__dirname, '../public/images/produits')));

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'nourtech_secret_key_2024';
if (process.env.NODE_ENV === 'production' && !process.env.JWT_SECRET) {
  console.error('❌ JWT_SECRET doit être défini en production');
  process.exit(1);
}
// Sans base externe, les données seraient perdues à chaque redémarrage de l'hébergeur
if (process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL (PostgreSQL, ex. Neon) doit être défini en production');
  process.exit(1);
}

// Multer Configuration : images uniquement, 5 Mo max, gardées en mémoire puis stockées en base
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ok = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'].includes(file.mimetype);
    cb(ok ? null : new Error('Seules les images (JPG, PNG, WebP, GIF, AVIF) sont acceptées'), ok);
  }
});
// Transforme une erreur d'envoi de fichier en réponse 400 lisible
const withUpload = (req, res, next) =>
  upload.single('image')(req, res, (err) => {
    if (!err) return next();
    const message = err.code === 'LIMIT_FILE_SIZE' ? 'Image trop lourde (5 Mo maximum)' : err.message;
    res.status(400).json({ error: message });
  });

// Enregistre l'image envoyée en base et renvoie son chemin public (/media/files/<id>/<nom>)
const saveUpload = async (req, folder) => {
  if (!req.file) return null;
  const ext = path.extname(req.file.originalname).toLowerCase();
  const base = path.basename(req.file.originalname, ext).toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40) || 'image';
  const media = await Media.create({
    folder,
    filename: `${base}${ext}`,
    mimetype: req.file.mimetype,
    data: req.file.buffer
  });
  return `/media/files/${media.id}/${media.filename}`;
};

// Supprime une image stockée en base (chemins /media/files/<id>/... uniquement)
const removeMedia = async (imagePath) => {
  const match = /^\/media\/files\/(\d+)\//.exec(imagePath || '');
  if (match) await Media.destroy({ where: { id: match[1] } });
};

app.get('/media/files/:id/:name', async (req, res) => {
  try {
    const media = await Media.findByPk(req.params.id);
    if (!media) return res.status(404).end();
    res.set('Content-Type', media.mimetype);
    res.set('Cache-Control', 'public, max-age=31536000, immutable');
    res.send(media.data);
  } catch (error) {
    res.status(500).end();
  }
});

// Auth Middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Accès non autorisé' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token invalide' });
  }
};

// --- AUTH ROUTES ---
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Identifiants invalides' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, username: user.username });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- PRODUCT ROUTES ---
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.findAll({ order: [['createdAt', 'DESC']] });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/products', authMiddleware, withUpload, async (req, res) => {
  try {
    const productData = req.body;
    if (req.file) {
      productData.image = await saveUpload(req, 'produits');
    }
    const product = await Product.create(productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/products/:id', authMiddleware, withUpload, async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    const previous = await Product.findByPk(id);
    if (req.file) {
      productData.image = await saveUpload(req, 'produits');
    }
    await Product.update(productData, { where: { id } });
    if (req.file && previous) await removeMedia(previous.image);
    const updatedProduct = await Product.findByPk(id);
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/products/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    await Product.destroy({ where: { id } });
    if (product) await removeMedia(product.image);
    res.json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- CONTENU GÉRÉ DEPUIS L'ADMIN : projets, blog, équipe ---
const slugify = (text = '') =>
  text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const registerContent = (route, Model, folder, order, prepare = (data) => data) => {
  const editable = Object.keys(Model.rawAttributes).filter((k) => !['id', 'createdAt', 'updatedAt'].includes(k));
  const pick = async (req) => {
    const data = {};
    for (const key of editable) {
      if (req.body[key] !== undefined) data[key] = req.body[key] === '' ? null : req.body[key];
    }
    if (req.file) data.image = await saveUpload(req, folder);
    else if (req.body.removeImage === 'true') data.image = null;
    return prepare(data);
  };

  app.get(`/api/${route}`, async (req, res) => {
    try {
      res.json(await Model.findAll({ order }));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post(`/api/${route}`, authMiddleware, withUpload, async (req, res) => {
    try {
      res.status(201).json(await Model.create(await pick(req)));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  app.put(`/api/${route}/:id`, authMiddleware, withUpload, async (req, res) => {
    try {
      const item = await Model.findByPk(req.params.id);
      if (!item) return res.status(404).json({ error: 'Introuvable' });
      const previousImage = item.image;
      const data = await pick(req);
      await item.update(data);
      if ('image' in data && data.image !== previousImage) await removeMedia(previousImage);
      res.json(item);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  app.delete(`/api/${route}/:id`, authMiddleware, async (req, res) => {
    try {
      const item = await Model.findByPk(req.params.id);
      if (item) {
        await item.destroy();
        await removeMedia(item.image);
      }
      res.json({ message: 'Supprimé avec succès' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};

registerContent('projects', Project, 'projets', [['position', 'ASC'], ['createdAt', 'DESC']]);
registerContent('posts', Post, 'blog', [['date', 'DESC'], ['createdAt', 'DESC']], (data) => {
  if (data.title && !data.slug) data.slug = slugify(data.title);
  return data;
});
registerContent('team', TeamMember, 'equipe', [['position', 'ASC'], ['createdAt', 'ASC']]);

// Crée les tables manquantes et remplit le contenu par défaut au premier démarrage
const initContent = async () => {
  await sequelize.sync();

  if (await User.count() === 0) {
    const { ADMIN_USERNAME, ADMIN_PASSWORD } = process.env;
    if (ADMIN_USERNAME && ADMIN_PASSWORD) {
      await User.create({ username: ADMIN_USERNAME, password: await bcrypt.hash(ADMIN_PASSWORD, 10) });
      console.log(`✅ Compte admin « ${ADMIN_USERNAME} » créé`);
    } else {
      console.warn('⚠️  Aucun compte admin : définissez ADMIN_USERNAME et ADMIN_PASSWORD puis redémarrez');
    }
  }

  if (await Product.count() === 0) {
    const { initialProducts } = require('./scripts/seed');
    const { products2026 } = require('./scripts/products-2026');
    await Product.bulkCreate([...initialProducts, ...[...products2026].reverse()]);
  }

  const defaults = require('./scripts/content-defaults.json');
  if (await Project.count() === 0) await Project.bulkCreate(defaults.projects);
  if (await Post.count() === 0) await Post.bulkCreate(defaults.posts);
  if (await TeamMember.count() === 0) await TeamMember.bulkCreate(defaults.team);
};

// --- EXISTING CONTACT ROUTE ---
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    await transporter.sendMail({
      from: `"Nour Tech Website" <${process.env.EMAIL_USER}>`,
      to: 'nourtech@gmail.com',
      subject: `Nouvelle demande: ${subject}`,
      html: `<h2>📱 NOUVELLE DEMANDE DE CONTACT</h2><p><strong>Nom:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p><p><strong>Sujet:</strong> ${subject}</p><p><strong>Message:</strong> ${message}</p><hr><p style="color: gray;">Reçu depuis le site Nour Tech</p>`
    });

    res.status(200).json({ success: true, message: 'Message envoyé avec succès !' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'envoi du message', details: error.message });
  }
});

app.get('/api/test', (req, res) => res.json({ message: '🚀 Backend Nour Tech fonctionne !' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`\n🚀 Backend Nour Tech démarré sur http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    await initContent();
    console.log('✅ Connexion à la base de données SQLite réussie');
  } catch (error) {
    console.error('❌ Impossible de se connecter à la base de données:', error);
  }
});
