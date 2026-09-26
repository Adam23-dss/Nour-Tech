import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  ShieldCheckIcon, 
  RocketLaunchIcon,
  GlobeAltIcon,
  TrophyIcon,
  BriefcaseIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const About = () => {
  const { t } = useTranslation();
  const stats = [
    { value: "2024", label: t('about.stats.launch', 'Lancement'), icon: RocketLaunchIcon },
    { value: "500+", label: t('about.stats.clients', 'Clients'), icon: UserGroupIcon },
    { value: "1500+", label: t('about.stats.sales', 'Ventes'), icon: BriefcaseIcon },
    { value: "24/7", label: t('about.stats.support', 'Support'), icon: ShieldCheckIcon }
  ];

  const team = [
    {
      name: "Saleh Mahamat Nour",
      role: "Fondateur & CEO",
      bio: "Visionnaire et expert en logistique internationale.",
      image: "https://i.pravatar.cc/300?u=saleh"
    },
    {
      name: "Issa Mahamat Haran",
      role: "Directeur Commercial",
      bio: "Expert en relations clients et stratégie de vente.",
      image: "https://i.pravatar.cc/300?u=issa"
    },
    {
      name: "Adoum Mahamat Nour",
      role: "Lead Tech & Support",
      bio: "Spécialiste infrastructure et maintenance.",
      image: "https://i.pravatar.cc/300?u=adoum"
    },
    {
      name: "Issakha Mahamat Nour",
      role: "Marketing Digital",
      bio: "Responsable de la présence en ligne et communauté.",
      image: "https://i.pravatar.cc/300?u=issakha"
    }
  ];

  return (
    <div className="bg-white pt-20 dark:bg-brand-black">
      {/* HERO */}
      <section className="relative py-32 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920" className="w-full h-full object-cover" alt="Team" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl lg:text-8xl font-black mb-8"
          >
            {t('about.title')} <br />
            <span className="text-blue-500">{t('about.titleAccent')}</span>
          </motion.h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-2xl shadow-2xl shadow-blue-600/5 border border-gray-100 text-center dark:bg-[#1a1a1a] dark:border-white/10"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <s.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2 dark:text-white">{s.value}</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000" className="w-full h-full object-cover" alt="Mission" />
              </div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-12 rounded-2xl shadow-2xl max-w-xs hidden lg:block"
              >
                <TrophyIcon className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-black mb-4 text-white">Engagement Local</h3>
                <p className="text-blue-100 font-medium">Nous formons des techniciens locaux pour garantir un SAV durable.</p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-white bg-blue-600 inline-block px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.3em] mb-6">Notre Mission</span>
              <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight dark:text-white">Démocratiser la haute technologie.</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed dark:text-gray-400">
                Le Tchad mérite les meilleurs outils. Nous éliminons les barrières de l'importation pour vous offrir les derniers modèles iPhone, Samsung et MacBook avec une garantie réelle et un support local.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  "100% Produits Authentiques",
                  "Importation directe sans intermédiaires",
                  "Expertise technique certifiée",
                  "Accompagnement personnalisé"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center text-lg font-bold text-gray-900 dark:text-white"
                  >
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">✓</div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <Link to="/boutique" className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-black transition-all inline-flex items-center group">
                Voir nos produits <ArrowRightIcon className="h-6 w-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-32 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 dark:text-white">L'équipe NT</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Des experts passionnés unis par une même mission.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group dark:bg-[#1a1a1a] dark:border-white/10"
              >
                <div className="h-80 overflow-hidden bg-gray-100 dark:bg-white/10">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-2 dark:text-white">{m.name}</h3>
                  <p className="text-blue-600 font-bold mb-4 uppercase text-xs tracking-widest">{m.role}</p>
                  <p className="text-gray-500 font-medium leading-relaxed dark:text-gray-400">{m.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};