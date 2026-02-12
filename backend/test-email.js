// backend/test-email.js - CRÉER CE FICHIER DE TEST
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function testEmail() {
  try {
    await transporter.sendMail({
      from: `"Nour Tech Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Envoyez-vous un email à vous-même
      subject: '✅ Test réussi - Nour Tech',
      text: 'Félicitations ! Votre configuration email fonctionne parfaitement.',
      html: '<h1>✅ Test réussi !</h1><p>Votre configuration email Nour Tech est opérationnelle.</p>'
    });
    console.log('✅ Email de test envoyé avec succès !');
  } catch (error) {
    console.error('❌ Erreur:', error);
  }
}

testEmail();