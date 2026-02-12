// src/components/layout/Footer.jsx - VERSION COMPLÈTE
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  ArrowRightIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Téléphones", icon: DevicePhoneMobileIcon, href: "/services" },
    { name: "Ordinateurs", icon: ComputerDesktopIcon, href: "/services" },
    { name: "Maintenance", icon: WrenchScrewdriverIcon, href: "/services" },
    { name: "Import", icon: GlobeAltIcon, href: "/services" },
  ];

  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient Ornament */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* ========================================= */}
        {/* 1. MAIN FOOTER - 4 COLONNES */}
        {/* ========================================= */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 py-16 lg:py-20">
          
          {/* ---------------------------------------- */}
          {/* COLONNE 1 - BRAND (LG:3) */}
          {/* ---------------------------------------- */}
          <div className="lg:col-span-3 space-y-6">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all group-hover:scale-105">
                <span className="text-white text-2xl font-bold">NT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Nour Tech
                </span>
                <span className="text-xs text-gray-400 tracking-wider">
                  LA TECHNOLOGIE À VOTRE PORTÉE
                </span>
              </div>
            </Link>
            
            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Votre partenaire de confiance pour l'achat, l'import et la maintenance 
              de matériel high-tech au Tchad depuis 2024.
            </p>
            
            {/* 📱 RÉSEAUX SOCIAUX - Centrés sur mobile, alignés gauche sur desktop */}
            <div className="flex justify-center lg:justify-start space-x-4 pt-4">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/23566750015" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg group"
              >
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.032 21.97c-2.628 0-5.18-.836-7.248-2.394l-4.784 1.562 1.562-4.784c-1.68-2.2-2.58-4.938-2.58-7.768 0-6.894 5.6-12.494 12.494-12.494 3.334 0 6.466 1.3 8.824 3.658 2.358 2.358 3.658 5.49 3.658 8.824 0 6.894-5.6 12.494-12.494 12.494zM12.032 2.248c-5.78 0-10.48 4.702-10.48 10.48 0 2.52.884 4.948 2.508 6.856l-1.086 3.324 3.438-1.086c1.848 1.372 4.138 2.146 6.62 2.146 5.78 0 10.48-4.702 10.48-10.48 0-2.8-1.092-5.432-3.074-7.414-1.982-1.982-4.614-3.074-7.414-3.074z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a 
                href="https://facebook.com/nourtech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg group"
              >
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              
              {/* Email */}
              <a 
                href="mailto:contact@nourtech.td" 
                className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg group"
              >
                <EnvelopeIcon className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* ---------------------------------------- */}
          {/* COLONNE 2 - SERVICES (LG:3) */}
          {/* ---------------------------------------- */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-300 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-3"></span>
              Nos Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <li key={index}>
                    <Link 
                      to={service.href}
                      className="flex items-center text-gray-400 hover:text-white group transition-all"
                    >
                      <Icon className="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-400 transition-colors" />
                      <span>{service.name}</span>
                      <ArrowRightIcon className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ---------------------------------------- */}
          {/* COLONNE 3 - LIENS RAPIDES (LG:2) */}
          {/* ---------------------------------------- */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-300 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-3"></span>
              Liens Rapides
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="flex items-center text-gray-400 hover:text-white group transition-all"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-3 group-hover:bg-blue-400 group-hover:scale-125 transition-all"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------------------------------- */}
          {/* COLONNE 4 - CONTACT (LG:4) */}
          {/* ---------------------------------------- */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-300 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-3"></span>
              Contact
            </h3>
            
            {/* 📞 CONTACT - TOUJOURS LISIBLE (space-y-5) */}
            <div className="space-y-5">
              {/* Adresse */}
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                  <MapPinIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Adresse</p>
                  <p className="text-white font-medium">N'Djaména, Tchad</p>
                  <p className="text-gray-500 text-sm">Avenue Charles de Gaulle</p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                  <PhoneIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Téléphone</p>
                  <a href="tel:+23566750015" className="text-white font-medium hover:text-blue-400 transition-colors block">
                    +235 66 75 00 15
                  </a>
                  <a href="tel:+23566234567" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    +235 67 67 09 00
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:contact@nourtech.td" className="text-white font-medium hover:text-blue-400 transition-colors block">
                    nourtech@gmail.com
                  </a>
                  
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                  <ClockIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Horaires</p>
                  <p className="text-white font-medium">Lun - Sam: 08h00 - 22h00</p>
                  <p className="text-gray-400 text-sm">Dim: 09h00 - 20h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* 2. NEWSLETTER SECTION - 100% MOBILE FRIENDLY */}
        {/* ========================================= */}
        <div className="relative py-12 border-t border-gray-800">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">
                Restez informé
              </h4>
              <p className="text-gray-400">
                Recevez nos offres spéciales et nouveaux arrivages
              </p>
            </div>
            <div>
              {/* Formulaire - Stack mobile, ligne desktop */}
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Votre adresse email"
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <button 
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>S'abonner</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                En vous abonnant, vous acceptez de recevoir nos newsletters. Désabonnement possible à tout moment.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* 3. BOTTOM BAR - S'EMPILE SUR MOBILE */}
        {/* ========================================= */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright & Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-500">
            <span>© {currentYear} Nour Tech. Tous droits réservés.</span>
            <Link to="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
            <Link to="/cgv" className="hover:text-white transition-colors">
              CGV
            </Link>
          </div>
          
          {/* Paiement - Centré sur mobile */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="text-sm text-gray-500">Paiement accepté :</span>
            <div className="flex space-x-2">
              <div className="w-10 h-7 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400 hover:bg-gray-700 transition">Airtel Money</div>
              <div className="w-10 h-7 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400 hover:bg-gray-700 transition">Moov Money</div>
              <div className="w-10 h-7 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400 hover:bg-gray-700 transition">Konoom Mobile Money</div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* 4. BACK TO TOP BUTTON */}
      {/* ========================================= */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-6 lg:bottom-12 lg:right-12 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
        aria-label="Retour en haut"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};