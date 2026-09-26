// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 dark:bg-[#0a0a0a]">
      <div className="text-center">
        <h1 className="text-9xl font-black text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">Page non trouvée</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-md mx-auto dark:text-gray-400">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg"
          >
            <HomeIcon className="h-5 w-5" />
            <span>Retour à l'accueil</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition dark:bg-white/10 dark:text-gray-400"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Page précédente</span>
          </button>
        </div>
      </div>
    </div>
  );
};