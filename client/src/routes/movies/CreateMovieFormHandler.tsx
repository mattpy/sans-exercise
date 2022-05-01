import { useState } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';

import MovieForm from 'routes/movies/MovieForm';
import Spinner from 'common/Spinner';
import { getServerAddress } from 'lib/helpers';
import { Movie, DBMovie } from 'lib/types';
import { FormikProps } from 'formik';
import { getAccessToken } from 'lib/token';

interface IProps {
  handleMovieCreated: (arg: DBMovie) => void;
}

const CreateMovieFormHandler: React.FC<IProps> = ({ handleMovieCreated }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleEditFormSubmit = async (
    values: Movie | DBMovie,
    formProps: FormikProps<{}>
  ) => {
    setIsLoading(true);
    const { data } = await axios.post(`${getServerAddress()}/movies`, values, {
      headers: { Authorization: `Bearer ${getAccessToken()}` }
    });
    handleMovieCreated(data);
  };

  return (
    <Box>
      {isLoading ? <Spinner /> : <MovieForm onSubmit={handleEditFormSubmit} />}
    </Box>
  );
};

export default CreateMovieFormHandler;
