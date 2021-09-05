import { useState, useEffect } from 'react';
import { getMoviesByQuery } from '../services/api';
import FilmList from '../components/FilmList/FilmList';

function MoviesSearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fn = async () => {
      setMovies(await getMoviesByQuery(searchQuery));
    };
    fn();
  }, [searchQuery]);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          const value = e.target.elements.movieName.value.trim();
          if (!value) {
            return;
          }
          setSearchQuery(value);
        }}
      >
        <input
          type="text"
          name="movieName"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      {movies && <FilmList films={movies} />}
    </>
  );
}

export default MoviesSearchPage;
