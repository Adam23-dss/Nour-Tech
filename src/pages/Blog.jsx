import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, ArrowLeftIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { PageHero } from '../components/ui/PageHero';
import { MediaSlot } from '../components/ui/MediaSlot';
import { formatDate } from '../data/site';
import { useContent, mediaUrl } from '../utils/api';

export const BlogCard = ({ post }) => (
  <motion.article
    whileHover={{ y: -10 }}
    className="group bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-2xl transition-all flex flex-col"
  >
    <Link to={`/blog/${post.slug}`} className="block h-56 overflow-hidden">
      <MediaSlot src={mediaUrl(post.image)} alt={post.title} imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    </Link>
    <div className="p-8 flex flex-col flex-1">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold mb-4">
        <span className="text-blue-600 uppercase tracking-widest">{post.category}</span>
        <span className="text-gray-400 flex items-center whitespace-nowrap"><CalendarIcon className="h-4 w-4 mr-1" />{formatDate(post.date)}</span>
      </div>
      <Link to={`/blog/${post.slug}`}>
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
      </Link>
      <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">{post.excerpt}</p>
      <Link to={`/blog/${post.slug}`} className="flex items-center text-blue-600 font-bold">
        Lire l'article <ArrowRightIcon className="h-5 w-5 ml-2" />
      </Link>
    </div>
  </motion.article>
);

export const Blog = () => {
  const { items: blogPosts } = useContent('posts');
  return (
    <div className="bg-white dark:bg-brand-black">
      <PageHero
        title="Blog &"
        accent="Actualités"
        subtitle="Conseils, nouveautés et actualités tech au Tchad."
        crumbs={[{ label: 'Blog' }]}
      />
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => <BlogCard key={post.id} post={post} />)}
        </div>
      </section>
    </div>
  );
};

export const BlogPost = () => {
  const { slug } = useParams();
  const { items: blogPosts, loading } = useContent('posts');
  const post = blogPosts.find((p) => p.slug === slug);

  if (loading) return <div className="pt-40 pb-32" />;

  if (!post) {
    return (
      <div className="pt-40 pb-32 text-center">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-6">Article introuvable</h1>
        <Link to="/blog" className="text-blue-600 font-bold hover:underline">Retour au blog</Link>
      </div>
    );
  }

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-white dark:bg-brand-black">
      <PageHero title={post.title} crumbs={[{ label: 'Blog', to: '/blog' }, { label: post.category }]} />
      <article className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          {post.image && <img src={mediaUrl(post.image)} alt={post.title} className="w-full h-80 object-cover rounded-2xl mb-10 shadow-xl" />}
          <div className="flex items-center gap-3 text-sm font-bold mb-8">
            <span className="text-blue-600 uppercase tracking-widest">{post.category}</span>
            <span className="text-gray-400">{formatDate(post.date)}</span>
          </div>
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {post.content.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <Link to="/blog" className="inline-flex items-center mt-12 text-blue-600 font-bold hover:underline">
            <ArrowLeftIcon className="h-5 w-5 mr-2" /> Tous les articles
          </Link>
        </div>
      </article>
      {others.length > 0 && (
        <section className="pb-32">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-10">À lire aussi</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {others.map((p) => <BlogCard key={p.id} post={p} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
