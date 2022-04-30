import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import MovieList from 'routes/movies/MovieList';
import MovieListItem from 'routes/movies/MovieListItem';
import Spinner from 'common/Spinner';
import { IMovie } from 'lib/types';

const MoviesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);

      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      setMovies(data);
      setIsLoading(false);
    };

    fetch();
  }, []);

  const onMovieDeleted = (id: number) => {
    const filteredMovies = movies.filter(movie => movie.id !== id);
    setMovies(filteredMovies);
  };

  return (
    <>
      <Helmet>
        <title>SANS - Movies</title>
      </Helmet>
      {isLoading && <Spinner />}
      {!!movies.length && (
        <MovieList
          movies={movies}
          listItem={(movie: IMovie) => (
            <MovieListItem movie={movie} onMovieDeleted={onMovieDeleted} />
          )}
        />
      )}
    </>
  );
};

export default MoviesPage;
