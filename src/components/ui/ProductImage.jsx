import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_URL } from '../../utils/api';

export const productImageFit = (src, padding = 'p-10') =>
  /.(png|svg)$/i.test(src || '') ? `object-contain ${padding}` : 'object-cover';

const FALLBACK_IMAGE = 'https://placehold.co/800x800/ffffff/111827?text=NOUR+TECH';

export const ProductImage = ({ src, alt, className = "w-full h-full object-contain" }) => {
  const getFullSrc = (s) => {
    if (!s) return FALLBACK_IMAGE;
    if (s.startsWith('http')) return s;
    if (s.startsWith('/media/')) return `${API_URL}${s}`;
    if (s.startsWith('/images/produits')) {
      return `${API_URL}${s.replace('/images/produits', '/uploads')}`;
    }
    return s;
  };

  const [imgSrc, setImgSrc] = useState(getFullSrc(src));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setImgSrc(getFullSrc(src));
    setLoading(true);
    setError(false);
  }, [src]);

  const handleError = () => {
    if (!error) {
      setImgSrc(FALLBACK_IMAGE);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10"
          >
            <div className="w-8 h-8 border-2 border-blue-600/10 border-t-blue-600 rounded-full animate-spin"></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.img 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: loading ? 0 : 1, scale: loading ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        src={imgSrc} 
        alt={alt} 
        className={`${className} mix-blend-multiply`}
        onError={handleError}
        onLoad={() => setLoading(false)}
        loading="lazy"
      />

      {/* Glossy Overlay for Elegance */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
    </div>
  );
};