import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Edit from '@mui/icons-material/Edit';
import CustomPhoneInput from '../../components/CustomPhoneInput/CustomPhoneInput';
import { useState, useEffect, useContext } from 'react';
import useUser from '../../hooks/useUser';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import FirebaseAppContext from '../../context/FirebaseAppContext';
import DbContactModel from '../../util/DbContactModel';
import SuccessfullNotification from '../../components/SuccessfullNotification/SuccessfullNotification';

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

const EditContactModal = ({ visible, onClose, contact }) => {
  let contactData = contact
    ? contact.data()
    : { contactName: '', phoneNumber: '' };

  const [contactName, setContactName] = useState(contactData.contactName);
  const [phoneNumber, setPhoneNumber] = useState(contactData.phoneNumber);
  const [snackVisible, setSnackVisible] = useState(false);
  const [user] = useUser();

  const firebaseApp = useContext(FirebaseAppContext);
  const firestore = getFirestore(firebaseApp);

  useEffect(() => {
    setContactName(contactData.contactName);
    setPhoneNumber(contactData.phoneNumber);
  }, [contact]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const editDocument = async () => {
      const contactInstance = new DbContactModel(contactName, phoneNumber);
      const docBody = contactInstance.toJSON();

      const documentRef = doc(firestore, user.uid, contact.id);
      await updateDoc(documentRef, docBody);

      setSnackVisible(true);
    };

    editDocument();
  };

  const handlePhoneInputChange = (val, country) => {
    const dialCode = country.dialCode;
    if (!dialCode) return;
    val = val.slice(dialCode.length);

    setPhoneNumber(`+${dialCode} ${val}`);
  };

  return (
    <>
      <Modal onClose={onClose} component="div" open={visible} sx={modalStyle}>
        <Box sx={boxStyle}>
          {contact && (
            <>
              <h2 style={{ margin: '1em 0', padding: 0, textAlign: 'center' }}>
                Editing contact <i>{contact.contactName}</i>
              </h2>

              <form action="" onSubmit={handleSubmit}>
                <FormGroup>
                  <TextField
                    defaultValue={contactData.contactName}
                    onChange={(evt) => setContactName(evt.target.value)}
                    name="contact-name"
                    label="Contact name"
                    variant="outlined"
                    margin="normal"
                    required
                  />

                  <CustomPhoneInput
                    value={contactData.phoneNumber}
                    onChange={handlePhoneInputChange}
                    inputName="phone-number"
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<Edit />}
                    color="secondary"
                    sx={{
                      mt: '3em',
                      mb: '1em',
                    }}
                  >
                    Edit
                  </Button>
                </FormGroup>
              </form>
            </>
          )}
        </Box>
      </Modal>
      <SuccessfullNotification
        snackVisible={snackVisible}
        onClose={() => setSnackVisible(false)}
        text="Successfully edited contact."
      />
    </>
  );
};

export default EditContactModal;
