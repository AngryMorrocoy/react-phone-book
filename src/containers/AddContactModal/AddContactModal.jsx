import { Modal, Box, TextField, FormGroup, Button } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import FirebaseAppContext from '../../context/FirebaseAppContext';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import AddCircle from '@mui/icons-material/AddCircle';
import CustomPhoneInput from '../../components/CustomPhoneInput/CustomPhoneInput';
import SuccessfullNotification from '../../components/SuccessfullNotification/SuccessfullNotification';
import DbContactModel from '../../util/DbContactModel';
import useUser from '../../hooks/useUser';

const boxStyle = {
  positon: 'absolute',
  top: '50%',
  left: '50%',
  bgcolor: 'white',
  border: '1px solid black',
  width: 400,
  p: 2,
};

const modalStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const AddContactModal = ({ visible, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contactName, setContactName] = useState('');
  const [snackVisible, setSnackVisible] = useState(false);
  const firebaseApp = useContext(FirebaseAppContext);
  const [user] = useUser();

  useEffect(() => {
    if (visible) setSnackVisible(false);
  }, [visible]);

  const firestore = getFirestore(firebaseApp);

  const handlePhoneInputChange = (val, country) => {
    const dialCode = country.dialCode;
    if (!dialCode) return;
    val = val.slice(dialCode.length);

    setPhoneNumber(`+${dialCode} ${val}`);
  };

  const handleNameInputChange = (evt) => setContactName(evt.target.value);

  const clearForm = () => {
    const contactNameInput = document.querySelector('[name="contact-name"]');

    contactNameInput.value = '';

    setPhoneNumber(null);
    setContactName('');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const addDocumentToDatabase = async () => {
      const contact = new DbContactModel(contactName, phoneNumber);
      const [id, docBody] = contact.toJSON();

      const collectionRef = doc(firestore, user.uid, id);
      const docRef = await setDoc(collectionRef, docBody);
      if (docRef.id) {
        setSnackVisible(true);
      }
    };

    setSnackVisible(true);

    clearForm();
    addDocumentToDatabase();
  };

  return (
    <Modal onClose={onClose} component="div" open={visible} sx={modalStyle}>
      <Box sx={boxStyle}>
        <h2 style={{ margin: '1em 0', padding: 0, textAlign: 'center' }}>
          Add a contact
        </h2>
        <form onSubmit={handleSubmit} action="">
          <FormGroup>
            <TextField
              onChange={handleNameInputChange}
              name="contact-name"
              label="Contact name"
              variant="outlined"
              margin="normal"
              required
            />

            <CustomPhoneInput
              value={phoneNumber}
              onChange={handlePhoneInputChange}
              inputName="phone-number"
            />

            <Button
              type="submit"
              variant="contained"
              startIcon={<AddCircle />}
              color="success"
              sx={{
                mt: '3em',
                mb: '1em',
              }}
            >
              Add contact
            </Button>
          </FormGroup>
        </form>

        <SuccessfullNotification
          snackVisible={snackVisible}
          onClose={() => setSnackVisible(false)}
          text="Successfully created contact."
        />
      </Box>
    </Modal>
  );
};

export default AddContactModal;
