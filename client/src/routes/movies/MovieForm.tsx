import { Formik } from 'formik';
import * as yup from 'yup';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { FormatEnum, Movie, DBMovie } from 'lib/types';

interface IProps {
  initialValues?: Movie;
  onSubmit: (values: Movie | DBMovie, formProps: any) => void;
}

// Initial values for form when creating a movie
const createMovieInitialValues: Movie = {
  title: '',
  format: FormatEnum.VHS,
  length: 0,
  releaseYear: 0,
  rating: 1
};

// Form validation
const validationSchema = yup.object({
  title: yup.string().min(1).max(50).required(),
  format: yup.mixed().oneOf(Object.keys(FormatEnum)),
  length: yup.number().positive().min(0).max(500).required(),
  releaseYear: yup.number().positive().min(1800).max(2100).required(),
  rating: yup.number().positive().min(1).max(5).required()
});

const MovieForm: React.FC<IProps> = ({ initialValues, onSubmit }) => {
  // Because the same form can be used for both creating and editing movies,
  // the forms initial values need to change accordingly.
  const formValues = initialValues ?? createMovieInitialValues;

  return (
    <Box
      component='div'
      onClick={(event: React.MouseEvent) => event.stopPropagation()}
      onMouseUp={(event: React.MouseEvent) => event.stopPropagation()}
      sx={{
        m: 4,
        p: 4,
        borderRadius: '4px',
        backgroundColor: 'background.paper',
        width: '400px',
        maxWidth: '100%',
        '& .MuiTextField-root': { mt: 1, mb: 1 }
      }}
    >
      {/**
       * 
       * Section title
       * 
       * */}
      <Typography variant='h6' sx={{ mb: 2 }}>
        {initialValues ? 'Edit' : 'Create'} Movie
      </Typography>

      {/**
       * 
       * Form
       * 
       */}
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {props => {
          return (
            <form onSubmit={props.handleSubmit}>
              {/**
               *
               * Title
               *
               */}
              <TextField
                fullWidth
                id='title'
                name='title'
                label='Title'
                value={props.values.title}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.touched.title && Boolean(props.errors.title)}
                helperText={props.touched.title && props.errors.title}
              />

              {/**
               *
               * Format
               *
               */}
              <FormControl fullWidth>
                <InputLabel id='format-input-label'>Format</InputLabel>
                <Select
                  labelId='format-label-select'
                  id='format'
                  value={props.values.format}
                  label='Format'
                  name='format'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.touched.format && Boolean(props.errors.format)}
                >
                  {Object.keys(FormatEnum).map(type => {
                    return (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              {/**
               *
               * Length
               *
               */}
              <TextField
                fullWidth
                id='length'
                name='length'
                label='Length'
                type='number'
                value={props.values.length}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.touched.length && Boolean(props.errors.length)}
                helperText={props.touched.length && props.errors.length}
              />

              {/**
               *
               * Release year
               *
               */}
              <TextField
                fullWidth
                id='releaseYear'
                name='releaseYear'
                label='Release Year'
                type='number'
                value={props.values.releaseYear}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={
                  props.touched.releaseYear && Boolean(props.errors.releaseYear)
                }
                helperText={
                  props.touched.releaseYear && props.errors.releaseYear
                }
              />

              {/**
               *
               * Rating
               *
               */}
              <FormControl fullWidth>
                <InputLabel id='rating-input-label'>Rating</InputLabel>
                <Select
                  labelId='rating-label-select'
                  id='rating'
                  value={props.values.rating}
                  label='Rating'
                  name='rating'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.touched.rating && Boolean(props.errors.rating)}
                >
                  {[1, 2, 3, 4, 5].map(value => {
                    return (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              {/**
               *
               * Submit
               *
               */}
              <Button
                type='submit'
                variant='contained'
                disabled={!props.isValid || props.isSubmitting}
                sx={{ mt: 2 }}
                fullWidth
              >
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default MovieForm;
