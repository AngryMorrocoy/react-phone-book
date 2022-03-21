import { useContext } from 'react';
import useUser from '../../hooks/useUser';
import { Navigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import FirebaseAppContext from '../../context/FirebaseAppContext';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Login = () => {
  const [user] = useUser();
  const firebaseApp = useContext(FirebaseAppContext);
  const auth = getAuth(firebaseApp);

  const loginGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <Stack alignItems="center" justifyContent="center" spacing={4} pb={2}>
      <Button variant="contained" onClick={loginGoogle}>
        Login with google
      </Button>
    </Stack>
  );
};

export default Login;
