import { useState } from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { IMovie } from 'lib/types';

interface MovieListItemProps {
  movie: IMovie;
  onMovieDeleted: (arg: number) => void;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    setTimeout(() => {
      setIsDeleting(false);
    }, 2000);
  };

  return (
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
            aria-label='comments'
            disabled={isDeleting}
            sx={{ mr: 1 }}
          >
            <EditOutlinedIcon />
          </IconButton>
          <IconButton
            edge='end'
            aria-label='comments'
            disabled={isDeleting}
            onClick={handleDelete}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </>
      }
    >
      <ListItemIcon>
        <LocalMoviesOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary='Single-line item' secondary='Secondary Text' />
    </ListItem>
  );
};

export default MovieListItem;
