import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesDetailsById } from '../services/api';
import MoviesDetailPage from '../components/MoviesDetailPage/MoviesDetailPage';

const MovieDetailsPageView = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        const movie = await getMoviesDetailsById(movieId);
        if (!movie) {
          throw new Error('Page not found');
        }
        setMovie(movie);
      } catch (error) {
        console.log('Some shit is happened');
      }
    }
    getMovie();
  }, [movieId]);

  return <>{movie && <MoviesDetailPage movie={movie} />}</>;
};

export default MovieDetailsPageView;
