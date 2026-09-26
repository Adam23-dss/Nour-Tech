import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  ServerStackIcon,
  ChartBarIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  RocketLaunchIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline';

// Services tech proposés par Nour Tech
export const techServices = [
  {
    slug: 'web',
    title: 'Développement Web',
    description: "Sites vitrines, e-commerce et plateformes sur mesure, rapides et optimisés pour le référencement.",
    features: ['Sites vitrines', 'Boutiques en ligne', 'Applications web', 'Hébergement & nom de domaine'],
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    slug: 'mobile',
    title: 'Applications Mobiles',
    description: "Applications Android et iOS pour vos clients, vos équipes terrain ou votre activité.",
    features: ['Android & iOS', 'Paiement Airtel Money / Moov', 'Mode hors ligne', 'Publication sur les stores'],
    icon: DevicePhoneMobileIcon,
    color: 'from-purple-500 to-pink-600',
  },
  {
    slug: 'erp',
    title: 'ERP & Logiciels de gestion',
    description: "Gestion de stock, facturation, RH et comptabilité réunies dans un seul outil adapté à votre entreprise.",
    features: ['Stock & ventes', 'Facturation', 'Ressources humaines', 'Tableaux de bord'],
    icon: ChartBarIcon,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    slug: 'reseaux',
    title: 'Réseaux & Infrastructure',
    description: "Installation et sécurisation de réseaux, Wi-Fi, vidéosurveillance et serveurs pour bureaux et commerces.",
    features: ['Câblage & Wi-Fi', 'Vidéosurveillance', 'Serveurs & sauvegardes', 'Sécurité informatique'],
    icon: ServerStackIcon,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    slug: 'marketing',
    title: 'Marketing Digital & Identité visuelle',
    description: "Logo, charte graphique, gestion des réseaux sociaux et campagnes publicitaires pour développer votre marque.",
    features: ['Logo & charte graphique', 'Community management', 'Publicité Facebook / Instagram', 'Infographie'],
    icon: MegaphoneIcon,
    color: 'from-orange-500 to-red-600',
  },
  {
    slug: 'reparation',
    title: 'Réparation & Maintenance',
    description: "Diagnostic gratuit, réparation express de téléphones et ordinateurs, contrats de maintenance entreprise.",
    features: ['Diagnostic gratuit', 'Écrans & batteries', 'Maintenance entreprise', 'Travail garanti'],
    icon: WrenchScrewdriverIcon,
    color: 'from-amber-500 to-orange-600',
    link: '/boutique#reparation',
  },
  {
    slug: 'import',
    title: 'Import sur commande',
    description: "Vous cherchez un modèle précis ? Nous l'importons pour vous depuis Dubaï, la Chine ou l'Europe.",
    features: ['Dubaï, Chine, Europe', 'Devis transport + douane', 'Livraison 7 à 12 jours', 'Produits authentiques'],
    icon: GlobeAltIcon,
    color: 'from-rose-500 to-pink-600',
  },
  {
    slug: 'design',
    title: 'UI/UX Design',
    description: "Maquettes et prototypes d'interfaces claires et modernes, pensées pour vos utilisateurs.",
    features: ['Maquettes Figma', 'Prototypes interactifs', 'Tests utilisateurs', 'Design system'],
    icon: PaintBrushIcon,
    color: 'from-fuchsia-500 to-purple-600',
  },
];

export const processSteps = [
  { title: 'Analyse du besoin', description: "Nous écoutons vos objectifs et étudions votre activité pour définir la bonne solution.", icon: MagnifyingGlassIcon },
  { title: 'Personnalisation', description: "Nous concevons une solution sur mesure : maquettes, devis détaillé et planning.", icon: AdjustmentsHorizontalIcon },
  { title: 'Développement & mise en place', description: "Nos équipes réalisent, testent et déploient la solution avec vous.", icon: RocketLaunchIcon },
  { title: 'Contrôle qualité & support', description: "Formation, suivi et assistance continue après la livraison.", icon: LifebuoyIcon },
];

