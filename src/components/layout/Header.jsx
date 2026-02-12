// src/components/layout/Header.jsx - DESIGN PREMIUM
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Produits', href: '/produits' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo avec design moderne */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition">
              <span className="text-white text-2xl font-bold">NT</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Nour Tech
              </span>
              <span className="text-xs text-gray-500 tracking-wider">
                LA TECHNOLOGIE À VOTRE PORTÉE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centré */}
          <div className="hidden md:flex md:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-50 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact rapide - Design élégant */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
              <PhoneIcon className="h-5 w-5 text-blue-600" />
              <a href="tel:+23566750015" className="text-gray-800 font-semibold hover:text-blue-600">
                +235 66 75 00 15
              </a>
            </div>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transition-all"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="tel:+23566750015" className="flex items-center space-x-2 text-gray-700 px-4">
                <PhoneIcon className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">+235 66 75 00 15</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};