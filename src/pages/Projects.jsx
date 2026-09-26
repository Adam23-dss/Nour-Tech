import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { PageHero } from '../components/ui/PageHero';
import { projects } from '../data/site';

export const ProjectCard = ({ project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    whileHover={{ y: -10 }}
    className="group bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-2xl transition-all"
  >
    <div className="relative h-60 overflow-hidden">
      <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <span className="absolute top-5 left-5 bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">{project.category}</span>
    </div>
    <div className="p-8">
      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[10px] font-bold bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-white/5">{tag}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

export const Projects = () => {
  const categories = ['Tous', ...new Set(projects.map((p) => p.category))];
  const [active, setActive] = useState('Tous');
  const visible = active === 'Tous' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="bg-white dark:bg-brand-black">
      <PageHero
        title="Nos"
        accent="Réalisations"
        subtitle="Quelques projets que nous avons menés pour nos clients."
        crumbs={[{ label: 'Projets' }]}
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${active === c ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </AnimatePresence>
          </motion.div>

          <div className="text-center mt-20">
            <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-gray-900 dark:bg-blue-600 text-white rounded-2xl font-black text-lg hover:scale-105 transition-all">
              Lancer votre projet <ArrowRightIcon className="h-6 w-6 ml-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
