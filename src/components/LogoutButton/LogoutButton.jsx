import { useContext } from 'react';
import FirebaseAppContext from '../../context/FirebaseAppContext';
import { signOut, getAuth } from 'firebase/auth';

const LogoutButton = () => {
  const firebaseApp = useContext(FirebaseAppContext);
  const auth = getAuth(firebaseApp);

  const logout = () => {
    signOut(auth);
  };

  return <button onClick={logout}>logout</button>;
};

export default LogoutButton;
