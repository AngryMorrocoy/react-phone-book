import { useContext } from 'react';
import FirebaseAppContext from '../../context/FirebaseAppContext';
import Button from '@mui/material/Button';
import Logout from '@mui/icons-material/Logout';
import { signOut, getAuth } from 'firebase/auth';

const LogoutButton = () => {
  const firebaseApp = useContext(FirebaseAppContext);
  const auth = getAuth(firebaseApp);

  const logout = () => {
    signOut(auth);
  };

  return (
    <Button
      color="error"
      variant="contained"
      onClick={logout}
      endIcon={<Logout />}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
