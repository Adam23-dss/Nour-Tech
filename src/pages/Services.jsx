// src/pages/Services.jsx - DESIGN PREMIUM COMPLET
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  SparklesIcon,
  CheckBadgeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

export const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les produits', icon: SparklesIcon },
    { id: 'phones', name: 'Téléphones', icon: DevicePhoneMobileIcon },
    { id: 'computers', name: 'Ordinateurs', icon: ComputerDesktopIcon },
    { id: 'repair', name: 'Maintenance', icon: WrenchScrewdriverIcon },
    { id: 'import', name: 'Import', icon: GlobeAltIcon }
  ];

  const products = [
    // 📱 IPHONES
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      category: "phones",
      brand: "Apple",
      price: "950 000",
      oldPrice: "1 050 000",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
      badge: "Nouveau",
      badgeColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      stock: "En stock",
      warranty: "12 mois",
      features: ["Titanium", "A17 Pro", "USB-C", "5G"]
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      category: "phones",
      brand: "Apple",
      price: "750 000",
      oldPrice: "850 000",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
      badge: "-12%",
      badgeColor: "bg-gradient-to-r from-red-500 to-red-600",
      stock: "En stock",
      warranty: "12 mois",
      features: ["Titanium", "A17 Pro", "USB-C", "5G"]
    },
    {
      id: 3,
      name: "iPhone 14 Pro Max",
      category: "phones",
      brand: "Apple",
      price: "650 000",
      image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500",
      badge: "Reconditionné",
      badgeColor: "bg-gradient-to-r from-green-500 to-green-600",
      stock: "En stock",
      warranty: "6 mois",
      features: ["Dynamic Island", "A16", "48MP"]
    },
    
    // 📱 SAMSUNG
    {
      id: 4,
      name: "Samsung S24 Ultra",
      category: "phones",
      brand: "Samsung",
      price: "850 000",
      oldPrice: "950 000",
      image: "https://images.unsplash.com/photo-1705355582213-96d254d8f7fa?w=500",
      badge: "Populaire",
      badgeColor: "bg-gradient-to-r from-purple-500 to-purple-600",
      stock: "Précommande",
      warranty: "12 mois",
      features: ["S Pen", "200MP", "AI", "Snapdragon"]
    },
    {
      id: 5,
      name: "Samsung S23 Ultra",
      category: "phones",
      brand: "Samsung",
      price: "550 000",
      image: "https://images.unsplash.com/photo-1678912342544-6b160cafb9c9?w=500",
      stock: "En stock",
      warranty: "12 mois",
      features: ["S Pen", "200MP", "Snapdragon"]
    },
    
    // 📱 XIAOMI
    {
      id: 6,
      name: "Xiaomi 14 Ultra",
      category: "phones",
      brand: "Xiaomi",
      price: "600 000",
      image: "https://images.unsplash.com/photo-1705355582213-96d254d8f7fa?w=500",
      badge: "Leica",
      badgeColor: "bg-gradient-to-r from-yellow-500 to-yellow-600",
      stock: "Sur commande",
      warranty: "12 mois",
      features: ["Leica", "50MP", "HyperOS"]
    },
    
    // 💻 MACBOOK
    {
      id: 7,
      name: "MacBook Pro M3 Max",
      category: "computers",
      brand: "Apple",
      price: "1 450 000",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      badge: "Premium",
      badgeColor: "bg-gradient-to-r from-gray-800 to-gray-900",
      stock: "Sur commande",
      warranty: "12 mois",
      features: ["M3 Max", "32GB RAM", "1TB SSD", "16\""]
    },
    {
      id: 8,
      name: "MacBook Air M2",
      category: "computers",
      brand: "Apple",
      price: "750 000",
      oldPrice: "850 000",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      badge: "Promo",
      badgeColor: "bg-gradient-to-r from-red-500 to-red-600",
      stock: "En stock",
      warranty: "12 mois",
      features: ["M2", "16GB RAM", "512GB SSD", "13.6\""]
    },
    
    // 💻 PC PORTABLES
    {
      id: 9,
      name: "Dell XPS 15",
      category: "computers",
      brand: "Dell",
      price: "650 000",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
      badge: "Recommandé",
      badgeColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      stock: "En stock",
      warranty: "12 mois",
      features: ["i9", "32GB RAM", "1TB SSD", "OLED"]
    },
    {
      id: 10,
      name: "HP Pavilion 15",
      category: "computers",
      brand: "HP",
      price: "350 000",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
      stock: "En stock",
      warranty: "12 mois",
      features: ["i7", "16GB RAM", "512GB SSD"]
    },
    {
      id: 11,
      name: "Lenovo ThinkPad X1",
      category: "computers",
      brand: "Lenovo",
      price: "550 000",
      image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=500",
      badge: "Business",
      badgeColor: "bg-gradient-to-r from-gray-700 to-gray-800",
      stock: "En stock",
      warranty: "12 mois",
      features: ["i7", "16GB RAM", "512GB SSD", "Sécurisé"]
    }
  ];

  const repairServices = [
    {
      name: "Changement écran iPhone",
      price: "35 000 - 85 000",
      time: "2h",
      warranty: "3 mois",
      icon: "📱"
    },
    {
      name: "Batterie iPhone/Samsung",
      price: "15 000 - 25 000",
      time: "1h",
      warranty: "6 mois",
      icon: "🔋"
    },
    {
      name: "Connecteur de charge",
      price: "8 000 - 12 000",
      time: "45min",
      warranty: "3 mois",
      icon: "🔌"
    },
    {
      name: "Déblocage iPhone",
      price: "10 000",
      time: "30min",
      warranty: "Permanent",
      icon: "🔓"
    },
    {
      name: "Installation Windows",
      price: "5 000",
      time: "1h",
      warranty: "1 mois",
      icon: "💻"
    },
    {
      name: "Changement batterie PC",
      price: "15 000 - 25 000",
      time: "1h30",
      warranty: "3 mois",
      icon: "🖥️"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920" 
            alt="Technology"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 mb-8">
            <SparklesIcon className="h-5 w-5 mr-2 text-yellow-400" />
            <span className="text-white/90 text-sm">CATALOGUE 2026</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nos Produits & Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-8">
            Découvrez notre sélection de produits high-tech et nos services de réparation professionnels
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#produits" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all">
              Voir les produits
            </a>
            <a href="#reparation" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all">
              Services réparation
            </a>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">Produits vendus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support technique</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">7-10</div>
              <div className="text-sm text-gray-600">Jours import</div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTRES CATÉGORIES */}
      <section id="produits" className="pt-16 pb-8 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre catalogue
          </h2>
          <p className="text-xl text-gray-600">
            Filtrez par catégorie pour trouver exactement ce qu'il vous faut
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* GRILLE PRODUITS */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Image */}
              <div className="relative h-64 bg-gray-50 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                />
                {product.badge && (
                  <span className={`absolute top-4 right-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                    {product.badge}
                  </span>
                )}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 text-xs px-3 py-1.5 rounded-full shadow-lg border border-gray-200">
                  {product.brand}
                </span>
              </div>
              
              {/* Infos */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    product.stock === 'En stock' 
                      ? 'bg-green-100 text-green-700' 
                      : product.stock === 'Sur commande'
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {product.stock}
                  </span>
                  <span className="text-xs text-gray-500">
                    Garantie {product.warranty}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Prix */}
                <div className="flex items-end justify-between">
                  <div>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-500 line-through mr-2">
                        {product.oldPrice} F
                      </span>
                    )}
                    <div className="text-2xl font-bold text-blue-600">
                      {product.price} <span className="text-sm font-normal text-gray-500">FCFA</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES RÉPARATION */}
      <section id="reparation" className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center bg-blue-100 px-6 py-2 rounded-full mb-6">
              <WrenchScrewdriverIcon className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold">SERVICE APRÈS-VENTE</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Maintenance & Réparation
            </h2>
            <p className="text-xl text-gray-600">
              Diagnostic gratuit - Travail garanti - Prix transparents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {repairServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                        <span className="text-sm text-gray-500 ml-1">FCFA</span>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-500">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {service.time}
                        </div>
                        <div className="text-xs text-green-600">
                          Garantie {service.warranty}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
            >
              <span>Demander un devis réparation</span>
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE IMPORT */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-12 text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <TruckIcon className="h-5 w-5 mr-2" />
                <span className="text-sm">IMPORT SPÉCIAL</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Vous ne trouvez pas votre produit ?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Nous le commandons pour vous depuis Dubaï, la Chine ou l'Europe !
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">7-10</div>
                  <div className="text-sm text-blue-100">Jours délai</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm text-blue-100">Authentique</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">-20%</div>
                  <div className="text-sm text-blue-100">Précommande</div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all"
              >
                <span>Demander une importation</span>
                <GlobeAltIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
            <div className="hidden lg:block h-96 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800')] bg-cover bg-center"></div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">100% Authentique</h3>
              <p className="text-gray-600 text-sm">Produits vérifiés et garantis</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CurrencyDollarIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Meilleurs prix</h3>
              <p className="text-gray-600 text-sm">Import direct sans intermédiaire</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">SAV inclus</h3>
              <p className="text-gray-600 text-sm">Garantie et service après-vente</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckBadgeIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Techniciens qualifiés</h3>
              <p className="text-gray-600 text-sm">Réparation express garantie</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};