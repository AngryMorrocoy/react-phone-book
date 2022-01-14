import ContactLi from '../../components/ContactLi/ContactLi';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';

const ContactsList = ({ contacts }) => {
  return (
    <List
      sx={{
        width: { xs: '80%', md: '50%' },
        backgroundColor: 'lightgray',
      }}
      subheader={<ListSubheader>Contacts</ListSubheader>}
    >
      {contacts.map((contact) => {
        return <ContactLi key={contact.id} contactData={contact.data()} />;
      })}
    </List>
  );
};

export default ContactsList;
