import { motion } from 'framer-motion';

export const CGV = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-brand-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-12"
        >
          Conditions Générales <span className="text-gradient">de Vente</span>
        </motion.h1>

        <div className="prose dark:prose-invert prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-black mb-4">1. Commandes</h2>
            <p>Les commandes s'effectuent via le site web ou directement en boutique. Une commande est considérée comme ferme après validation du paiement ou versement d'un acompte pour les imports spéciaux.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">2. Prix et Paiement</h2>
            <p>Les prix sont indiqués en Francs CFA (FCFA). Le paiement peut s'effectuer en espèces, par virement bancaire ou via les solutions mobiles (Airtel Money, Moov Money).</p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">3. Livraison</h2>
            <p>La livraison à N'Djaména est offerte pour toute commande supérieure à 50 000 FCFA. Pour les provinces, les délais et tarifs dépendent du transporteur choisi.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">4. Garantie</h2>
            <p>La garantie couvre les défauts de fabrication. Elle ne couvre pas les dommages accidentels (chutes, liquides) ou les utilisations non conformes.</p>
          </section>
        </div>
      </div>
    </div>
  );
};