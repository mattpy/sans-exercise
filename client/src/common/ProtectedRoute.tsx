import { Navigate, Outlet } from 'react-router-dom';
import { getAccessToken } from 'lib/token';

const ProtectedRoute: React.FC<{ children?: React.ReactNode }> = () => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
