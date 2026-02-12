// src/components/layout/Footer.jsx
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Nour Tech</h3>
            <p className="text-gray-400 text-sm">
              Solutions technologiques innovantes pour le Tchad et l'Afrique.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white transition">Accueil</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/about" className="hover:text-white transition">À propos</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>N'Djaména, Tchad</li>
              <li>contact@nourtech.td</li>
              <li>+235 XX XX XX XX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Nour Tech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};