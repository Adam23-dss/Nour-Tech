import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, 
  Package, 
  LogOut, 
  Menu, 
  X 
} from 'lucide-react';
import { useState } from 'react';

export const AdminLayout = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Tableau de bord', icon: LayoutDashboard, path: '/admin/dashboard' },
    { label: 'Produits', icon: Package, path: '/admin/products' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white w-64 flex-shrink-0 transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'} fixed md:relative h-full z-30`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-400">Nour Tech Admin</h1>
          <p className="text-gray-400 text-xs mt-1">Connecté en tant que {user}</p>
        </div>
        <nav className="mt-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-6 py-3 text-red-400 hover:bg-gray-800 transition-colors mt-auto"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Déconnexion
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-sm text-blue-600 hover:underline">Voir le site</Link>
          </div>
        </header>
        <main className="p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
