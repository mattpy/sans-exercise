import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';

import MovieForm from 'routes/movies/MovieForm';
import Spinner from 'common/Spinner';

import { Movie, DBMovie } from 'lib/types';
import { getServerAddress } from 'lib/helpers';
import { FormikProps } from 'formik';

interface IProps {
  initialValues: Movie | DBMovie;
  handleEditSuccess: (arg: DBMovie) => void;
}

const EditMovieFormHandler: React.FC<IProps> = ({
  initialValues,
  handleEditSuccess
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleEditFormSubmit = async (
    values: Movie | DBMovie,
    formProps: FormikProps<{}>
  ) => {
    setIsLoading(true);
    const { data } = await axios.put(`${getServerAddress()}/movies`, values);
    handleEditSuccess(data);
  };

  return (
    <Box>
      {isLoading ? (
        <Spinner />
      ) : (
        <MovieForm
          initialValues={initialValues}
          onSubmit={handleEditFormSubmit}
        />
      )}
    </Box>
  );
};

export default EditMovieFormHandler;
