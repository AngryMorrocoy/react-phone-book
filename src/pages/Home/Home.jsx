import { useContext, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection } from 'firebase/firestore';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import FirebaseAppContext from '../../context/FirebaseAppContext';
import RequiresAuth from '../../components/RequiresAuth/RequiresAuth';
import AddContactModal from '../../containers/AddContactModal/AddContactModal';
import ContactsList from '../../containers/ContactsList/ContactsList';

const Home = () => {
  const firebaseApp = useContext(FirebaseAppContext);
  const firestore = getFirestore(firebaseApp);
  const [addContactVisible, setAddContactVisible] = useState(false);

  const [values] = useCollection(collection(firestore, 'uwu'));
  // RequiresAuth
  return (
    <RequiresAuth>
      {values ? <ContactsList contacts={values.docs} /> : <LinearProgress />}

      <Button
        color="success"
        variant="contained"
        onClick={() => setAddContactVisible(true)}
      >
        Add contact
      </Button>

      <AddContactModal
        visible={addContactVisible}
        onClose={() => setAddContactVisible(false)}
      />
    </RequiresAuth>
  );
};

export default Home;
