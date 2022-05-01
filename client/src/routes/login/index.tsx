import { useState } from 'react';
import { useNavigate } from 'react-router';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import sansLogo from 'assets/images/sans.png';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    // Get key from server
    setIsLoading(true);
    navigate('/movies');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          width: '350px',
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 4,
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
          '& img': {
            width: 'auto',
            height: '175px'
          }
        }}
      >
        <Box component='img' src={sansLogo} alt='SANS Logo' />
        <Button variant='contained' onClick={handleLogin} disabled={isLoading}>
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
