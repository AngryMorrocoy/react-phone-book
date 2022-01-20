import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom';
import FirebaseAppContext from './context/FirebaseAppContext';
import { initializeApp } from 'firebase/app';
import Header from './components/Header/Header';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBiLmj_-ewjHA2e23KdLd44HJOY6aCHRDQ',
  authDomain: 'react-phone-book-9cca8.firebaseapp.com',
  projectId: 'react-phone-book-9cca8',
  storageBucket: 'react-phone-book-9cca8.appspot.com',
  messagingSenderId: '1011742839583',
  appId: '1:1011742839583:web:d44bf089f0a72a53b6162a',
});

function App() {
  return (
    <FirebaseAppContext.Provider value={firebaseApp}>
      <Header />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </FirebaseAppContext.Provider>
  );
}

export default App;
