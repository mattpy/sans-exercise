import { useEffect, useState } from 'react';
import axios from 'axios';

import MovieList from 'routes/movies/MovieList';
import MovieListItem from 'routes/movies/MovieListItem';
import Spinner from 'common/Spinner';
import { DBMovie } from 'lib/types';
import { getServerAddress } from 'lib/helpers';
import { getAccessToken } from 'lib/token';

const MoviesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<DBMovie[]>([]);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`${getServerAddress()}/movies`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` }
      });
      setMovies(data);
      setIsLoading(false);
    };

    fetch();
  }, []);

  const onMovieCreated = (createdMovie: DBMovie) => {
    setMovies(movies => [...movies, createdMovie]);
  };

  const onMovieEdited = (editedMovie: DBMovie) => {
    const _movies = [...movies];
    const movieToUpdateIndex: number = movies.findIndex(
      movie => movie.id === editedMovie.id
    );
    _movies.splice(movieToUpdateIndex, 1, editedMovie);
    setMovies(_movies);
  };

  const onMovieDeleted = (deletedMovie: DBMovie) => {
    setMovies(movies => movies.filter(movie => movie.id !== deletedMovie.id));
  };

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <MovieList
          movies={movies}
          // Render props to avoid prop drilling
          render={movie => (
            <MovieListItem
              key={movie.id}
              movie={movie}
              onMovieEdited={onMovieEdited}
              onMovieDeleted={onMovieDeleted}
            />
          )}
          onMovieCreated={onMovieCreated}
        />
      )}
    </>
  );
};

export default MoviesPage;
