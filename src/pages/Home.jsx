import { motion } from 'framer-motion';
import { ArrowRightIcon, PhoneIcon, DevicePhoneMobileIcon, ComputerDesktopIcon, GlobeAltIcon, WrenchScrewdriverIcon, ShieldCheckIcon, TruckIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductImage, productImageFit } from '../components/ui/ProductImage';
import { TechServicesSection, ProcessSection, ProjectsSection, BlogSection } from '../components/sections/HomeTech';
import { API_URL } from '../utils/api';

export const Home = () => {
  const { t } = useTranslation();
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/products`);
        setPopularProducts(response.data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
  }, []);


  const categories = [
    {
      title: t('categories.phones'),
      description: "Derniers modèles iPhone, Samsung et Xiaomi au meilleur prix.",
      icon: DevicePhoneMobileIcon,
      color: "from-blue-500 to-indigo-600",
      link: "/boutique?cat=phones"
    },
    {
      title: t('categories.computers'),
      description: "MacBook, Dell et HP pour professionnels et étudiants.",
      icon: ComputerDesktopIcon,
      color: "from-purple-500 to-pink-600",
      link: "/boutique?cat=computers"
    },
    {
      title: t('categories.import'),
      description: "Produits sur mesure depuis Dubaï, la Chine et l'Europe.",
      icon: GlobeAltIcon,
      color: "from-emerald-500 to-teal-600",
      link: "/contact"
    },
    {
      title: t('categories.repair'),
      description: "Réparation express et diagnostic gratuit par des experts.",
      icon: WrenchScrewdriverIcon,
      color: "from-orange-500 to-red-600",
      link: "/boutique#reparation"
    }
  ];

  return (
    <div className="bg-white overflow-hidden dark:bg-brand-black">
      {/* ========================================= */}
      {/* HERO SECTION - DESIGN ULTRA PREMIUM */}
      {/* ========================================= */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 dark:from-blue-950/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
          
          {/* Animated Blobs */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"
          ></motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-8">
                <SparklesIcon className="h-5 w-5 text-brand-red" />
                <span className="eyebrow">Nour Tech 2.0</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] mb-8 dark:text-white">
                <span className="title-mark">{t('hero.title')}</span> <br />
                <span className="text-gradient">{t('hero.titleAccent')}</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed dark:text-gray-400">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/boutique"
                  className="btn-xw text-lg"
                >
                  <span>{t('hero.cta')}</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-xw-outline text-lg"
                >
                  <span>{t('hero.devis')}</span>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 animate-float">
                <img 
                  src="/images/produits/2026/iphone-17-pro-max.png" 
                  alt="iPhone 17 Pro Max"
                  className="mx-auto h-[560px] w-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
                />
              </div>
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-20 -left-10 glass p-6 rounded-2xl shadow-2xl z-20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                    <ShieldCheckIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">Garantie 100%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Produits Authentiques</div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-20 -right-10 glass p-6 rounded-2xl shadow-2xl z-20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                    <TruckIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">Livraison 48h</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Partout au Tchad</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <TechServicesSection />
      <ProcessSection />

      {/* ========================================= */}
      {/* CATEGORIES GRID */}
      {/* ========================================= */}
      <section className="py-32 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 dark:text-white">Un service complet</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Tout ce dont vous avez besoin pour votre vie numérique au Tchad.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-white p-10 rounded-2xl shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all border border-gray-100 group dark:bg-[#1a1a1a] dark:border-white/10"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 dark:text-white">{cat.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed dark:text-gray-400">{cat.description}</p>
                  <Link to={cat.link} className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                    Découvrir <ArrowRightIcon className="h-5 w-5 ml-2" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* POPULAR PRODUCTS */}
      {/* ========================================= */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16"
          >
            <div className="max-w-xl">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 dark:text-white">Les favoris du moment</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Une sélection des meilleurs produits actuellement disponibles en boutique.</p>
            </div>
            <Link to="/boutique" className="mt-8 md:mt-0 px-8 py-4 bg-gray-100 text-gray-900 font-bold rounded-2xl hover:bg-gray-900 hover:text-white transition-all dark:bg-white/10 dark:text-white">
              Voir tout le catalogue
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularProducts.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all dark:bg-[#1a1a1a] dark:border-white/10"
              >
                <Link to={`/product/${p.id}`} className="block aspect-[4/5] overflow-hidden bg-gray-50 dark:bg-white/5">
                  <ProductImage src={p.image} alt={p.name} className={`w-full h-full ${productImageFit(p.image, 'p-8')} group-hover:scale-110 transition-transform duration-500`} />
                </Link>
                <div className="p-8">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">{p.brand}</span>
                  <h3 className="text-xl font-black text-gray-900 mb-4 truncate dark:text-white">{p.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-black text-gray-900 dark:text-white">{p.price} F</span>
                    <Link 
                      to={`/product/${p.id}`}
                      className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                    >
                      <ArrowRightIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection />

      <BlogSection />

      {/* ========================================= */}
      {/* FAQ SECTION */}
      {/* ========================================= */}
      <section className="py-32 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">Questions fréquentes</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400">Tout ce que vous devez savoir sur nos services.</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Les produits sont-ils authentiques ?",
                  a: "Oui, tous nos produits sont 100% originaux. Nous nous approvisionnons directement auprès des distributeurs agréés à Dubaï, en Europe et aux USA."
                },
                {
                  q: "Quelle est la durée de la garantie ?",
                  a: "La plupart de nos produits neufs bénéficient d'une garantie constructeur de 12 mois. Pour le reconditionné, nous offrons une garantie Nour Tech de 6 mois."
                },
                {
                  q: "Comment fonctionne l'importation spéciale ?",
                  a: "Vous nous soumettez le modèle exact souhaité. Nous établissons un devis incluant transport et douane. Après acompte, la livraison s'effectue sous 7 à 12 jours ouvrés."
                },
                {
                  q: "Livrez-vous en dehors de N'Djaména ?",
                  a: "Nous livrons partout au Tchad via nos partenaires de transport locaux (Moundou, Abeché, Sarh, etc.). Des frais de port peuvent s'appliquer."
                }
              ].map((faq, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm"
                >
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 dark:bg-blue-600/20 text-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-sm">?</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-12">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* CTA SECTION - ULTRA MODERN */}
      {/* ========================================= */}
      <section className="py-32 bg-white dark:bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-2xl p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 L100 100 L0 100 Z" fill="white"></path>
              </svg>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                Prêt à passer au <br /> niveau supérieur ?
              </h2>
              <p className="text-2xl text-blue-100 mb-12 font-light">
                Contactez-nous pour un devis personnalisé ou visitez notre boutique à N'Djaména.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/contact"
                  className="px-12 py-6 bg-white text-blue-900 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-black/20"
                >
                  Démarrer un projet
                </Link>
                <a
                  href="tel:+23566750015"
                  className="px-12 py-6 bg-blue-500/20 backdrop-blur-xl border-2 border-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-all flex items-center space-x-3"
                >
                  <PhoneIcon className="h-6 w-6" />
                  <span>+235 66 75 00 15</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/23566750015?text=Bonjour%20Nour%20Tech%2C%20j'aimerais%20avoir%20des%20informations..."
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-400 to-green-600 text-white p-4 lg:px-5 lg:py-3 rounded-full shadow-[0_20px_50px_rgba(22,163,74,0.3)] z-50 flex items-center space-x-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.032 21.97c-2.628 0-5.18-.836-7.248-2.394l-4.784 1.562 1.562-4.784c-1.68-2.2-2.58-4.938-2.58-7.768 0-6.894 5.6-12.494 12.494-12.494 3.334 0 6.466 1.3 8.824 3.658 2.358 2.358 3.658 5.49 3.658 8.824 0 6.894-5.6 12.494-12.494 12.494zM12.032 2.248c-5.78 0-10.48 4.702-10.48 10.48 0 2.52.884 4.948 2.508 6.856l-1.086 3.324 3.438-1.086c1.848 1.372 4.138 2.146 6.62 2.146 5.78 0 10.48-4.702 10.48-10.48 0-2.8-1.092-5.432-3.074-7.414-1.982-1.982-4.614-3.074-7.414-3.074z"/>
        </svg>
        <span className="hidden lg:inline font-black">Besoin d'aide ?</span>
      </motion.a>
    </div>
  );
};