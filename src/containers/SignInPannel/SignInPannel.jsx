import { useContext } from 'react';
import FirebaseAppContext from '../../context/FirebaseAppContext';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';

const SignInPannel = () => {
  const firebaseApp = useContext(FirebaseAppContext);
  const auth = getAuth(firebaseApp);

  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return <button onClick={signInGoogle}>Sign in with Google</button>;
};

export default SignInPannel;
