import useUser from '../../hooks/useUser';
import LogoutButton from '../LogoutButton/LogoutButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Header = () => {
  const [user] = useUser();

  return (
    <header>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={3}
        sx={{
          p: 3,
        }}
      >
        <Typography variant="h5">Phone book</Typography>
        {user && <LogoutButton />}
      </Stack>
    </header>
  );
};

export default Header;
