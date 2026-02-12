// src/components/sections/ProduitsPopulaires.jsx
export const ProduitsPopulaires = () => {
  const produits = [
    {
      id: 1,
      nom: "iPhone 15 Pro",
      prix: "750 000",
      image: "/images/produits/iphone-15-pro.jpg",
      categorie: "Téléphone",
      badge: "Nouveau"
    },
    {
      id: 2,
      nom: "Samsung S24 Ultra",
      prix: "650 000",
      image: "/images/produits/samsung-s24.jpg",
      categorie: "Téléphone",
      badge: "Populaire"
    },
    {
      id: 3,
      nom: "MacBook Pro M3",
      prix: "950 000",
      image: "/images/produits/macbook-pro.jpg",
      categorie: "Ordinateur",
      badge: "Premium"
    },
    {
      id: 4,
      nom: "Dell XPS 15",
      prix: "550 000",
      image: "/images/produits/dell-xps.jpg",
      categorie: "Ordinateur",
      badge: "Recommandé"
    },
    {
      id: 5,
      nom: "Xiaomi 14",
      prix: "400 000",
      image: "/images/produits/xiaomi-14.jpg",
      categorie: "Téléphone",
      badge: "Nouveau"
    },
    {
      id: 6,
      nom: "HP Pavilion",
      prix: "350 000",
      image: "/images/produits/hp-pavilion.jpg",
      categorie: "Ordinateur",
      badge: "-10%"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Produits populaires
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Les meilleures ventes du moment
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {produits.map((produit) => (
            <div key={produit.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition group">
              <div className="relative">
                <img 
                  src={produit.image} 
                  alt={produit.nom}
                  className="w-full h-48 object-cover rounded-t-xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/600x400/2563eb/white?text=${produit.nom.replace(' ', '+')}`;
                  }}
                />
                {produit.badge && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {produit.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">{produit.categorie}</div>
                <h3 className="font-bold text-lg mb-2">{produit.nom}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xl font-bold text-blue-600">{produit.prix} F</span>
                    <span className="text-xs text-gray-500 ml-1">CFA</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Devis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/services" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Voir tous les produits →
          </a>
        </div>
      </div>
    </section>
  );
};