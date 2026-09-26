import { motion } from 'framer-motion';
import imageCredits from '../data/imageCredits.json';

export const MentionsLegales = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-brand-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-12"
        >
          Mentions <span className="text-gradient">Légales</span>
        </motion.h1>

        <div className="prose dark:prose-invert prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-black mb-4">1. Édition du site</h2>
            <p>Le site <strong>Nour Tech</strong> est édité par l'entreprise Nour Tech, société à responsabilité limitée, dont le siège social est situé à Avenue Charles de Gaulle, N'Djaména, Tchad.</p>
            <p>Responsable de la publication : Saleh Mahamat Nour</p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">2. Hébergement</h2>
            <p>Le site est hébergé par Vercel Inc., situé au 340 S Lemon Ave #1107 Walnut, CA 91789, USA.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">3. Propriété intellectuelle</h2>
            <p>L'ensemble de ce site relève de la législation tchadienne et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">4. Protection des données</h2>
            <p>Conformément à la réglementation sur la protection des données personnelles, vous disposez d'un droit d'accès, de rectification et d'opposition aux données vous concernant en nous contactant via le formulaire de contact.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">5. Crédits photos</h2>
            <p className="mb-4">Certaines photos de produits proviennent de Wikimedia Commons et sont utilisées selon leur licence libre :</p>
            <ul className="space-y-1 text-sm">
              {imageCredits.map((c) => (
                <li key={c.file}>
                  <a href={c.source} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{c.title}</a>
                  {c.author && <> par {c.author}</>} ({c.license})
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};