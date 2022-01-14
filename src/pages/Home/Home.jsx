import { useContext, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection } from 'firebase/firestore';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import FirebaseAppContext from '../../context/FirebaseAppContext';
import RequiresAuth from '../../components/RequiresAuth/RequiresAuth';
import AddContactModal from '../../containers/AddContactModal/AddContactModal';
import ContactsList from '../../containers/ContactsList/ContactsList';
import useUser from '../../hooks/useUser';

const Home = () => {
  let values;

  const firebaseApp = useContext(FirebaseAppContext);
  const firestore = getFirestore(firebaseApp);
  const [addContactVisible, setAddContactVisible] = useState(false);

  const [user] = useUser();

  if (user) [values] = useCollection(collection(firestore, user.uid));

  return (
    <RequiresAuth>
      <Stack alignItems="center" spacing={4} pb={2}>
        {values ? (
          <ContactsList contacts={values.docs} />
        ) : (
          <CircularProgress />
        )}

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
      </Stack>
    </RequiresAuth>
  );
};

export default Home;
