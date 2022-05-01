import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import MovieListHeader from 'routes/movies/MovieListHeader';
import { DBMovie } from 'lib/types';

interface IProps {
  movies: DBMovie[];
  render: (arg: DBMovie) => JSX.Element;
  onMovieCreated: (arg: DBMovie) => void;
}

const MovieList: React.FC<IProps> = ({ movies, render, onMovieCreated }) => (
  <Box
    sx={{
      p: 2,
      margin: '0 auto',
      maxWidth: '700px'
    }}
  >
    <MovieListHeader onMovieCreated={onMovieCreated} />
    {!!movies.length ? (
      <List sx={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}>
        {movies.map(movie => render(movie))}
      </List>
    ) : (
      <Typography sx={{ mt: 2, textAlign: 'center' }}>
        There are currently no movies, try adding some!
      </Typography>
    )}
  </Box>
);

export default MovieList;
