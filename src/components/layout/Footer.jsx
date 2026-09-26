import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/5 pt-32 pb-16 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* BRAND */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gray-900 dark:bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-xl font-black">NT</span>
              </div>
              <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">Nour Tech</span>
            </Link>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
              {i18n.language === 'ar' ? 'التميز التكنولوجي في تشاد. مبيعات واستيراد وصيانة متميزة.' : "L'excellence technologique au Tchad. Vente, import et maintenance premium."}
            </p>
            <div className="flex space-x-4">
              {['FB', 'IG', 'WA'].map((s) => (
                <a key={s} href="#" className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center font-black text-xs text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: t('nav.home'), path: '/' },
                { name: t('nav.about'), path: '/about' },
                { name: t('nav.services'), path: '/services' },
                { name: t('nav.projects'), path: '/projets' },
                { name: t('nav.shop'), path: '/boutique' },
                { name: t('nav.blog'), path: '/blog' },
                { name: t('nav.contact'), path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-lg font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Contact</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPinIcon className="h-6 w-6 text-gray-400 mt-1" />
                <p className="text-lg font-bold text-gray-900 dark:text-white">Av. Charles de Gaulle, N'Djaména, Tchad</p>
              </div>
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6 text-gray-400" />
                <a href="tel:+23566750015" className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors" dir="ltr">+235 66 75 00 15</a>
              </div>
              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-6 w-6 text-gray-400" />
                <a href="mailto:nourtech@gmail.com" className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">nourtech@gmail.com</a>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Newsletter</h4>
            <p className="text-gray-500 dark:text-gray-400 font-medium">{i18n.language === 'ar' ? 'انضم إلينا لتلقي أحدث المنتجات.' : 'Rejoignez-nous pour recevoir les derniers arrivages.'}</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="w-full bg-gray-50 dark:bg-white/5 border border-transparent rounded-2xl px-6 py-4 focus:bg-white dark:focus:bg-white/10 focus:border-blue-600 outline-none transition-all font-bold dark:text-white"
              />
              <button className="absolute right-2 top-2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                <ArrowRightIcon className="h-6 w-6" />
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-16 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-400 font-bold text-sm">
            © {currentYear} Nour Tech. {i18n.language === 'ar' ? 'جميع الحقوق محفوظة.' : 'Tous droits réservés.'}
            <div className="flex space-x-4 mt-2">
              <Link to="/mentions-legales" className="hover:text-blue-600 transition-colors">Mentions Légales</Link>
              <Link to="/cgv" className="hover:text-blue-600 transition-colors">CGV</Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-800">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-black text-red-700 dark:text-red-400 uppercase tracking-widest" dir="ltr">Airtel Money: +235 66 75 00 15</span>
            </div>
            <div className="flex items-center space-x-4">
              {['Moov', 'Konoom'].map(p => (
                <span key={p} className="text-[10px] font-black text-gray-300 dark:text-gray-600 uppercase tracking-[0.2em]">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};