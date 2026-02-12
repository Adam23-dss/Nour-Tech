// src/pages/Contact.jsx - DESIGN MODERNE (100% CORRIGÉ)
import { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      // ✅ SOLUTION 1: Supprimer la variable si non utilisée
      await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      // ✅ SOLUTION 2: Supprimer complètement le paramètre error
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Discutons de votre projet. Notre équipe vous répond sous 24h.
          </p>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          
          {/* FORMULAIRE */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Demande de devis
            </h2>
            <p className="text-gray-600 mb-8">
              Réponse garantie sous 24h ouvrées
            </p>

            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl mb-8 flex items-center">
                <span className="text-2xl mr-3">✅</span>
                Message envoyé ! Nous vous répondrons rapidement.
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-8 flex items-center">
                <span className="text-2xl mr-3">❌</span>
                Erreur lors de l'envoi. Veuillez réessayer.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50/50"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50/50"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50/50"
                    placeholder="+235 XX XX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50/50"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="Achat téléphone">📱 Achat téléphone</option>
                    <option value="Achat ordinateur">💻 Achat ordinateur</option>
                    <option value="Demande import">✈️ Demande import</option>
                    <option value="Réparation">🔧 Réparation</option>
                    <option value="Autre">📝 Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50/50"
                  placeholder="Décrivez votre besoin (modèle, quantité, budget...)"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Envoi en cours...
                  </span>
                ) : 'Envoyer la demande'}
              </button>
            </form>
          </div>

          {/* INFORMATIONS DE CONTACT */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contact direct
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                    <PhoneIcon className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                    <a href="tel:+23566750015" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition">
                      +235 66 75 00 15
                    </a>
                    <p className="text-gray-600">Urgences réparation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                    <EnvelopeIcon className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:contact@nourtech.td" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition block">
                      nourtech@gmail.com
                    </a>
                    
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                    <MapPinIcon className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Adresse</p>
                    <p className="text-lg font-semibold text-gray-900">N'Djaména, Tchad</p>
                    <p className="text-gray-600">Avenue Charles de Gaulle</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <ClockIcon className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Horaires d'ouverture</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Lundi - Samedi</span>
                  <span className="font-bold text-gray-900">08h00 - 22h00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Dimanche</span>
                  <span className="font-bold text-gray-900">09h00 - 20h00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700"></span>
                  <span className="text-gray-500">Fermé</span>
                </div>
              </div>

              <div className="mt-8 p-5 bg-blue-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Réparation express :</span> Sur rendez-vous
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">📱</span>
                <h3 className="text-2xl font-bold">WhatsApp</h3>
              </div>
              <p className="text-white/90 mb-6">
                Besoin d'une réponse immédiate ? Contactez-nous sur WhatsApp !
              </p>
              <a 
                href="https://wa.me/23566750015?text=Bonjour%20Nour%20Tech%2C%20j'aimerais%20avoir%20des%20informations..."
                className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition transform hover:scale-105"
              >
                <span>Nous écrire sur WhatsApp</span>
                <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.032 21.97c-2.628 0-5.18-.836-7.248-2.394l-4.784 1.562 1.562-4.784c-1.68-2.2-2.58-4.938-2.58-7.768 0-6.894 5.6-12.494 12.494-12.494 3.334 0 6.466 1.3 8.824 3.658 2.358 2.358 3.658 5.49 3.658 8.824 0 6.894-5.6 12.494-12.494 12.494z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};