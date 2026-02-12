// src/pages/About.jsx - DESIGN PREMIUM COMPLET
import { Link } from 'react-router-dom';
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  ShieldCheckIcon, 
  RocketLaunchIcon,
  GlobeAltIcon,
  HeartIcon,
  TrophyIcon,
  BriefcaseIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export const About = () => {
  const stats = [
    { value: "2024", label: "Année de création", icon: BuildingOfficeIcon },
    { value: "500+", label: "Clients satisfaits", icon: UserGroupIcon },
    { value: "1000+", label: "Produits vendus", icon: BriefcaseIcon },
    { value: "24/7", label: "Support technique", icon: ShieldCheckIcon }
  ];

  const values = [
    {
      title: "Authenticité",
      description: "100% de nos produits sont authentiques et vérifiés. Pas de contrefaçon.",
      icon: ShieldCheckIcon,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Proximité",
      description: "Une équipe locale à N'Djaména, à votre écoute et réactive.",
      icon: HeartIcon,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Innovation",
      description: "Les dernières technologies importées directement des marchés internationaux.",
      icon: RocketLaunchIcon,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Excellence",
      description: "Service après-vente et réparation par des techniciens qualifiés.",
      icon: TrophyIcon,
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const team = [
    {
      name: "Mahamat Nour",
      role: "Fondateur & CEO",
      bio: "Expert en technologies avec 10 ans d'expérience dans l'import et la distribution au Tchad.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      social: "linkedin"
    },
    {
      name: "Fatima Hassan",
      role: "Directrice Commerciale",
      bio: "Spécialiste des relations clients et du développement des partenariats internationaux.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400",
      social: "linkedin"
    },
    {
      name: "Ahmed Idriss",
      role: "Chef Technicien",
      bio: "Expert en réparation électronique, formé aux dernières technologies Apple et Samsung.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      social: "linkedin"
    },
    {
      name: "Aisha Djibrine",
      role: "Responsable Import",
      bio: "Gère les achats et la logistique depuis Dubaï, Chine et Europe.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      social: "linkedin"
    }
  ];

  return (
    <div className="bg-white">
      {/* ========================================= */}
      {/* HERO SECTION - HISTOIRE */}
      {/* ========================================= */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920" 
            alt="Team Nour Tech"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 mb-8">
              <span className="text-white/90 text-sm tracking-wider">🇹🇩 NOTRE HISTOIRE</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              La technologie à la portée de tous
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Depuis 2024, Nour Tech rend le high-tech accessible au Tchad 
              avec des produits authentiques et un service après-vente de qualité.
            </p>
          </div>
        </div>
        
        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ========================================= */}
      {/* STATISTIQUES */}
      {/* ========================================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform group-hover:shadow-xl">
                    <Icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* NOTRE HISTOIRE - TIMELINE */}
      {/* ========================================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Notre histoire
              </h2>
              <p className="text-xl text-gray-600">
                De l'idée à la réalisation, découvrez le parcours de Nour Tech
              </p>
            </div>

            <div className="space-y-12">
              {/* 2024 - Création */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-2xl inline-block font-bold text-xl">
                    2024
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    La naissance de Nour Tech
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Fondée à N'Djaména par Saleh Mahamat Nour, notre entreprise naît d'un constat simple : 
                    l'accès à la technologie de qualité est trop limité au Tchad. Notre mission : 
                    importer et vendre des produits authentiques aux meilleurs prix.
                  </p>
                </div>
              </div>

              {/* 2025 - Expansion */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-2xl inline-block font-bold text-xl">
                    2025
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Lancement du service d'import
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Face à la demande croissante, nous développons notre service d'import depuis Dubaï, 
                    la Chine et l'Europe. Délai record de 4 à 7 jours, produits authentiques garantis.
                  </p>
                </div>
              </div>

              {/* 2026 - Aujourd'hui */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-2xl inline-block font-bold text-xl">
                    2026
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Centre de réparation agréé
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Nous devenons centre de réparation agréé pour les principales marques. 
                    Notre équipe de techniciens qualifiés assure un service après-vente professionnel 
                    avec des délais d'intervention records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* NOS VALEURS */}
      {/* ========================================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Ce qui nous guide au quotidien pour mieux vous servir
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* NOTRE ÉQUIPE */}
      {/* ========================================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center bg-blue-100 px-6 py-2 rounded-full mb-6">
              <UserGroupIcon className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold">L'ÉQUIPE</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Les talents derrière Nour Tech
            </h2>
            <p className="text-xl text-gray-600">
              Une équipe passionnée et complémentaire à votre service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* NOS PARTENAIRES */}
      {/* ========================================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos partenaires
            </h2>
            <p className="text-xl text-gray-600">
              Des marques de confiance pour des produits authentiques
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-5xl mx-auto">
            {["Apple", "Samsung", "Dell", "HP", "Xiaomi", "Lenovo", "Microsoft", "Intel"].map((brand, index) => (
              <div key={index} className="group">
                <div className="px-6 py-3 bg-gray-100 rounded-2xl group-hover:bg-blue-600 transition-colors">
                  <span className="text-gray-700 group-hover:text-white font-semibold transition-colors">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* NOTRE ENGAGEMENT */}
      {/* ========================================= */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30 mb-8">
              <GlobeAltIcon className="h-5 w-5 mr-2" />
              <span className="text-sm tracking-wider">NOTRE MISSION</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Ensemble, construisons le Tchad numérique
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Chez Nour Tech, nous croyons que la technologie est un levier de développement. 
              Notre mission est de la rendre accessible à tous, avec des produits de qualité 
              et un service digne de confiance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <span>Rejoignez notre communauté</span>
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* CTA LOCALISATION */}
      {/* ========================================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Venez nous rencontrer
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Notre boutique est située au cœur de N'Djaména. 
                Équipe à l'écoute, produits en démonstration, atelier de réparation sur place.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Adresse</p>
                    <p className="font-semibold text-gray-900">Avenue Charles de Gaulle, N'Djaména</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <a href="tel:+23566750015" className="font-semibold text-gray-900 hover:text-blue-600">
                      +235 66 75 00 15
                    </a>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
              >
                <span>Nous contacter</span>
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
            <div className="h-96 bg-gray-300 rounded-3xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.760416426017!2d15.044632!3d12.134845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA4JzA1LjQiTiAxNcKwMDInNDAuNyJF!5e0!3m2!1sfr!2std!4v1700000000000!5m2!1sfr!2std"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Nour Tech"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};