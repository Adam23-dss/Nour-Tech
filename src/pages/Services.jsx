// src/pages/Services.jsx - AMÉLIORER
export const Services = () => {
  const services = [
    {
      title: "Développement Web",
      description: "Sites vitrines, applications web, e-commerce",
      icon: "💻",
      features: ["Responsive design", "SEO optimisé", "Performance", "Maintenance"],
      price: "Sur devis"
    },
    {
      title: "Applications Mobiles",
      description: "Apps iOS et Android natives ou cross-platform",
      icon: "📱",
      features: ["UI/UX moderne", "Mode hors-ligne", "Notifications push", "Mises à jour"],
      price: "Sur devis"
    },
    {
      title: "Conseil & Stratégie",
      description: "Accompagnement digital et transformation numérique",
      icon: "🎯",
      features: ["Audit technique", "Feuille de route", "Formation", "Support"],
      price: "Sur mesure"
    },
    {
      title: "Maintenance & Support",
      description: "Support technique et maintenance applicative",
      icon: "🔧",
      features: ["24/7 support", "Mises à jour sécurité", "Sauvegardes", "Optimisation"],
      price: "À partir de 100k FCFA/mois"
    },
    {
      title: "Design UI/UX",
      description: "Interfaces modernes et expériences utilisateur optimisées",
      icon: "🎨",
      features: ["Wireframes", "Maquettes interactives", "Design system", "Tests utilisateurs"],
      price: "Sur devis"
    },
    {
      title: "Formation",
      description: "Ateliers et formations sur mesure",
      icon: "📚",
      features: ["Développement web", "Marketing digital", "Gestion de projet", "Outils collaboratifs"],
      price: "Forfait groupe"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Des solutions technologiques complètes, adaptées à vos besoins et à votre budget
          </p>
        </div>
      </section>

      {/* Grille services */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} 
                 className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-8 
                          border border-gray-100 flex flex-col">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="flex-grow">
                <h4 className="font-semibold text-sm text-gray-500 mb-3">INCLUS</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">À partir de</span>
                  <span className="text-xl font-bold text-blue-600">{service.price}</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg 
                                 hover:bg-blue-700 transition font-semibold">
                  Demander un devis
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Tous nos services sont personnalisables. Contactez-nous pour une solution sur mesure.
          </p>
          <a href="/contact" 
             className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg 
                      font-semibold hover:bg-blue-700 transition text-lg">
            Parlez-nous de votre projet
          </a>
        </div>
      </section>
    </div>
  );
};