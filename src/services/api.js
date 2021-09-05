import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '27479e60681c50d3081750a08a447d06';

axios.defaults.baseURL = BASE_URL;

// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
async function getTrendingMovies() {
  const { data } = await axios.get(
    `/trending/movie/week?api_key=${API_KEY}&page=1`,
  );
  const { results } = data;

  return results;
}
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.getTrandingMovies() { }
async function getMoviesByQuery(query) {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&page=1&query=${query}`,
  );
  const { results } = data;

  return results;
}
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
async function getMoviesDetailsById(id) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
  );
  return data;
}
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
async function getMoviesCredits() {}
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.
async function getMoviesReviews() {}

export {
  getTrendingMovies,
  getMoviesByQuery,
  getMoviesDetailsById,
  getMoviesCredits,
  getMoviesReviews,
};