// Exemples de réalisations : à remplacer par vos vrais projets clients
export const projects = [
  {
    slug: 'nour-tech-shop',
    title: 'Nour Tech Boutique',
    category: 'E-commerce',
    description: "Boutique en ligne avec panier, comparateur de produits et espace d'administration.",
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    tags: ['React', 'Node.js', 'SQLite'],
  },
  {
    slug: 'ecole-gestion',
    title: 'Gestion scolaire',
    category: 'ERP',
    description: "Logiciel de gestion des élèves, notes, paiements de scolarité et bulletins.",
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    tags: ['ERP', 'Web', 'Rapports PDF'],
  },
  {
    slug: 'livraison-app',
    title: 'Application de livraison',
    category: 'Mobile',
    description: "Application mobile de commande et de suivi de livraison à N'Djaména.",
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800',
    tags: ['Android', 'iOS', 'Géolocalisation'],
  },
  {
    slug: 'reseau-bureau',
    title: 'Réseau d\'entreprise',
    category: 'Réseaux',
    description: "Câblage, Wi-Fi et vidéosurveillance pour des bureaux sur deux étages.",
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    tags: ['Wi-Fi', 'Caméras IP', 'Sécurité'],
  },
  {
    slug: 'identite-restaurant',
    title: 'Identité visuelle restaurant',
    category: 'Marketing',
    description: "Logo, menus, charte graphique et gestion des réseaux sociaux.",
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    tags: ['Branding', 'Instagram', 'Print'],
  },
  {
    slug: 'site-ong',
    title: 'Site web ONG',
    category: 'Web',
    description: "Site vitrine multilingue (FR / AR / EN) avec actualités et formulaire de don.",
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
    tags: ['Multilingue', 'SEO', 'CMS'],
  },
];

// Articles d'exemple : à remplacer par vos vrais articles
export const blogPosts = [
  {
    slug: 'digitaliser-son-commerce-au-tchad',
    title: 'Comment digitaliser son commerce au Tchad en 2026',
    excerpt: "Site web, paiement mobile, réseaux sociaux : les étapes clés pour vendre en ligne.",
    category: 'Transformation digitale',
    date: '2026-09-15',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    content: [
      "Le commerce en ligne progresse rapidement au Tchad grâce au mobile money et aux réseaux sociaux. Pourtant, beaucoup de commerces n'ont pas encore de présence en ligne structurée.",
      "Première étape : être visible. Une page Facebook et un compte WhatsApp Business bien tenus suffisent pour commencer. Ajoutez des photos claires, vos prix et vos horaires.",
      "Deuxième étape : un site web. Il rassure vos clients, présente votre catalogue 24h/24 et vous rend trouvable sur Google.",
      "Troisième étape : le paiement. Intégrer Airtel Money ou Moov Money permet d'encaisser à distance et de livrer plus vite.",
      "Nour Tech vous accompagne sur chacune de ces étapes. Contactez-nous pour un diagnostic gratuit.",
    ],
  },
  {
    slug: 'bien-choisir-son-smartphone',
    title: 'Bien choisir son smartphone : notre guide',
    excerpt: "Batterie, stockage, appareil photo : les critères qui comptent vraiment.",
    category: 'Conseils',
    date: '2026-09-02',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
    content: [
      "Face au nombre de modèles disponibles, il n'est pas facile de choisir. Commencez par définir votre budget et votre usage principal.",
      "La batterie est souvent le critère le plus important : visez au moins 4 500 mAh pour tenir une journée complète.",
      "Pour le stockage, 128 Go est aujourd'hui un minimum confortable, surtout si vous prenez beaucoup de photos et vidéos.",
      "Enfin, vérifiez toujours l'authenticité et la garantie. Tous les produits de notre boutique sont garantis.",
    ],
  },
  {
    slug: 'securiser-reseau-entreprise',
    title: '5 gestes pour sécuriser le réseau de votre entreprise',
    excerpt: "Mots de passe, sauvegardes, mises à jour : les bases pour éviter les mauvaises surprises.",
    category: 'Sécurité',
    date: '2026-08-20',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    content: [
      "1. Changez les mots de passe par défaut de vos routeurs et caméras.",
      "2. Séparez le Wi-Fi invités du réseau de l'entreprise.",
      "3. Faites des sauvegardes régulières, dont une copie hors du bureau.",
      "4. Mettez à jour vos ordinateurs et équipements réseau.",
      "5. Formez votre équipe à reconnaître les messages frauduleux.",
      "Besoin d'un audit ? Notre équipe réseaux peut intervenir dans vos locaux.",
    ],
  },
];

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
