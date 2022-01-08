import SignInPannel from './containers/SignInPannel/SignInPannel';
import LogoutButton from './components/LogoutButton/LogoutButton';
import FirebaseAppContext from './context/FirebaseAppContext';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBiLmj_-ewjHA2e23KdLd44HJOY6aCHRDQ',
  authDomain: 'react-phone-book-9cca8.firebaseapp.com',
  projectId: 'react-phone-book-9cca8',
  storageBucket: 'react-phone-book-9cca8.appspot.com',
  messagingSenderId: '1011742839583',
  appId: '1:1011742839583:web:d44bf089f0a72a53b6162a',
});

const auth = getAuth(firebaseApp);

function App() {
  const [user] = useAuthState(auth);

  console.log(user);

  return (
    <FirebaseAppContext.Provider value={firebaseApp}>
      <header>
        <div>Phone book</div>
        {user && <LogoutButton/>}
      </header>
      <main>{user ? <p>Hola</p> : <SignInPannel/>}</main>
    </FirebaseAppContext.Provider>
  );
}

export default App;
