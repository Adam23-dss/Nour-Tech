// src/components/sections/Temoignages.jsx
export const Temoignages = () => {
  const temoignages = [
    {
      nom: "Ahmed Mahamat",
      avis: "J'ai commandé un iPhone 15 Pro via leur service import. Livré en 8 jours, prix compétitif, service impeccable !",
      note: 5,
      produit: "iPhone 15 Pro",
      date: "Février 2026"
    },
    {
      nom: "Fatima Hassan",
      avis: "Réparation écran de mon Samsung en 2 heures seulement. Travail professionnel et garanti. Je recommande !",
      note: 5,
      produit: "Réparation téléphone",
      date: "Janvier 2026"
    },
    {
      nom: "Idriss Djibrine",
      avis: "Achat d'un MacBook Pro. Meilleur prix à N'Djaména, conseil personnalisé et service après-vente au top.",
      note: 5,
      produit: "MacBook Pro",
      date: "Décembre 2025"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Ce que disent nos clients
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Ils nous ont fait confiance
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {temoignages.map((t, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex text-yellow-400 mb-4">
                {"★".repeat(t.note)}
                {"☆".repeat(5 - t.note)}
              </div>
              <p className="text-gray-700 mb-6 italic">"{t.avis}"</p>
              <div>
                <p className="font-bold">{t.nom}</p>
                <p className="text-sm text-gray-500">{t.produit} • {t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};