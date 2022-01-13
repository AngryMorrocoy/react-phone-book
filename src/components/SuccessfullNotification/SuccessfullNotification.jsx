import { Snackbar, Alert } from '@mui/material';

const SuccessfullNotification = ({
  snackVisible,
  onClose,
  text,
  hideAfter,
}) => {
  hideAfter = hideAfter ? hideAfter : 2000;

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') return;
    onClose();
  };

  return (
    <Snackbar
      open={snackVisible}
      autoHideDuration={hideAfter}
      onClose={onClose}
    >
      <Alert onClose={handleClose} variant="filled" severity="success">
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SuccessfullNotification;
