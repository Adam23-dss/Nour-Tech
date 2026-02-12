// src/pages/Contact.jsx - REMPLACER TOUT LE CONTENU
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulation envoi (à remplacer par vrai backend plus tard)
    setTimeout(() => {
      console.log('Formulaire soumis:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <div className="bg-white">
      {/* En-tête */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discutons de votre projet. Notre équipe vous répondra dans les 24h.
          </p>
        </div>
      </section>

      {/* Formulaire + Infos */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            
            {status === 'success' && (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
                ✅ Message envoyé avec succès ! Nous vous répondrons bientôt.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Objet de votre message"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>

          {/* Coordonnées */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Avenue Charles de Gaulle<br />
                      N'Djaména, Tchad
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-gray-600">+235 XX XX XX XX</p>
                    <p className="text-gray-600">+235 XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">contact@nourtech.td</p>
                    <p className="text-gray-600">support@nourtech.td</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">⏰</div>
                  <div>
                    <h3 className="font-semibold mb-1">Horaires</h3>
                    <p className="text-gray-600">Lun - Ven: 8h00 - 18h00</p>
                    <p className="text-gray-600">Sam: 9h00 - 13h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte simulée */}
            <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
              <span className="text-gray-600">Carte interactive</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};