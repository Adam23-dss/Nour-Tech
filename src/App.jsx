// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Shop } from './pages/Shop';
import { Projects } from './pages/Projects';
import { Blog, BlogPost } from './pages/Blog';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ProductDetail } from './pages/ProductDetail';
import { Compare } from './pages/Compare';
import { MentionsLegales } from './pages/MentionsLegales';
import { CGV } from './pages/CGV';
import { NotFound } from './pages/NotFound';
import { CartProvider } from './context/CartProvider';
import { ThemeProvider } from './context/ThemeContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { CompareProvider } from './context/CompareContext';
import { AuthProvider } from './context/AuthContext';
import { CartDrawer } from './components/cart/CartDrawer';
import { CompareDrawer } from './components/ui/CompareDrawer';

// Admin Imports
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { ProductManagement } from './pages/admin/ProductManagement';
import { AdminProtectedRoute } from './pages/admin/AdminProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <FavoritesProvider>
          <CompareProvider>
            <CartProvider>
              <Router>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Layout><Home /></Layout>} />
                  <Route path="/services" element={<Layout><Services /></Layout>} />
                  <Route path="/boutique" element={<Layout><Shop /></Layout>} />
                  <Route path="/projets" element={<Layout><Projects /></Layout>} />
                  <Route path="/blog" element={<Layout><Blog /></Layout>} />
                  <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
                  <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
                  <Route path="/compare" element={<Layout><Compare /></Layout>} />
                  <Route path="/about" element={<Layout><About /></Layout>} />
                  <Route path="/contact" element={<Layout><Contact /></Layout>} />
                  <Route path="/mentions-legales" element={<Layout><MentionsLegales /></Layout>} />
                  <Route path="/cgv" element={<Layout><CGV /></Layout>} />

                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin" element={
                    <AdminProtectedRoute>
                      <AdminLayout />
                    </AdminProtectedRoute>
                  }>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="products" element={<ProductManagement />} />
                    <Route index element={<AdminDashboard />} />
                  </Route>

                  <Route path="*" element={<Layout><NotFound /></Layout>} />
                </Routes>
                <CartDrawer />
                <CompareDrawer />
              </Router>
            </CartProvider>
          </CompareProvider>
        </FavoritesProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;