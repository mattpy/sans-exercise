import { Helmet } from 'react-helmet';

import Box from '@mui/system/Box';

const MoviesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Movies</title>
      </Helmet>
      <Box>Movies Page</Box>
    </>
  );
};

export default MoviesPage;
