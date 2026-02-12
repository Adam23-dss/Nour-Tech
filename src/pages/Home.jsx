// src/pages/Home.jsx
export const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="container-custom py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nour Tech
              <span className="block text-primary-600 mt-2">
                Innover pour le Tchad numérique
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Solutions technologiques sur mesure pour propulser votre entreprise 
              dans l'ère digitale.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/services" className="btn-primary">
                Nos services
              </a>
              <a href="/contact" className="bg-white text-primary-600 px-6 py-3 rounded-lg 
                                         font-semibold border-2 border-primary-600 
                                         hover:bg-primary-50 transition">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs / Avantages */}
      <section className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description: "Solutions modernes adaptées au contexte local",
              icon: "🚀"
            },
            {
              title: "Fiabilité",
              description: "Support technique 24/7 et maintenance proactive",
              icon: "💪"
            },
            {
              title: "Accessibilité",
              description: "Services adaptés aux connexions internet variables",
              icon: "🌍"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};