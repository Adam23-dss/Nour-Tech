import { ContentManager } from './ContentManager';

export const AdminProjects = () => (
  <ContentManager
    title="Projets"
    route="projects"
    singular="un projet"
    describe={(p) => ({ title: p.title, subtitle: p.description, badge: p.category, label: p.short })}
    fields={[
      { name: 'title', label: 'Titre', required: true },
      { name: 'short', label: 'Nom court', help: "Affiché à la place de l'image tant qu'il n'y en a pas (ex. AgriMarket)." },
      { name: 'category', label: 'Catégorie', suggestions: ['Web', 'Mobile', 'Web & Mobile', 'Data & IA', 'E-commerce', 'ERP', 'Réseaux', 'Marketing'] },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'tags', label: 'Technologies', type: 'tags', placeholder: 'Flutter, Node.js, PostgreSQL', help: 'Séparées par des virgules.' },
      { name: 'link', label: 'Lien (GitHub ou site)', type: 'url', placeholder: 'https://...' },
      { name: 'position', label: "Ordre d'affichage", type: 'number', help: 'Les plus petits nombres apparaissent en premier.' },
    ]}
  />
);

export const AdminPosts = () => (
  <ContentManager
    title="Articles de blog"
    route="posts"
    singular="un article"
    describe={(p) => ({ title: p.title, subtitle: p.excerpt, badge: p.category })}
    fields={[
      { name: 'title', label: 'Titre', required: true },
      { name: 'slug', label: "Adresse de l'article", placeholder: 'mon-article', help: 'Laissez vide : elle sera créée à partir du titre.' },
      { name: 'category', label: 'Catégorie', suggestions: ['Conseils', 'Actualités', 'Sécurité', 'Transformation digitale'] },
      { name: 'date', label: 'Date de publication', type: 'date' },
      { name: 'excerpt', label: 'Résumé', type: 'textarea' },
      { name: 'content', label: 'Contenu', type: 'paragraphs', help: 'Un paragraphe par ligne.' },
    ]}
  />
);

export const AdminTeam = () => (
  <ContentManager
    title="Équipe"
    route="team"
    singular="un membre"
    describe={(m) => ({
      title: m.name,
      subtitle: m.role,
      label: m.name.split(' ').map((w) => w[0]).slice(0, 2).join(''),
    })}
    fields={[
      { name: 'name', label: 'Nom complet', required: true },
      { name: 'role', label: 'Poste' },
      { name: 'bio', label: 'Présentation', type: 'textarea' },
      { name: 'position', label: "Ordre d'affichage", type: 'number' },
    ]}
  />
);
