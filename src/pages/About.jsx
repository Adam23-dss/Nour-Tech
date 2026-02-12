// src/pages/About.jsx - REMPLACER TOUT LE CONTENU
export const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            À propos de Nour Tech
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Notre mission : Accélérer la transformation numérique au Tchad et en Afrique
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Notre Histoire</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Fondée en 2024 à N'Djaména, Nour Tech est née d'une vision : 
                rendre la technologie accessible et adaptée aux réalités locales.
              </p>
              <p className="text-gray-600 mb-4">
                Nous croyons que l'innovation numérique peut résoudre les défis 
                uniques du continent africain.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h3 className="font-semibold text-lg mb-2">Notre impact</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Projets réalisés</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">30+</div>
                    <div className="text-sm text-gray-600">Clients satisfaits</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Image équipe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Équipe</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Mahamat Nour", role: "Fondateur & CEO", bio: "Expert en transformation digitale" },
              { name: "Fatima Hassan", role: "CTO", bio: "Spécialiste développement web" },
              { name: "Ahmed Idriss", role: "Lead Developer", bio: "Full-stack & mobile" }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Nos Valeurs</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: "💡", title: "Innovation", desc: "Solutions créatives adaptées" },
            { icon: "🤝", title: "Intégrité", desc: "Transparence et honnêteté" },
            { icon: "🌍", title: "Local", desc: "Compréhension du contexte" },
            { icon: "⚡", title: "Excellence", desc: "Qualité et performance" }
          ].map((value, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-4xl mb-3">{value.icon}</div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};