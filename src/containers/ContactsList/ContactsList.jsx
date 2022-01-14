import { useContext } from 'react';
import FirebaseAppContext from '../../context/FirebaseAppContext';
import ContactLi from '../../components/ContactLi/ContactLi';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import useUser from '../../hooks/useUser';
import { doc, deleteDoc, getFirestore } from 'firebase/firestore';

const ContactsList = ({ contacts }) => {
  const [user] = useUser();
  const firebaseApp = useContext(FirebaseAppContext);
  const db = getFirestore(firebaseApp);

  const deleteContact = (contactId) => {
    console.log(contactId);
    const docRef = doc(db, user.uid, contactId);

    const deleteDocument = async () => {
      console.log('deleting', contactId);
      await deleteDoc(docRef);
    };

    deleteDocument();
  };

  return (
    <>
      <List
        sx={{
          width: { xs: '80%', md: '50%' },
          backgroundColor: 'lightgray',
        }}
        subheader={<ListSubheader>Contacts</ListSubheader>}
      >
        {contacts.map((contact) => {
          return (
            <ContactLi
              key={contact.id}
              contactData={contact.data()}
              handleDelete={() => deleteContact(contact.id)}
            />
          );
        })}
      </List>
    </>
  );
};

export default ContactsList;
