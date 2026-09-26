import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { useFavorites } from '../../context/FavoritesContext';
import { 
  Bars3Icon, 
  XMarkIcon,
  GlobeAltIcon,
  SunIcon,
  MoonIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { CartButton } from '../cart/CartButton';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const { favorites } = useFavorites();
  const location = useLocation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.projects'), href: '/projets' },
    { name: t('nav.shop'), href: '/boutique' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇹🇩' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLangMenuOpen(false);
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled 
          ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl shadow-xl py-3 border-b border-gray-100 dark:border-white/5' 
          : 'bg-transparent py-6'
        }
      `}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30"
            >
              <span className="text-white text-xl font-black">NT</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-gray-900 dark:text-white tracking-tighter leading-none whitespace-nowrap">Nour Tech</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Premium</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden xl:flex items-center bg-gray-100/50 dark:bg-white/5 backdrop-blur-md p-1.5 rounded-2xl border border-gray-200/50 dark:border-white/10">
            {navigation.map((item) => {
              const isActive = item.href === '/' ? location.pathname === '/' : location.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    relative px-3 2xl:px-4 py-2.5 text-sm font-black rounded-xl whitespace-nowrap transition-all duration-300
                    ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}
                  `}
                >
                  {isActive && (
                    <motion.span 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20"
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="hidden sm:block p-3 bg-gray-100/50 dark:bg-white/5 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300"
            >
              {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>

            {/* Language Switcher */}
            <div className="relative hidden sm:block">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="p-3 bg-gray-100/50 dark:bg-white/5 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-colors flex items-center space-x-2 text-gray-700 dark:text-gray-300"
              >
                <GlobeAltIcon className="h-5 w-5" />
                <span className="text-xs font-black uppercase">{i18n.language.substring(0, 2)}</span>
              </button>
              
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-4 w-40 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden py-2"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${i18n.language === lang.code ? 'text-blue-600 font-bold' : 'text-gray-600 dark:text-gray-400'}`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Favorites */}
            <div className="relative">
              <button className="p-3 bg-gray-100/50 dark:bg-white/5 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300">
                <HeartIcon className="h-5 w-5" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </button>
            </div>

            <CartButton />
            
            <Link 
              to="/contact" 
              className="hidden sm:flex xl:hidden 2xl:flex whitespace-nowrap px-6 py-3 bg-gray-900 dark:bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black dark:hover:bg-blue-700 transition-all shadow-xl shadow-black/10 active:scale-95"
            >
              {t('nav.quote')}
            </Link>

            <button
              className="xl:hidden p-2 bg-gray-100 dark:bg-white/5 rounded-xl text-gray-900 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="xl:hidden absolute top-24 left-6 right-6 bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 z-50 overflow-hidden dark:bg-[#1a1a1a] dark:border-white/10"
            >
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      block px-6 py-4 text-lg font-black rounded-2xl transition-all
                      ${item.href === location.pathname 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                        : 'text-gray-900 hover:bg-gray-50'
                      }
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <button
                onClick={toggleTheme}
                className="mt-6 w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-gray-50 font-black text-gray-900 dark:bg-white/5 dark:text-white"
              >
                {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                {isDark ? "Mode clair" : "Mode sombre"}
              </button>

              <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 dark:border-white/10">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${i18n.language === lang.code ? 'border-blue-600 bg-blue-50' : 'border-gray-50 bg-gray-50'}`}
                  >
                    <span className="text-2xl mb-1">{lang.flag}</span>
                    <span className="text-[10px] font-black uppercase">{lang.code}</span>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/10">
                <Link
                  to="/contact"
                  className="block w-full bg-gray-900 text-white px-6 py-4 rounded-2xl font-black text-center shadow-xl shadow-black/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.quote')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};