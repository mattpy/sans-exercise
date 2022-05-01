import { useState } from 'react';
import axios from 'axios';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import Modal from 'common/Modal';
import EditMovieFormHandler from 'routes/movies/EditMovieFormHandler';

import { DBMovie } from 'lib/types';
import { getServerAddress } from 'lib/helpers';

interface MovieListItemProps {
  movie: DBMovie;
  onMovieEdited: (arg: DBMovie) => void;
  onMovieDeleted: (arg: DBMovie) => void;
}

const MovieListItem: React.FC<MovieListItemProps> = ({
  movie,
  onMovieEdited,
  onMovieDeleted
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = (movie: DBMovie) => async () => {
    setIsDeleting(true);
    await axios.delete(`${getServerAddress()}/movies/${movie.id}`);
    onMovieDeleted(movie);
  };

  const handleEditSuccess = async (movie: DBMovie) => {
    setModalOpen(false);
    onMovieEdited(movie);
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ListItem
        sx={theme => ({
          mt: 2,
          mb: 2,
          border: `1px solid ${theme.palette.grey[200]}`,
          borderRadius: '4px'
        })}
        secondaryAction={
          <>
            <IconButton
              edge='end'
              aria-label='edit-button'
              disabled={isDeleting}
              onClick={handleOpen}
              sx={{ mr: 1 }}
            >
              <EditOutlinedIcon />
            </IconButton>
            <IconButton
              edge='end'
              aria-label='delete-button'
              disabled={isDeleting}
              onClick={handleDelete(movie)}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </>
        }
      >
        <ListItemIcon>
          <LocalMoviesOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary={movie.title}
          secondary={`Rating: ${movie.rating}`}
        />
      </ListItem>

      <Modal open={modalOpen} handleClose={handleClose}>
        <EditMovieFormHandler
          initialValues={movie}
          handleEditSuccess={handleEditSuccess}
        />
      </Modal>
    </>
  );
};

export default MovieListItem;
