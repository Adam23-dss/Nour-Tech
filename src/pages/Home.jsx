// src/pages/Home.jsx - DESIGN MODERNE & ÉLÉGANT
import { ArrowRightIcon, PhoneIcon, DevicePhoneMobileIcon, ComputerDesktopIcon, GlobeAltIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const Home = () => {
  const categories = [
    {
      title: "Téléphones",
      description: "iPhone, Samsung, Xiaomi",
      icon: DevicePhoneMobileIcon,
      color: "from-purple-500 to-purple-600",
      bgLight: "bg-purple-50",
      textColor: "text-purple-600",
      features: ["Neuf & reconditionné", "Tous modèles", "Garantie 12 mois"]
    },
    {
      title: "Ordinateurs",
      description: "MacBook, Dell, HP",
      icon: ComputerDesktopIcon,
      color: "from-blue-500 to-blue-600",
      bgLight: "bg-blue-50",
      textColor: "text-blue-600",
      features: ["PC portables & fixes", "Pièces détachées", "Accessoires"]
    },
    {
      title: "Import",
      description: "Dubaï, Chine, Europe",
      icon: GlobeAltIcon,
      color: "from-green-500 to-green-600",
      bgLight: "bg-green-50",
      textColor: "text-green-600",
      features: ["Délai 7-10 jours", "Prix compétitifs", "Produits authentiques"]
    },
    {
      title: "Maintenance",
      description: "Réparation & entretien",
      icon: WrenchScrewdriverIcon,
      color: "from-orange-500 to-orange-600",
      bgLight: "bg-orange-50",
      textColor: "text-orange-600",
      features: ["Changement écran", "Batterie", "Diagnostic gratuit"]
    }
  ];

  const produitsPopulaires = [
    {
      nom: "iPhone 15 Pro",
      prix: "750 000",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
      badge: "Nouveau",
      couleur: "bg-gradient-to-br from-gray-800 to-gray-900"
    },
    {
      nom: "Samsung S24 Ultra",
      prix: "650 000",
      image: "https://images.unsplash.com/photo-1705355582213-96d254d8f7fa?w=500",
      badge: "Populaire",
      couleur: "bg-gradient-to-br from-blue-800 to-blue-900"
    },
    {
      nom: "MacBook Pro M3",
      prix: "950 000",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      badge: "Premium",
      couleur: "bg-gradient-to-br from-gray-700 to-gray-800"
    },
    {
      nom: "Dell XPS 15",
      prix: "550 000",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
      badge: "Recommandé",
      couleur: "bg-gradient-to-br from-blue-700 to-blue-800"
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION - DESIGN MODERNE AVEC OVERLAY GRADIENT */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image avec overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920" 
            alt="Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-purple-900/90"></div>
        </div>
        
        {/* Contenu Hero */}
        <div className="relative container mx-auto px-6 py-32 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 mb-8">
              <span className="text-white/90 text-sm tracking-wider">🇹🇩 VOTRE PARTENAIRE TECH AU TCHAD</span>
            </div>
            
            {/* Titre avec effet */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Nour Tech
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light">
              La technologie, à votre portée
            </p>
            
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Vente • Import • Service • Maintenance
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="group bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center space-x-2"
              >
                <span>Demander un devis</span>
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/services"
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all flex items-center space-x-2"
              >
                <span>Nos services</span>
              </Link>
            </div>
            
            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-white/70">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-sm text-white/70">Produits vendus</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/70">Support technique</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* CATÉGORIES - DESIGN CARTES MODERNES */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">NOS SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Solutions complètes pour vos besoins tech
          </h2>
          <p className="text-xl text-gray-600">
            Téléphones, ordinateurs, import et réparation - tout au même endroit
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="p-8">
                  {/* Icon Container */}
                  <div className={`${cat.bgLight} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${cat.textColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{cat.title}</h3>
                  <p className="text-gray-600 mb-6">{cat.description}</p>
                  
                  <ul className="space-y-3">
                    {cat.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <span className={`${cat.textColor} mr-2 text-lg`}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/services" 
                    className={`mt-8 inline-flex items-center text-sm font-semibold ${cat.textColor} hover:gap-2 transition-all`}
                  >
                    En savoir plus
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRODUITS POPULAIRES - DESIGN SHOP */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">NOTRE SÉLECTION</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
                Produits populaires
              </h2>
            </div>
            <Link 
              to="/services" 
              className="hidden md:flex items-center text-gray-600 hover:text-blue-600 font-semibold group"
            >
              Voir tous les produits
              <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {produitsPopulaires.map((produit, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={produit.image} 
                    alt={produit.nom}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {produit.badge && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      {produit.badge}
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{produit.nom}</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{produit.prix}</span>
                      <span className="text-sm text-gray-500 ml-1">FCFA</span>
                    </div>
                    <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile view all button */}
          <div className="md:hidden text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Voir tous les produits
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* IMPORT SPÉCIAL - DESIGN PREMIUM */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920" 
            alt="Dubai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/95"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center space-x-6 mb-8">
              <span className="text-5xl">🇦🇪</span>
              <span className="text-5xl">✈️</span>
              <span className="text-5xl">🇹🇩</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Import spécial Dubaï
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Vous cherchez un modèle spécifique ? Nous le commandons pour vous depuis Dubaï, la Chine ou l'Europe.
            </p>
            
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">7-10</div>
                <div className="text-sm text-white/80">Jours délai</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-white/80">Garantie</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">-20%</div>
                <div className="text-sm text-white/80">Sur précommande</div>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              Commander un produit
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTIQUES AVEC ANIMATION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="text-5xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Produits vendus</div>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="text-5xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="text-5xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600">Ans d'expérience</div>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-red-50">
              <div className="text-5xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support technique</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL - DESIGN CONVERSION */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L100 100 L0 100 Z" fill="rgba(255,255,255,0.05)"></path>
          </svg>
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à acquérir votre nouvel appareil ?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Contactez-nous pour un devis gratuit et personnalisé
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center space-x-2"
              >
                <span>Demander un devis</span>
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition" />
              </Link>
              <a
                href="tel:+23566750015"
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all flex items-center space-x-2"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>+235 66 75 00 15</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/23566750015?text=Bonjour%20Nour%20Tech%2C%20j'aimerais%20avoir%20des%20informations%20sur%20vos%20produits..."
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-400 to-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.032 21.97c-2.628 0-5.18-.836-7.248-2.394l-4.784 1.562 1.562-4.784c-1.68-2.2-2.58-4.938-2.58-7.768 0-6.894 5.6-12.494 12.494-12.494 3.334 0 6.466 1.3 8.824 3.658 2.358 2.358 3.658 5.49 3.658 8.824 0 6.894-5.6 12.494-12.494 12.494zM12.032 2.248c-5.78 0-10.48 4.702-10.48 10.48 0 2.52.884 4.948 2.508 6.856l-1.086 3.324 3.438-1.086c1.848 1.372 4.138 2.146 6.62 2.146 5.78 0 10.48-4.702 10.48-10.48 0-2.8-1.092-5.432-3.074-7.414-1.982-1.982-4.614-3.074-7.414-3.074z"/>
        </svg>
      </a>
    </div>
  );
};