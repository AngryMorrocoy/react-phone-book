import { useContext, useState } from 'react';
import FirebaseAppContext from '../../context/FirebaseAppContext';
import ContactLi from '../../components/ContactLi/ContactLi';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import AskYesNoDialog from '../../components/AskYesNoDialog/AskYesNoDialog';
import EditContactModal from '../EditContactModal/EditContactModal';
import useUser from '../../hooks/useUser';
import { doc, deleteDoc, getFirestore } from 'firebase/firestore';

const ContactsList = ({ contacts }) => {
  const [user] = useUser();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(undefined);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const firebaseApp = useContext(FirebaseAppContext);
  const db = getFirestore(firebaseApp);

  const deleteContact = () => {
    const contactId = currentContact;
    const docRef = doc(db, user.uid, contactId);

    const deleteDocument = async () => {
      setDialogOpen(true);
      await deleteDoc(docRef);
    };

    deleteDocument();
    closeDialog();
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setCurrentContact(undefined);
  };

  const openDialog = (contactId) => {
    setCurrentContact(contactId);
    setDialogOpen(true);
  };

  const openEditModal = (contact) => {
    setCurrentContact(contact);
    setEditModalVisible(true);
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
              handleDelete={() => openDialog(contact)}
              handleEdit={() => openEditModal(contact)}
            />
          );
        })}
      </List>

      <AskYesNoDialog
        open={dialogOpen}
        onClose={closeDialog}
        title={
          <span>
            Delete the contact{' '}
            <i>{currentContact ? currentContact.data().contactName : ''}</i>?
          </span>
        }
        content="This action cannot be undone."
        onNo={closeDialog}
        onYes={deleteContact}
      />
      <EditContactModal
        visible={editModalVisible}
        onClose={() => setEditModalVisible(false)}
        contact={currentContact}
      />
    </>
  );
};

export default ContactsList;
