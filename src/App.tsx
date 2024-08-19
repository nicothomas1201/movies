import { MoviesProvider } from './context/movies.contexts'
import { GlobalLayout } from './layouts'
import { MoviePage, HomePage, WatchedMoviesPage } from './pages'
import { Route, Switch } from 'wouter'

function App() {
  return (
    <GlobalLayout>
      <Switch>
        <Route path="/">
          <MoviesProvider>
            <HomePage />
          </MoviesProvider>
        </Route>
        <Route path="/watched-films">
          <WatchedMoviesPage />
        </Route>
        <Route path="/watch-list"></Route>
        <Route path="/movie/:id">
          <MoviePage />
        </Route>
      </Switch>
    </GlobalLayout>
  )
}

export default App
