import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const Contact = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const [formData, setFormData] = useState(() => ({
    name: '',
    email: '',
    phone: '',
    subject: location.state?.orderSummary ? 'Achat téléphone' : '',
    message: location.state?.orderSummary 
      ? `Bonjour, je souhaite commander :\n\n${location.state.orderSummary}\n\nTotal estimé : ${location.state.total.toLocaleString()} FCFA`
      : ''
  }));
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        const errData = await response.json();
        console.error('Server error:', errData);
        setStatus('error');
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="bg-white dark:bg-brand-black pt-20">
      {/* HEADER */}
      <section className="bg-gray-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="white"></path>
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl lg:text-8xl font-black mb-8"
          >
            {i18n.language === 'ar' ? 'دعنا نتحدث عن' : 'Parlons de'} <br />
            <span className="text-blue-500">{i18n.language === 'ar' ? 'مشروعك.' : 'votre projet.'}</span>
          </motion.h1>
          <p className="text-2xl text-gray-400 max-w-2xl font-light">
            {i18n.language === 'ar' ? 'سؤال؟ طلب؟ فريقنا سيرد عليك خلال 24 ساعة.' : 'Une question ? Une commande ? Notre équipe vous répond sous 24h.'}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 max-w-7xl mx-auto">
          
          {/* FORM */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white dark:bg-[#1a1a1a] p-12 rounded-2xl shadow-2xl border border-gray-100 dark:border-white/5"
          >
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8">
              {i18n.language === 'ar' ? 'أرسل رسالة' : 'Envoyer un message'}
            </h2>
            
            {status === 'success' ? (
              <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800 text-center">
                <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-black text-green-900 dark:text-green-400 mb-2">Message envoyé !</h3>
                <p className="text-green-700 dark:text-green-300 font-medium">Nous vous recontacterons très rapidement.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">{i18n.language === 'ar' ? 'الاسم الكامل' : 'Nom complet'}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-50 dark:bg-white/5 border-2 border-transparent rounded-2xl px-6 py-4 focus:bg-white dark:focus:bg-white/10 focus:border-blue-600 outline-none transition-all font-bold dark:text-white" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-50 dark:bg-white/5 border-2 border-transparent rounded-2xl px-6 py-4 focus:bg-white dark:focus:bg-white/10 focus:border-blue-600 outline-none transition-all font-bold dark:text-white" placeholder="votre@email.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">{i18n.language === 'ar' ? 'الهاتف' : 'Téléphone'}</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-50 dark:bg-white/5 border-2 border-transparent rounded-2xl px-6 py-4 focus:bg-white dark:focus:bg-white/10 focus:border-blue-600 outline-none transition-all font-bold dark:text-white" placeholder="+235 66 75 00 15" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">{i18n.language === 'ar' ? 'الموضوع' : 'Sujet'}</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-gray-50 dark:bg-white/5 border-2 border-transparent rounded-2xl px-6 py-4 focus:bg-white dark:focus:bg-white/10 focus:border-blue-600 outline-none transition-all font-bold dark:text-white">
                      <option value="">Sélectionnez</option>
                      <option value="Achat téléphone">📱 {i18n.language === 'ar' ? 'شراء هاتف' : 'Achat téléphone'}</option>
                      <option value="Achat ordinateur">💻 {i18n.language === 'ar' ? 'شراء حاسوب' : 'Achat ordinateur'}</option>
                      <option value="Demande import">✈️ {i18n.language === 'ar' ? 'طلب استيراد' : 'Demande import'}</option>
                      <option value="Réparation">🔧 {i18n.language === 'ar' ? 'إصلاح' : 'Réparation'}</option>
                      <option value="Autre">📝 {i18n.language === 'ar' ? 'آخر' : 'Autre'}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full bg-gray-50 dark:bg-white/5 border-2 border-transparent rounded-2xl px-6 py-4 focus:bg-white dark:focus:bg-white/10 focus:border-blue-600 outline-none transition-all font-bold dark:text-white" placeholder="Décrivez votre besoin..."></textarea>
                </div>

                <button type="submit" disabled={status === 'loading'} className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98] disabled:opacity-50">
                  {status === 'loading' ? (i18n.language === 'ar' ? 'جاري الإرسال...' : 'Envoi...') : (i18n.language === 'ar' ? 'إرسال الطلب' : 'Envoyer la demande')}
                </button>
              </form>
            )}
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-8">{i18n.language === 'ar' ? 'معلومات الاتصال' : 'Coordonnées'}</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <PhoneIcon className="h-8 w-8" />
                  </div>
                  <div className={`${i18n.language === 'ar' ? 'mr-6' : ''}`}>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{i18n.language === 'ar' ? 'الهاتف' : 'Téléphone'}</p>
                    <a href="tel:+23566750015" className="text-2xl font-black text-gray-900 dark:text-white hover:text-blue-600 transition-colors">+235 66 75 00 15</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <EnvelopeIcon className="h-8 w-8" />
                  </div>
                  <div className={`${i18n.language === 'ar' ? 'mr-6' : ''}`}>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:nourtech@gmail.com" className="text-2xl font-black text-gray-900 dark:text-white hover:text-blue-600 transition-colors">nourtech@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <MapPinIcon className="h-8 w-8" />
                  </div>
                  <div className={`${i18n.language === 'ar' ? 'mr-6' : ''}`}>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{i18n.language === 'ar' ? 'العنوان' : 'Adresse'}</p>
                    <p className="text-2xl font-black text-gray-900 dark:text-white leading-tight">Avenue Charles de Gaulle,<br /> N'Djaména, Tchad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AIRTEL MONEY CARD */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 p-10 rounded-2xl text-white shadow-2xl shadow-red-600/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-2xl font-black">Airtel Money</h3>
              </div>
              <p className="text-red-100 font-medium mb-8 text-lg leading-relaxed">
                {i18n.language === 'ar' ? 'ادفع ثمن طلباتك مباشرة عبر Airtel Money للمعالجة ذات الأولوية.' : 'Réglez vos commandes directement via Airtel Money pour un traitement prioritaire.'}
              </p>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <p className="text-xs font-black uppercase tracking-widest text-red-200 mb-2">{i18n.language === 'ar' ? 'رقم التحويل' : 'Numéro de transfert'}</p>
                <p className="text-3xl font-black tracking-wider" dir="ltr">+235 66 75 00 15</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <section className="h-[500px] w-full bg-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.760416426017!2d15.044632!3d12.134845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA4JzA1LjQiTiAxNcKwMDInNDAuNyJF!5e0!3m2!1sfr!2std!4v1700000000000!5m2!1sfr!2std"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
          allowFullScreen=""
          loading="lazy"
          title="Carte Nour Tech"
        ></iframe>
      </section>
    </div>
  );
};