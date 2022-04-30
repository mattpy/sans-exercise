import { Outlet } from 'react-router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Layout: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh' }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color='inherit'>Logout</Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Layout;
