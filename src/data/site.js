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

// Projets, articles et équipe : gérés depuis l'admin (/admin), stockés en base.

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
