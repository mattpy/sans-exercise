import { useState } from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Modal from 'common/Modal';
import CreateMovieFormHandler from 'routes/movies/CreateMovieFormHandler';
import { DBMovie } from 'lib/types';

interface IProps {
  onMovieCreated: (arg: DBMovie) => void;
}

const MovieListHeader: React.FC<IProps> = ({ onMovieCreated }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleMovieCreated = (movie: DBMovie) => {
    onMovieCreated(movie);
    setModalOpen(false);
  };

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mt: 1 }}
    >
      <Typography variant='h6' component='div'>
        Movies
      </Typography>
      <Button variant='text' onClick={handleClick}>
        New Movie
      </Button>

      <Modal open={modalOpen} handleClose={handleClose}>
        <CreateMovieFormHandler handleMovieCreated={handleMovieCreated} />
      </Modal>
    </Stack>
  );
};

export default MovieListHeader;
