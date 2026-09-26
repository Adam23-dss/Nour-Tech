import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const AdminProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};
