import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const isAr = i18n.language === 'ar';

  const contacts = [
    { icon: PhoneIcon, title: 'Appelez-nous', value: '+235 66 75 00 15', href: 'tel:+23566750015', ltr: true },
    { icon: EnvelopeIcon, title: 'Envoyez-nous un e-mail', value: 'nourtech@gmail.com', href: 'mailto:nourtech@gmail.com' },
    { icon: WrenchScrewdriverIcon, title: 'Support technique', value: 'WhatsApp +235 66 75 00 15', href: 'https://wa.me/23566750015', ltr: true },
    { icon: MapPinIcon, title: 'Visitez-nous', value: "Av. Charles de Gaulle, N'Djaména" },
  ];

  const links = [
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.projects'), path: '/projets' },
    { name: t('nav.shop'), path: '/boutique' },
    { name: t('nav.blog'), path: '/blog' },
  ];

  const pages = [
    { name: t('nav.contact'), path: '/contact' },
    { name: t('nav.shop'), path: '/boutique' },
    { name: 'Mentions légales', path: '/mentions-legales' },
    { name: 'Conditions de vente', path: '/cgv' },
  ];

  const socials = ['FB', 'IG', 'WA', 'IN'];

  return (
    <footer className="bg-white dark:bg-brand-black transition-colors duration-300">
      {/* BANDEAU CONTACT */}
      <div className="border-y border-gray-100 dark:border-white/10 bg-brand-bg dark:bg-[#161616]">
        <div className="container mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {contacts.map((c) => {
            const Icon = c.icon;
            const Value = c.href ? 'a' : 'span';
            return (
              <div key={c.title} className="flex items-start gap-4">
                <div className="orb w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-blue/30">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{c.title}</h4>
                  <Value
                    {...(c.href ? { href: c.href } : {})}
                    dir={c.ltr ? 'ltr' : undefined}
                    className="text-gray-600 dark:text-gray-300 hover:text-brand-sky transition-colors"
                  >
                    {c.value}
                  </Value>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* MARQUE */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-sky to-brand-blue rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-black font-display">NT</span>
              </div>
              <span className="text-2xl font-black font-display uppercase tracking-tight">
                <span className="text-brand-sky">Nour</span><span className="text-gray-900 dark:text-white">Tech</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 max-w-sm leading-relaxed">
              {isAr ? 'التميز التكنولوجي في تشاد. مبيعات واستيراد وصيانة متميزة.' : "L'excellence technologique au Tchad. Vente, import et maintenance premium."}
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full border border-brand-sky/60 flex items-center justify-center font-bold text-[11px] text-gray-900 dark:text-white hover:bg-brand-sky hover:text-white transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* LIENS */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Liens</h4>
            <ul className="space-y-3">
              {links.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-600 dark:text-gray-300 hover:text-brand-sky transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PAGES */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Pages</h4>
            <ul className="space-y-3">
              {pages.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-600 dark:text-gray-300 hover:text-brand-sky transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">S'abonner à la newsletter</h4>
            <p className="text-gray-600 dark:text-gray-300">
              {isAr ? 'انضم إلينا لتلقي أحدث المنتجات.' : 'Recevez nos derniers arrivages et actualités.'}
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Entrez votre adresse e-mail"
                className="w-full bg-brand-bg dark:bg-indigo-900 border border-transparent rounded-lg px-5 py-4 focus:border-brand-sky outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <button type="submit" className="btn-xw w-full">S'abonner</button>
            </form>
          </div>
        </div>

        {/* BAS DE PAGE */}
        <div className="pt-8 border-t border-gray-100 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-gray-500 dark:text-gray-400">
            © {currentYear} Nour Tech. {isAr ? 'جميع الحقوق محفوظة.' : 'Tous droits réservés.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-brand-red/30 bg-brand-red/10">
              <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-brand-red uppercase tracking-widest" dir="ltr">Airtel Money : +235 66 75 00 15</span>
            </div>
            {['Moov', 'Konoom'].map((p) => (
              <span key={p} className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
