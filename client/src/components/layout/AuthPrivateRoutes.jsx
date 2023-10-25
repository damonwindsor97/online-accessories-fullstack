import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function AuthPrivateRoutes() {
  const { getCurrentUser } = useAuth();
  const location = useLocation();

  return (
    // Return to Login page if no user is detected, otherwise take them there
    !getCurrentUser()
      ? <Navigate to="/login" state={{ from: location }} replace />
      : <Outlet/>
  )
}

export default AuthPrivateRoutes