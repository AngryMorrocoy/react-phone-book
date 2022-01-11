import useUser from '../../hooks/useUser';
import { Navigate } from 'react-router-dom';

const RequiresAuth = ({ children }) => {
  const [user] = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequiresAuth;
