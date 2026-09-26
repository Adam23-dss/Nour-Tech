// Ajoute les nouveautés sans effacer la base (contrairement à seed.js).
// Usage : node scripts/add-products.js
const { sequelize, Product } = require('../models');
const { products2026 } = require('./products-2026');

async function addProducts() {
  await sequelize.sync();
  let added = 0;
  // Ordre inversé : le premier de la liste devient le plus récent (affiché en premier)
  for (const product of [...products2026].reverse()) {
    const [, created] = await Product.findOrCreate({ where: { name: product.name }, defaults: product });
    if (created) added++;
  }
  console.log(`✅ ${added} produit(s) ajouté(s), ${products2026.length - added} déjà présent(s)`);
  process.exit(0);
}

addProducts().catch((error) => {
  console.error('❌ Erreur :', error);
  process.exit(1);
});
