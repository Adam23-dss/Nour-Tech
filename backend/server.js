// backend/server.js - VERSION CORRECTE (À COPIER EN ENTIER)
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configuration du transporteur email (UNE SEULE FOIS)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Route test
app.get('/api/test', (req, res) => {
  res.json({ message: '🚀 Backend Nour Tech fonctionne !' });
});

// UNE SEULE ROUTE CONTACT - complète avec email
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    // 1. Email à vous-même
    await transporter.sendMail({
      from: `"Nour Tech Website" <${process.env.EMAIL_USER}>`,
      to: 'nourtech@gmail.com',
      subject: `Nouvelle demande: ${subject}`,
      html: `
        <h2>📱 NOUVELLE DEMANDE DE CONTACT</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr>
        <p style="color: gray;">Reçu depuis le site Nour Tech</p>
      `
    });

    // 2. Email de confirmation au client (optionnel)
    if (email) {
      await transporter.sendMail({
        from: `"Nour Tech" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: '✅ Nous avons reçu votre demande - Nour Tech',
        html: `
          <h2>Merci ${name} de nous avoir contacté !</h2>
          <p>Nous avons bien reçu votre demande concernant <strong>"${subject}"</strong></p>
          <p>Notre équipe vous répondra dans les <strong>24 heures ouvrées</strong>.</p>
          <br>
          <p><strong>Récapitulatif de votre message:</strong></p>
          <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">${message}</p>
          <br>
          <p>Cordialement,</p>
          <p><strong>L'équipe Nour Tech</strong></p>
          <p>📞 +235 66 75 00 15</p>
          <p>📍 N'Djaména, Tchad</p>
          <hr>
          <p style="color: gray; font-size: 12px;">Ceci est un message automatique, merci de ne pas répondre.</p>
        `
      });
    }

    console.log('✅ Email envoyé avec succès à:', email);
    res.status(200).json({ 
      success: true, 
      message: 'Message envoyé avec succès !' 
    });

  } catch (error) {
    console.error('❌ Erreur détaillée:', error);
    res.status(500).json({ 
      error: 'Erreur lors de l\'envoi du message',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Backend Nour Tech démarré sur http://localhost:${PORT}`);
  console.log(`📝 Test API: http://localhost:${PORT}/api/test`);
  console.log(`📧 Contact API: http://localhost:${PORT}/api/contact\n`);
});