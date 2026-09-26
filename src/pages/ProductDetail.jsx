import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../context/useCart";
import { 
  ArrowLeftIcon, 
  ShoppingCartIcon, 
  ShieldCheckIcon, 
  TruckIcon, 
  ClockIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/outline";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        const found = response.data.find(p => p.id === parseInt(id));
        setProduct(found);
      } catch (error) {
        console.error('Error fetching product', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const getImageUrl = (imagePath) => {
    if (imagePath?.startsWith('http')) return imagePath;
    return `http://localhost:5000${imagePath?.replace('/images/produits', '/uploads')}`;
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t('errors.notFound', 'Produit non trouvé')}</h2>
          <button 
            onClick={() => navigate("/boutique")}
            className="text-blue-600 hover:underline flex items-center justify-center"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            {t('nav.shop')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white pt-32 pb-20 dark:bg-brand-black"
    >
      <div className="container mx-auto px-6">
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center text-gray-500 hover:text-blue-600 transition-colors mb-12 dark:text-gray-400"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          {t('common.back', 'Retour')}
        </button>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* IMAGE SECTION */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-inner dark:bg-white/5 dark:border-white/10">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {product.badge && (
              <span className={`absolute top-8 right-8 ${product.badgeColor} text-white px-4 py-2 rounded-full font-bold shadow-lg`}>
                {product.badge}
              </span>
            )}
          </motion.div>

          {/* INFO SECTION */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex flex-col"
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
              {product.brand} • {product.category === 'phones' ? t('categories.phones') : t('categories.computers')}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 dark:text-white">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-4xl font-black text-blue-600">
                {product.price} FCFA
              </span>
              {product.oldPrice && (
                <span className="text-xl text-gray-400 line-through">
                  {product.oldPrice} FCFA
                </span>
              )}
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 dark:text-gray-400">
              {t('product.description', { name: product.name }, "L'excellence technologique à votre portée.")}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 dark:bg-white/5 dark:border-white/10">
                  <CheckBadgeIcon className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-700 dark:text-gray-400">{feature}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 bg-blue-600 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center space-x-3"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                <span>{t('product.add', 'Ajouter au panier')}</span>
              </button>
              <button 
                onClick={() => navigate('/contact', { state: { orderSummary: `1x ${product.name}`, total: parseInt(product.price.replace(/\s/g, '')) }})}
                className="flex-1 bg-gray-900 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center"
              >
                {t('product.buy', 'Acheter maintenant')}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-100 dark:border-white/10">
              <div className="text-center">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <span className="text-xs font-bold text-gray-500 uppercase dark:text-gray-400">{t('product.warranty')} {product.warranty}</span>
              </div>
              <div className="text-center">
                <TruckIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <span className="text-xs font-bold text-gray-500 uppercase dark:text-gray-400">{t('product.shipping', 'Livraison Express')}</span>
              </div>
              <div className="text-center">
                <ClockIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <span className="text-xs font-bold text-gray-500 uppercase dark:text-gray-400">{t('product.sav', 'SAV 24/7')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};