import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ScaleIcon } from '@heroicons/react/24/outline';
import { useCompare } from '../../context/CompareContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const CompareDrawer = () => {
  const { compareList, removeFromCompare } = useCompare();
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] w-full max-w-4xl px-6">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white dark:bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[2.5rem] border border-gray-100 dark:border-white/5 p-4 md:p-6"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center space-x-3 px-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <ScaleIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-black dark:text-white">{t('compare.titleAccent')}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{compareList.length}/3 {t('compare.titleAccent')}</p>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center gap-4">
            <AnimatePresence mode='popLayout'>
              {compareList.map((p) => (
                <motion.div 
                  key={p.id}
                  layout
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 dark:bg-white/5 rounded-2xl p-2 border border-gray-100 dark:border-white/5">
                    <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                  </div>
                  <button 
                    onClick={() => removeFromCompare(p.id)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                  >
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {compareList.length < 3 && (
              <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-dashed border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-gray-300">
                <span className="text-2xl">+</span>
              </div>
            )}
          </div>

          <div className="px-4">
            <button 
              onClick={() => navigate('/compare')}
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
            >
              {t('compare.start')}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};