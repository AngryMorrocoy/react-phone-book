import { useContext, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection } from 'firebase/firestore';
import Button from '@mui/material/Button';
import FirebaseAppContext from '../../context/FirebaseAppContext';
import RequiresAuth from '../../components/RequiresAuth/RequiresAuth';
import AddContactModal from '../../containers/AddContactModal/AddContactModal';

const Home = () => {
  const firebaseApp = useContext(FirebaseAppContext);
  const firestore = getFirestore(firebaseApp);
  const [addContactVisible, setAddContactVisible] = useState(false);

  const [values] = useCollection(collection(firestore, 'uwu'));
  // RequiresAuth
  return (
    <>
      <div>
        <ul>
          {values &&
            values.docs.map((val) => {
              return <li key={val.id}>{JSON.stringify(val.data())}</li>;
            })}
        </ul>

        <Button
          color="success"
          variant="contained"
          onClick={() => setAddContactVisible(true)}
        >
          Add contact
        </Button>
      </div>

      <AddContactModal
        visible={addContactVisible}
        onClose={() => setAddContactVisible(false)}
      />
    </>
  );
};

export default Home;
