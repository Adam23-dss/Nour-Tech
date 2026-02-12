// src/pages/Services.jsx
export const Services = () => {
  const services = [
    {
      title: "Développement Web",
      description: "Sites vitrines, applications web, e-commerce",
      icon: "💻",
      features: ["Responsive design", "SEO optimisé", "Performance"]
    },
    {
      title: "Applications Mobiles",
      description: "Apps iOS et Android natives ou cross-platform",
      icon: "📱",
      features: ["UI/UX moderne", "Hors-ligne", "Notifications"]
    },
    {
      title: "Conseil & Stratégie",
      description: "Accompagnement digital et transformation numérique",
      icon: "🎯",
      features: ["Audit technique", "Feuille de route", "Formation"]
    },
    {
      title: "Maintenance & Support",
      description: "Support technique et maintenance applicative",
      icon: "🔧",
      features: ["24/7 support", "Mises à jour", "Sécurité"]
    }
  ];

  return (
    <div className="container-custom py-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nos Services
        </h1>
        <p className="text-xl text-gray-600">
          Des solutions technologiques complètes pour votre entreprise
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} 
               className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6 
                        border border-gray-100 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2 text-sm text-gray-500">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 bg-primary-50 rounded-2xl p-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Prêt à démarrer votre projet ?
        </h2>
        <p className="text-gray-600 mb-6">
          Contactez-nous pour discuter de vos besoins
        </p>
        <a href="/contact" className="btn-primary inline-block">
          Demander un devis
        </a>
      </div>
    </div>
  );
};