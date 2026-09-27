const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Chargé avant les modèles : DATA_DIR décide de l'emplacement de la base
dotenv.config();
const { sequelize, User, Product, Project, Post, TeamMember } = require('./models');

const app = express();

// Images envoyées depuis l'admin : sur le disque persistant (DATA_DIR) en production,
// sinon dans public/images du projet. Les images livrées avec le code restent servies en secours.
const REPO_IMAGES = path.join(__dirname, '../public/images');
const MEDIA_DIR = process.env.DATA_DIR ? path.join(process.env.DATA_DIR, 'images') : REPO_IMAGES;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(MEDIA_DIR, 'produits')), express.static(path.join(REPO_IMAGES, 'produits')));
// Images gérées depuis l'admin (projets, blog, équipe)
app.use('/media', express.static(MEDIA_DIR), express.static(REPO_IMAGES));

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'nourtech_secret_key_2024';
if (process.env.NODE_ENV === 'production' && !process.env.JWT_SECRET) {
  console.error('❌ JWT_SECRET doit être défini en production');
  process.exit(1);
}

// Multer Configuration : images uniquement, 5 Mo max
const makeUpload = (folder) => multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const dir = path.join(MEDIA_DIR, folder);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      cb(null, dir);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      const base = path.basename(file.originalname, ext).toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40);
      cb(null, `${Date.now()}-${base}${ext}`);
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ok = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'].includes(file.mimetype);
    cb(ok ? null : new Error('Seules les images (JPG, PNG, WebP, GIF, AVIF) sont acceptées'), ok);
  }
});
const upload = makeUpload('produits');

// Transforme une erreur d'envoi de fichier en réponse 400 lisible
const withUpload = (uploader) => (req, res, next) =>
  uploader.single('image')(req, res, (err) => {
    if (!err) return next();
    const message = err.code === 'LIMIT_FILE_SIZE' ? 'Image trop lourde (5 Mo maximum)' : err.message;
    res.status(400).json({ error: message });
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

app.post('/api/products', authMiddleware, withUpload(upload), async (req, res) => {
  try {
    const productData = req.body;
    if (req.file) {
      productData.image = `/images/produits/${req.file.filename}`;
    }
    const product = await Product.create(productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/products/:id', authMiddleware, withUpload(upload), async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    if (req.file) {
      productData.image = `/images/produits/${req.file.filename}`;
    }
    await Product.update(productData, { where: { id } });
    const updatedProduct = await Product.findByPk(id);
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/products/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res.json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- CONTENU GÉRÉ DEPUIS L'ADMIN : projets, blog, équipe ---
const slugify = (text = '') =>
  text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Supprime du disque une image envoyée depuis l'admin (chemins /media/... uniquement)
const mediaRoot = path.resolve(MEDIA_DIR);
const removeMedia = (imagePath) => {
  if (!imagePath?.startsWith('/media/')) return;
  const file = path.resolve(mediaRoot, imagePath.slice('/media/'.length));
  if (file.startsWith(mediaRoot + path.sep)) fs.rm(file, { force: true }, () => {});
};

const registerContent = (route, Model, folder, order, prepare = (data) => data) => {
  const uploader = makeUpload(folder);
  const editable = Object.keys(Model.rawAttributes).filter((k) => !['id', 'createdAt', 'updatedAt'].includes(k));
  const pick = (req) => {
    const data = {};
    for (const key of editable) {
      if (req.body[key] !== undefined) data[key] = req.body[key] === '' ? null : req.body[key];
    }
    if (req.file) data.image = `/media/${folder}/${req.file.filename}`;
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

  app.post(`/api/${route}`, authMiddleware, withUpload(uploader), async (req, res) => {
    try {
      res.status(201).json(await Model.create(pick(req)));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  app.put(`/api/${route}/:id`, authMiddleware, withUpload(uploader), async (req, res) => {
    try {
      const item = await Model.findByPk(req.params.id);
      if (!item) return res.status(404).json({ error: 'Introuvable' });
      const previousImage = item.image;
      const data = pick(req);
      await item.update(data);
      if ('image' in data && data.image !== previousImage) removeMedia(previousImage);
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
        removeMedia(item.image);
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
