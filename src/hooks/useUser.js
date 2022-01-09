import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import FirebaseAppContext from '../context/FirebaseAppContext'

const useUser = () => {
  const firebaseApp = useContext(FirebaseAppContext)
  const auth = getAuth(firebaseApp)

  return useAuthState(auth)
}

export default useUser;
