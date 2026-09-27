import { Link, NavLink, useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  Package,
  FolderKanban,
  Newspaper,
  Users,
  LogOut,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import { useState } from 'react';

export const AdminLayout = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Tableau de bord', icon: LayoutDashboard, path: '/admin/dashboard' },
    { label: 'Produits', icon: Package, path: '/admin/products' },
    { label: 'Projets', icon: FolderKanban, path: '/admin/projects' },
    { label: 'Blog', icon: Newspaper, path: '/admin/posts' },
    { label: 'Équipe', icon: Users, path: '/admin/team' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg flex text-brand-black">
      {/* Sidebar */}
      <aside
        className={`bg-brand-black text-white w-64 flex-shrink-0 flex flex-col fixed md:sticky top-0 h-screen z-30 transition-transform duration-300 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >
        <div className="p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-sky to-brand-blue rounded-lg flex items-center justify-center">
                <span className="font-display font-black">NT</span>
              </div>
              <span className="font-display text-xl font-black uppercase">
                <span className="text-brand-sky">Nour</span>Tech
              </span>
            </div>
            <p className="text-gray-400 text-xs mt-3">Connecté : {user}</p>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden" aria-label="Fermer le menu">
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        <nav className="mt-4 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 border-l-4 transition-colors ${
                  isActive
                    ? 'border-brand-red bg-white/5 text-white font-semibold'
                    : 'border-transparent text-gray-400 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center px-6 py-4 text-brand-red hover:bg-white/5 transition-colors border-t border-white/10"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Déconnexion
        </button>
      </aside>

      {isSidebarOpen && <div className="fixed inset-0 bg-black/40 z-20 md:hidden" onClick={() => setIsSidebarOpen(false)} />}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <button onClick={() => setIsSidebarOpen(true)} className="md:hidden" aria-label="Ouvrir le menu">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          <span className="hidden md:block font-display font-bold text-lg">Administration</span>
          <Link to="/" target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline">
            Voir le site <ExternalLink className="h-4 w-4" />
          </Link>
        </header>
        <main className="p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
