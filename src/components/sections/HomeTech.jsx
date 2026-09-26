import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { techServices, processSteps, projects, blogPosts } from '../../data/site';
import { ProjectCard } from '../../pages/Projects';
import { BlogCard } from '../../pages/Blog';

const SectionHeader = ({ eyebrow, title, subtitle, link, linkLabel }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-16"
  >
    <div className="max-w-2xl">
      <span className="eyebrow mb-4 block">{eyebrow}</span>
      <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6"><span className="title-mark">{title}</span></h2>
      {subtitle && <p className="text-xl text-gray-600 dark:text-gray-400">{subtitle}</p>}
    </div>
    {link && (
      <Link to={link} className="btn-xw self-start md:self-auto whitespace-nowrap">
        {linkLabel}
      </Link>
    )}
  </motion.div>
);

export const TechServicesSection = () => (
  <section className="py-32">
    <div className="container mx-auto px-6">
      <SectionHeader
        eyebrow="Nos services"
        title="Des solutions tech pour votre activité"
        subtitle="Développement web et mobile, ERP, réseaux, marketing digital : nous accompagnons particuliers et entreprises au Tchad."
        link="/services"
        linkLabel="Tous nos services"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techServices.slice(0, 4).map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-indigo-900 p-8 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-brand-sky/20 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{s.description}</p>
              <Link to={`/services#${s.slug}`} className="flex items-center text-brand-red font-bold">
                En savoir plus <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export const ProcessSection = () => (
  <section className="relative py-32 bg-brand-black text-white overflow-hidden">
    <div aria-hidden="true" className="text-outline absolute top-10 left-1/2 -translate-x-1/2 text-[18vw] lg:text-[11rem] font-black uppercase leading-none whitespace-nowrap select-none">Processus</div>
    <div className="container mx-auto px-6 relative">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="eyebrow mb-4 block">Notre méthode</span>
        <h2 className="text-4xl lg:text-5xl font-black"><span className="title-mark">4 étapes</span> pour réussir votre projet</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
            >
              <span className="text-outline absolute top-4 right-6 text-7xl font-black">{idx + 1}</span>
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-black mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export const ProjectsSection = () => (
  <section className="py-32 bg-gray-50 dark:bg-white/5">
    <div className="container mx-auto px-6">
      <SectionHeader eyebrow="Réalisations" title="Nos projets récents" link="/projets" linkLabel="Voir tous les projets" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </div>
  </section>
);

export const BlogSection = () => (
  <section className="py-32">
    <div className="container mx-auto px-6">
      <SectionHeader eyebrow="Blog" title="Nos derniers articles" link="/blog" linkLabel="Tous les articles" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post) => <BlogCard key={post.slug} post={post} />)}
      </div>
    </div>
  </section>
);
