import { useState, useEffect } from 'react';
import axios from 'axios';
import { Package, Smartphone, Laptop, Users } from 'lucide-react';

export const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    phones: 0,
    computers: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        const products = response.data;
        setStats({
          totalProducts: products.length,
          phones: products.filter(p => p.category === 'phones').length,
          computers: products.filter(p => p.category === 'computers').length,
        });
      } catch (error) {
        console.error('Error fetching stats', error);
      }
    };
    fetchStats();
  }, []);

  const cards = [
    { label: 'Total Produits', value: stats.totalProducts, icon: Package, color: 'bg-blue-500' },
    { label: 'Téléphones', value: stats.phones, icon: Smartphone, color: 'bg-green-500' },
    { label: 'Ordinateurs', value: stats.computers, icon: Laptop, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tableau de bord</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
            <div className={`${card.color} p-4 rounded-lg text-white mr-4`}>
              <card.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{card.label}</p>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Bienvenue dans votre espace d'administration</h3>
        <p className="text-gray-600 leading-relaxed">
          Depuis cet espace, vous pouvez gérer l'intégralité du catalogue de Nour Tech. 
          Ajoutez de nouveaux modèles, mettez à jour les prix ou gérez la disponibilité des stocks en quelques clics.
        </p>
      </div>
    </div>
  );
};
