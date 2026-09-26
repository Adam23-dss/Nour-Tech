import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollTopButton } from '../ui/ScrollTopButton';

export const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg dark:bg-brand-black selection:bg-brand-red selection:text-white">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollTopButton />
    </div>
  );
};