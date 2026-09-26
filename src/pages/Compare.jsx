import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useCompare } from '../context/CompareContext';
import { useCart } from '../context/useCart';
import { ProductImage } from '../components/ui/ProductImage';
import { 
  XMarkIcon, 
  ShoppingCartIcon, 
  CheckBadgeIcon,
  ScaleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export const Compare = () => {
  const { compareList, removeFromCompare } = useCompare();
  const { addToCart } = useCart();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  if (compareList.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 text-center">
        <div className="max-w-md mx-auto bg-gray-50 dark:bg-white/5 p-12 rounded-2xl border border-dashed border-gray-200 dark:border-white/10">
          <ScaleIcon className="h-20 w-20 text-gray-300 mx-auto mb-6" />
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">{t('compare.empty')}</h2>
          <p className="text-gray-500 mb-8 dark:text-gray-400">{t('cart.empty')}</p>
          <button 
            onClick={() => navigate('/boutique')}
            className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all"
          >
            {t('nav.shop')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
              {t('compare.title')} <span className="text-gradient">{t('compare.titleAccent')}</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium dark:text-gray-400">{i18n.language === 'ar' ? 'قم بتحليل الاختلافات لاتخاذ الخيار الأفضل.' : 'Analysez les différences pour faire le meilleur choix.'}</p>
          </div>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 font-bold transition-colors dark:text-gray-400"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>{t('common.back')}</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {compareList.map((p) => (
            <motion.div 
              key={p.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden"
            >
              <button 
                onClick={() => removeFromCompare(p.id)}
                className="absolute top-6 right-6 w-10 h-10 bg-white dark:bg-gray-800 shadow-lg rounded-full flex items-center justify-center text-red-500 z-10 hover:scale-110 transition-transform"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>

              <div className="p-8 pb-0">
                <div className="aspect-square rounded-2xl bg-white dark:bg-brand-black/20 p-8 mb-8">
                  <ProductImage src={p.image} alt={p.name} />
                </div>
                
                <span className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2 block">{p.brand}</span>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 leading-tight">{p.name}</h3>
                <p className="text-3xl font-black text-blue-600 mb-8">{p.price} F</p>
                
                <div className="space-y-4 mb-10">
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-200 dark:border-white/10 pb-2">{t('common.specifications')}</p>
                  {p.features.map((f, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckBadgeIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-300">{f}</span>
                    </div>
                  ))}
                  <div className="pt-4 flex justify-between items-center text-sm font-bold">
                    <span className="text-gray-400">{t('common.warranty')}</span>
                    <span className="text-gray-900 dark:text-white">{p.warranty}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-gray-400">{t('common.stock')}</span>
                    <span className="text-green-600">{p.stock}</span>
                  </div>
                </div>

                <button 
                  onClick={() => addToCart(p)}
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center justify-center space-x-3 mb-8"
                >
                  <ShoppingCartIcon className="h-6 w-6" />
                  <span>{t('common.buy')}</span>
                </button>
              </div>
            </motion.div>
          ))}
          
          {compareList.length < 3 && (
            <button 
              onClick={() => navigate('/boutique')}
              className="flex flex-col items-center justify-center p-12 rounded-2xl border-4 border-dashed border-gray-100 dark:border-white/5 hover:border-blue-600/30 transition-all group"
            >
              <div className="w-20 h-20 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ScaleIcon className="h-10 w-10 text-gray-300" />
              </div>
              <p className="font-black text-gray-400 group-hover:text-blue-600">{t('compare.add')}</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};