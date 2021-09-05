import { Link, useRouteMatch } from 'react-router-dom';

const FilmListItem = ({ film }) => {
  const { url } = useRouteMatch();

  return (
    <li>
      {/* <Link to={`${url}/${film.id}`}>{film.original_title}</Link> */}
      <Link to={`movies/${film.id}`}>{film.original_title}</Link>
    </li>
  );
};

export default FilmListItem;
