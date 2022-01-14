import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const AskYesNoDialog = ({ open, onClose, title, content, onYes, onNo }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onNo}>No</Button>
        <Button onClick={onYes} autofocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AskYesNoDialog;
