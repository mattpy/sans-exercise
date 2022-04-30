import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress size={60} />
    </Box>
  );
};

export default Spinner;
