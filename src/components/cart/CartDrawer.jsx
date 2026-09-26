import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../context/useCart';

export const CartDrawer = () => {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, total } = useCart();
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-lg bg-white shadow-[0_0_100px_rgba(0,0,0,0.2)] z-[101] flex flex-col dark:bg-[#0a0a0a]"
          >
            {/* Header */}
            <div className="p-8 border-b border-gray-100 flex items-center justify-between dark:border-white/10">
              <div>
                <h2 className="text-3xl font-black text-gray-900 leading-none dark:text-white">{t('cart.title')}</h2>
                <p className="text-sm font-bold text-blue-600 mt-2 uppercase tracking-widest">{cart.length} Article{cart.length > 1 ? 's' : ''}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors dark:bg-white/5"
              >
                <XMarkIcon className="h-6 w-6 text-gray-900 dark:text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 dark:bg-white/5">
                    <ShoppingBagIcon className="h-10 w-10 text-gray-300" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 dark:text-white">{t('cart.empty')}</h3>
                  <p className="text-gray-500 mb-8 dark:text-gray-400">Commencez vos achats pour voir vos articles ici.</p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all"
                  >
                    Découvrir les produits
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex space-x-6 group"
                  >
                    <div className="w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex-shrink-0 dark:bg-white/5 dark:border-white/10">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-black text-gray-900 group-hover:text-blue-600 transition-colors dark:text-white">{item.name}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{item.brand}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-gray-50 p-1 rounded-xl border border-gray-100 dark:bg-white/5 dark:border-white/10">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center font-bold hover:bg-white rounded-lg transition-colors">-</button>
                          <span className="w-10 text-center font-black text-gray-900 dark:text-white">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center font-bold hover:bg-white rounded-lg transition-colors">+</button>
                        </div>
                        <span className="text-xl font-black text-gray-900 dark:text-white">{(parseInt(item.price.replace(/\s/g, '')) * item.quantity).toLocaleString()} F</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-gray-50 border-t border-gray-100 dark:bg-white/5 dark:border-white/10">
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-bold dark:text-gray-400">Sous-total</span>
                    <span className="text-xl font-black text-gray-900 dark:text-white">{total.toLocaleString()} FCFA</span>
                  </div>
                  <div className="flex justify-between items-center text-green-600">
                    <span className="text-sm font-bold uppercase tracking-widest">Livraison</span>
                    <span className="text-sm font-black uppercase tracking-widest">Offerte</span>
                  </div>
                  
                  {/* Payment Highlight */}
                  <div className="p-4 bg-red-600 rounded-2xl text-white shadow-xl shadow-red-600/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-lg">💳</span>
                      <span className="text-xs font-black uppercase tracking-widest">Airtel Money Tchad</span>
                    </div>
                    <p className="text-xl font-black tracking-wider">+235 66 75 00 15</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  state={{ 
                    orderSummary: cart.map(item => `${item.quantity}x ${item.name} (${item.brand})`).join('\n'),
                    total: total
                  }}
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-6 bg-blue-600 text-white text-center rounded-[2rem] font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/30"
                >
                  {t('cart.checkout')}
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="block w-full mt-4 text-center text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors"
                >
                  Continuer mes achats
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};