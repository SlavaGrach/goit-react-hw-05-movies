import { getTrendingMovies } from '../services/api';

import { useState, useEffect } from 'react';
import FilmList from '../components/FilmList/FilmList';

const HomePageView = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fn = async () => {
      setFilms(await getTrendingMovies());
    };
    fn();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>

      {films && <FilmList films={films} />}
    </>
  );
};

export default HomePageView;
