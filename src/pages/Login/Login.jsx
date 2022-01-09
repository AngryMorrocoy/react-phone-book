import { useContext } from 'react';
import useUser from '../../hooks/useUser';
import { Navigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import FirebaseAppContext from '../../context/FirebaseAppContext';

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
    <div>
      <button onClick={loginGoogle}>Login with google</button>
    </div>
  );
};

export default Login;
