import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import { PageHero } from '../components/ui/PageHero';
import { techServices, processSteps } from '../data/site';

export const Services = () => (
  <div className="bg-white dark:bg-brand-black">
    <PageHero
      title="Nos"
      accent="Services"
      subtitle="Des solutions technologiques complètes pour les particuliers, commerces et entreprises au Tchad."
      crumbs={[{ label: 'Services' }]}
    />

    {/* SERVICES GRID */}
    <section className="py-32">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techServices.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.slug}
              id={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-white/5 flex flex-col group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{s.description}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center text-sm font-bold text-gray-700 dark:text-gray-300">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link to={s.link || '/contact'} className="flex items-center text-blue-600 font-bold">
                {s.link ? 'Voir les tarifs' : 'Demander un devis'} <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* PROCESS */}
    <section className="py-32 bg-gray-50 dark:bg-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Notre méthode</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">Comment nous travaillons</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl border border-gray-100 dark:border-white/5">
                <span className="absolute top-6 right-8 text-6xl font-black text-gray-100 dark:text-white/5">0{idx + 1}</span>
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 relative">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 relative">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 relative">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-2xl p-12 lg:p-20 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Un projet en tête ?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Parlez-nous de votre besoin : nous vous répondons sous 24h avec une proposition adaptée.</p>
          <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-white text-blue-900 rounded-2xl font-black text-lg hover:scale-105 transition-all">
            Contactez-nous <ArrowRightIcon className="h-6 w-6 ml-3" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);
