import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useCart } from "../context/useCart";
import { useFavorites } from "../context/FavoritesContext";
import { useCompare } from "../context/CompareContext";
import { repairServices } from "../utils/products";
import { ProductImage, productImageFit } from "../components/ui/ProductImage";
import { PageHero } from "../components/ui/PageHero";

import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  DeviceTabletIcon,
  SpeakerWaveIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  SparklesIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  XMarkIcon,
  PlusIcon,
  HeartIcon as HeartOutline,
  ScaleIcon
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("cat") || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const { t, i18n } = useTranslation();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { toggleCompare, isInCompare } = useCompare();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
  }, []);

  const getImageUrl = (imagePath) => {
    if (imagePath?.startsWith('http')) return imagePath;
    return `http://localhost:5000${imagePath?.replace('/images/produits', '/uploads')}`;
  };

  const categories = useMemo(() => [
    { id: "all", name: t('categories.all', 'Tous'), icon: SparklesIcon },
    { id: "phones", name: t('categories.phones'), icon: DevicePhoneMobileIcon },
    { id: "computers", name: t('categories.computers'), icon: ComputerDesktopIcon },
    { id: "tablets", name: t('categories.tablets'), icon: DeviceTabletIcon },
    { id: "accessories", name: t('categories.accessories'), icon: SpeakerWaveIcon },
    { id: "repair", name: t('categories.repair'), icon: WrenchScrewdriverIcon },
    { id: "import", name: t('categories.import'), icon: GlobeAltIcon },
  ], [t]);

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.brand?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [products, selectedCategory, searchQuery]);

  return (
    <div className="bg-white dark:bg-[#0a0a0a]">
      <PageHero
        title={i18n.language === 'ar' ? 'كتالوجنا' : 'Notre'}
        accent={t('nav.shop')}
        subtitle={i18n.language === 'ar'
          ? 'اكتشف مجموعتنا الحصرية من المنتجات التقنية المستوردة والمضمونة. جودة ممتازة بأسعار تنافسية في تشاد.'
          : 'Découvrez notre sélection exclusive de produits high-tech importés et garantis. Qualité premium, prix compétitifs au Tchad.'}
        crumbs={[{ label: t('nav.shop') }]}
      />

      {/* FILTERS & SEARCH */}
      <section className="2xl:sticky 2xl:top-[80px] z-30 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col 2xl:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative w-full 2xl:max-w-md group"
            >
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                placeholder="Rechercher (iPhone, MacBook...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-white/5 border-2 border-transparent rounded-2xl focus:bg-white dark:focus:bg-white/10 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all font-bold dark:text-white"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full transition-colors">
                  <XMarkIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </button>
              )}
            </motion.div>

            {/* Categories */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="w-full 2xl:w-auto"
            >
              <div className="flex flex-wrap justify-center gap-2 bg-gray-50 dark:bg-white/5 p-2 rounded-[2rem] border border-gray-100 dark:border-white/5">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-bold transition-all whitespace-nowrap ${
                        isActive
                          ? "bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-md scale-105"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-20 container mx-auto px-6 min-h-[400px]">
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product, idx) => {
              const liked = isFavorite(product.id);
              const compared = isInCompare(product.id);
              
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white dark:bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-72 bg-gray-50 dark:bg-white/5 overflow-hidden">
                    <Link to={`/product/${product.id}`} className="block w-full h-full">
                      <ProductImage src={product.image} alt={product.name} className={`w-full h-full ${productImageFit(product.image)} group-hover:scale-110 transition-transform duration-700`} />
                    </Link>
                    
                    {/* Quick Actions Overlay */}
                    <div className="absolute top-5 right-5 z-20 flex flex-col space-y-2">
                      <button 
                        onClick={() => toggleFavorite(product)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${liked ? 'bg-red-500 text-white' : 'bg-white text-gray-900 hover:bg-red-50'} dark:text-white`}
                      >
                        {liked ? <HeartSolid className="h-5 w-5" /> : <HeartOutline className="h-5 w-5" />}
                      </button>
                      <button 
                        onClick={() => toggleCompare(product)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${compared ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'} dark:text-white`}
                      >
                        <ScaleIcon className="h-5 w-5" />
                      </button>
                    </div>

                    {product.badge && (
                      <span className={`absolute top-5 left-5 z-20 ${product.badgeColor} text-white text-[10px] font-black px-4 py-2 rounded-full shadow-lg uppercase tracking-widest`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap ${
                        product.stock === "En stock" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                      }`}>
                        {product.stock}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">Garantie {product.warranty}</span>
                    </div>

                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex flex-wrap content-start gap-2 mb-8 min-h-[4.5rem]">
                      {product.features.slice(0, 2).map((f, i) => (
                        <span key={i} className="text-[10px] font-bold bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-white/5">{f}</span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        {product.oldPrice && <p className="text-sm text-gray-400 line-through mb-1">{product.oldPrice} F</p>}
                        <p className="text-2xl font-black text-gray-900 dark:text-white">{product.price} <span className="text-sm font-bold text-gray-400">F</span></p>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all active:scale-95 group/btn"
                      >
                        <PlusIcon className="h-7 w-7 group-hover/btn:rotate-90 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-40">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 dark:bg-white/10">
              <MagnifyingGlassIcon className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-4 dark:text-white">Aucun résultat</h3>
            <p className="text-xl text-gray-500 dark:text-gray-400">Essayez avec d'autres mots-clés ou une autre catégorie.</p>
            <button onClick={() => {setSelectedCategory("all"); setSearchQuery("");}} className="mt-8 text-blue-600 font-bold hover:underline">Voir tout le catalogue</button>
          </div>
        )}
      </section>

      {/* REPAIR SERVICES - PREMIUM LIST */}
      <section id="reparation" className="py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center mb-20">
          <span className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Expertise Technique</span>
          <h2 className="text-4xl lg:text-6xl font-black mb-8">Maintenance & Réparation</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto italic">Diagnostic gratuit, travail garanti et délais records par nos techniciens certifiés.</p>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {repairServices.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="text-4xl mb-6 bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-xl font-black mb-4">{s.name}</h3>
              <div className="flex justify-between items-end">
                <span className="text-2xl font-black text-blue-400">{s.price} <span className="text-sm font-bold text-blue-300/50">F</span></span>
                <div className="text-right">
                  <div className="flex items-center text-xs text-gray-400 font-bold mb-1 uppercase tracking-widest"><ClockIcon className="h-4 w-4 mr-1 text-blue-400" /> {s.time}</div>
                  <div className="text-[10px] text-green-400 font-black uppercase tracking-widest">Garantie {s.warranty}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-white text-gray-900 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-black/50 dark:bg-[#1a1a1a] dark:text-white">
            Prendre rendez-vous <ArrowRightIcon className="h-6 w-6 ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
};