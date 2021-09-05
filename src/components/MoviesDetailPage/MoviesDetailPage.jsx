import React from 'react';
import { NavLink } from 'react-router-dom';

const MoviesDetailPage = ({ movie }) => {
  console.log(movie);

  const {
    poster_path,
    title,
    genres,
    vote_average,
    vote_count,
    release_date,
    overview,
  } = movie;
  return (
    <>
      <button>Go back</button>
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt="title"
        height="300px"
      />
      <h1>{`${title} (${release_date.substring(0, 4)})`}</h1>
      <p>{`User score: ${vote_average * 10}%`}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <p>Genre</p>
      <p>{genres.map(genre => genre.name).join(', ')}</p>
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to="">Cast</NavLink>
        </li>
        <li>
          <NavLink to="">Reviews</NavLink>
        </li>
      </ul>
    </>
  );
};

export default MoviesDetailPage;
