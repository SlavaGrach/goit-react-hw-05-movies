import { Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import HomePage from './views/HomePageView';

import AppBar from './components/AppBar/AppBar';
import MoviesSearchPage from './views/MoviesSearchPageView';
import MovieDetailsPageView from './views/MovieDetailsPageView';

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesSearchPage />
        </Route>
        <Route path="/movies/:movieId" exact>
          <MovieDetailsPageView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
