import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import { IMovie } from 'lib/types';

interface IProps {
  movies: IMovie[];
  listItem: (arg: IMovie) => JSX.Element;
}

const MovieList: React.FC<IProps> = ({ movies, listItem }) => (
  <Box sx={{ p: 2, margin: '0 auto', maxWidth: '700px' }}>
    <Typography sx={{ mt: 2 }} variant='h6' component='div'>
      Movies
    </Typography>
    <List>{movies.map(movie => listItem(movie))}</List>
  </Box>
);

export default MovieList;
