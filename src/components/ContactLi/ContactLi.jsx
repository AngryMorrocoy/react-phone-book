import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const ContactLi = ({ contactData }) => {

  const {contactName, phoneNumber} = contactData;

  return <ListItem>
  <ListItemText primary={contactName} secondary={phoneNumber}/>
  {
    // <h4>{contactName}</h4>
    // <p>{phoneNumber}</p>
  }
  </ListItem>
}

export default ContactLi;
