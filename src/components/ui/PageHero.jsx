import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export const PageHero = ({ title, accent, subtitle, crumbs = [] }) => (
  <section className="relative pt-40 pb-24 bg-brand-black text-white overflow-hidden">
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[80%] bg-blue-600 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-[-30%] left-[-10%] w-[40%] h-[80%] bg-brand-red rounded-full blur-[150px]"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl lg:text-7xl font-black mb-6"
      >
        <span className="title-mark">{title}</span> {accent && <span className="text-brand-sky">{accent}</span>}
      </motion.h1>
      {subtitle && <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">{subtitle}</p>}
      <nav className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm font-bold">
        <Link to="/" className="text-gray-300 hover:text-white">Accueil</Link>
        {crumbs.map((c) => (
          <span key={c.label} className="flex items-center gap-2">
            <ChevronRightIcon className="h-4 w-4 text-gray-500" />
            {c.to ? <Link to={c.to} className="text-gray-300 hover:text-white">{c.label}</Link> : <span className="text-brand-red">{c.label}</span>}
          </span>
        ))}
      </nav>
    </div>
  </section>
);
