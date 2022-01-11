import { Modal, Box, TextField, FormGroup, Button } from '@mui/material';
import AddCircle from '@mui/icons-material/AddCircle';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

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
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('uwu');
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
              label="Contact name"
              variant="outlined"
              margin="normal"
            />

            <PhoneInput
              inputProps={{
                name: 'phone',
                required: true,
              }}
              containerStyle={{
                marginTop: '1em',
              }}
              inputStyle={{
                width: '100%',
              }}
              enableSearch
            />

            <Button
              variant="contained"
              startIcon={<AddCircle />}
              color="success"
              sx={{
                mt: '3em',
                mb: '1em',
              }}
              onClick={handleSubmit}
            >
              Add contact
            </Button>
          </FormGroup>
        </form>
      </Box>
    </Modal>
  );
};

export default AddContactModal;
