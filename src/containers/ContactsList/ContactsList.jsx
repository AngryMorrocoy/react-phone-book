import ContactLi from '../../components/ContactLi/ContactLi'
import List from '@mui/material/List'

const ContactsList = ({ contacts }) => {
  return (
    <List>
      {contacts.map((contact) => {
        return <ContactLi key={contact.id} contactData={contact.data()}/>;
      })}
    </List>
  );
};

export default ContactsList;
