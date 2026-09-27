import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Package, Smartphone, Laptop, Tablet, Headphones, FolderKanban, Newspaper, Users, ImageOff } from 'lucide-react';
import { API_URL } from '../../utils/api';

export const AdminDashboard = () => {
  const [data, setData] = useState({ products: [], projects: [], posts: [], team: [] });

  useEffect(() => {
    Promise.all(['products', 'projects', 'posts', 'team'].map((r) => axios.get(`${API_URL}/api/${r}`).then((res) => res.data).catch(() => [])))
      .then(([products, projects, posts, team]) => setData({ products, projects, posts, team }));
  }, []);

  const count = (category) => data.products.filter((p) => p.category === category).length;

  const productCards = [
    { label: 'Total produits', value: data.products.length, icon: Package, color: 'bg-brand-blue' },
    { label: 'Téléphones', value: count('phones'), icon: Smartphone, color: 'bg-brand-sky' },
    { label: 'Ordinateurs', value: count('computers'), icon: Laptop, color: 'bg-brand-sky' },
    { label: 'Tablettes', value: count('tablets'), icon: Tablet, color: 'bg-brand-sky' },
    { label: 'Accessoires', value: count('accessories'), icon: Headphones, color: 'bg-brand-sky' },
  ];

  const contentCards = [
    { label: 'Projets', items: data.projects, icon: FolderKanban, path: '/admin/projects' },
    { label: 'Articles', items: data.posts, icon: Newspaper, path: '/admin/posts' },
    { label: 'Équipe', items: data.team, icon: Users, path: '/admin/team' },
  ];

  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-bold">Tableau de bord</h2>

      <section>
        <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-4">Boutique</h3>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {productCards.map((card) => (
            <Link to="/admin/products" key={card.label} className="bg-white p-5 rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition">
              <div className={`${card.color} p-3 rounded-lg text-white`}>
                <card.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{card.label}</p>
                <p className="text-2xl font-bold">{card.value}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-4">Contenu du site</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {contentCards.map((card) => {
            const missing = card.items.filter((i) => !i.image).length;
            return (
              <Link to={card.path} key={card.label} className="bg-white p-5 rounded-xl border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-black p-3 rounded-lg text-white">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{card.label}</p>
                    <p className="text-2xl font-bold">{card.items.length}</p>
                  </div>
                </div>
                {missing > 0 && (
                  <p className="mt-4 text-sm text-amber-700 bg-amber-50 rounded-lg px-3 py-2 flex items-center gap-2">
                    <ImageOff className="h-4 w-4" /> {missing} sans image
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-white p-8 rounded-xl border border-gray-100">
        <h3 className="text-lg font-bold mb-3">Bienvenue dans votre espace d'administration</h3>
        <p className="text-gray-600 leading-relaxed">
          Gérez le catalogue de la boutique, vos projets, vos articles de blog et la présentation de l'équipe.
          Chaque élément peut recevoir une image : elle apparaît directement sur le site.
        </p>
      </section>
    </div>
  );
};
