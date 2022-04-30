import { Helmet } from 'react-helmet';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const LoginPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Card sx={{ minWidth: 275 }}>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            Word of the Day
          </Typography>
          <Button>Sign In</Button>
        </Card>
      </Box>
    </>
  );
};

export default LoginPage;
