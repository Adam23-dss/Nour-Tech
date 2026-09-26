const bcrypt = require('bcryptjs');
const { sequelize, User, Product } = require('../models');
const { products2026 } = require('./products-2026');

const initialProducts = [
  {
    name: "iPhone 16 Pro Max",
    category: "phones",
    brand: "Apple",
    price: "1 150 000",
    oldPrice: "1 250 000",
    image: "https://images.unsplash.com/photo-1726590200234-802521c7ba9f?q=80&w=1000&auto=format&fit=crop",
    badge: "Nouveau",
    badgeColor: "bg-black",
    stock: "En stock",
    warranty: "12 mois",
    features: ["A18 Pro Chip", "Écran 6.9\" ProMotion", "Caméra 48MP Fusion", "Titane Grade 5"],
  },
  {
    name: "iPhone 16 Pro",
    category: "phones",
    brand: "Apple",
    price: "980 000",
    oldPrice: "1 050 000",
    image: "https://images.unsplash.com/photo-1726590153396-0efc23789438?q=80&w=1000&auto=format&fit=crop",
    badge: "Populaire",
    badgeColor: "bg-blue-600",
    stock: "En stock",
    warranty: "12 mois",
    features: ["A18 Pro Chip", "Écran 6.3\"", "Caméra Ultra Grand-angle", "Capture Vidéo 4K120"],
  },
  {
    name: "iPhone 15 Pro",
    category: "phones",
    brand: "Apple",
    price: "850 000",
    oldPrice: "950 000",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
    badge: "Promo",
    badgeColor: "bg-red-600",
    stock: "En stock",
    warranty: "12 mois",
    features: ["A17 Pro Chip", "Connecteur USB-C", "Bouton Action", "Design Titane"],
  },
  {
    name: "iPhone 14 Pro Max",
    category: "phones",
    brand: "Apple",
    price: "680 000",
    image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=1000&auto=format&fit=crop",
    badge: "Reconditionné",
    badgeColor: "bg-emerald-600",
    stock: "En stock",
    warranty: "6 mois",
    features: ["Dynamic Island", "Puce A16 Bionic", "Écran Toujours Activé"],
  },
  {
    name: "Samsung S24 Ultra",
    category: "phones",
    brand: "Samsung",
    price: "950 000",
    oldPrice: "1 100 000",
    image: "https://images.unsplash.com/photo-1706141315808-16479f647952?q=80&w=1000&auto=format&fit=crop",
    badge: "Galaxy AI",
    badgeColor: "bg-indigo-600",
    stock: "En stock",
    warranty: "12 mois",
    features: ["S Pen Intégré", "Traduction Instantanée", "Zoom Optique 100x", "Titane"],
  },
  {
    name: "Samsung S23 Ultra",
    category: "phones",
    brand: "Samsung",
    price: "580 000",
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=1000&auto=format&fit=crop",
    stock: "En stock",
    warranty: "12 mois",
    features: ["Capteur 200MP", "Snapdragon 8 Gen 2", "Écran Dynamic AMOLED 2X"],
  },
  {
    name: "MacBook Pro M3 Max",
    category: "computers",
    brand: "Apple",
    price: "2 250 000",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
    badge: "Elite",
    badgeColor: "bg-gray-900",
    stock: "Sur commande",
    warranty: "12 mois",
    features: ["CPU 16 cœurs", "GPU 40 cœurs", "Jusqu'à 128 Go RAM", "Noir Sidéral"],
  },
  {
    name: "MacBook Air M3",
    category: "computers",
    brand: "Apple",
    price: "950 000",
    oldPrice: "1 050 000",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop",
    badge: "Ultrafin",
    badgeColor: "bg-blue-500",
    stock: "En stock",
    warranty: "12 mois",
    features: ["Puce M3", "Design Sans Ventilateur", "Écran Liquid Retina", "18h d'autonomie"],
  },
  {
    name: "Dell XPS 15",
    category: "computers",
    brand: "Dell",
    price: "850 000",
    image: "https://i.dell.com/is/image/DotComPhotos/xps-15-9530-laptop-t-shot-800x620",
    badge: "Premium PC",
    badgeColor: "bg-blue-900",
    stock: "En stock",
    warranty: "12 mois",
    features: ["Intel Core i9", "Écran OLED 3.5K", "Châssis Aluminium & Carbone"],
  },
  {
    name: "HP Pavilion 15",
    category: "computers",
    brand: "HP",
    price: "425 000",
    image: "https://www.hp.com/ca-en/shop/Html/Merch/Images/49M79UA-ABL_1_800x600.jpg",
    stock: "En stock",
    warranty: "12 mois",
    features: ["Intel Core i7", "16 Go RAM", "SSD 512 Go", "Audio Bang & Olufsen"],
  },
];

async function seed() {
  try {
    await sequelize.sync({ force: true });
    console.log('✅ Base de données synchronisée');

    const hashedPassword = await bcrypt.hash('admin123', 10);
    await User.create({
      username: 'admin',
      password: hashedPassword
    });
    console.log('✅ Utilisateur admin créé (admin / admin123)');

    const allProducts = [...initialProducts, ...[...products2026].reverse()];
    for (const product of allProducts) {
      await Product.create(product);
    }
    console.log(`✅ ${allProducts.length} produits importés`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur lors du seeding:', error);
    process.exit(1);
  }
}

seed();
