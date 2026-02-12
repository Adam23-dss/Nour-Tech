// backend/server.js - CRÉER CE FICHIER
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route test
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend Nour Tech fonctionne !' });
});

// Route contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    // Configuration email (test - affiche dans console)
    console.log('📧 Nouveau message de contact :');
    console.log('De:', name, email);
    console.log('Sujet:', subject);
    console.log('Message:', message);
    console.log('---');

    // Simuler envoi réussi
    res.status(200).json({ 
      success: true, 
      message: 'Message reçu avec succès !' 
    });

  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ 
      error: 'Erreur lors de l\'envoi du message' 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend Nour Tech démarré sur http://localhost:${PORT}`);
});