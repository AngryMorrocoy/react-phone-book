import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';

const ContactLi = ({ contactData, handleDelete, handleEdit }) => {
  const { contactName, phoneNumber } = contactData;

  return (
    <ListItem>
      <ListItemText primary={contactName} secondary={phoneNumber} />
      <IconButton onClick={handleDelete}>
        <Delete color="error" />
      </IconButton>
      <IconButton onClick={handleEdit}>
        <Edit color="secondary" />
      </IconButton>
    </ListItem>
  );
};

export default ContactLi;
