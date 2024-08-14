import { ThemeProvider } from './components/theme-provider'
import { MoviesProvider } from './context/movies.contexts'
import { HomePage } from './pages/home/home.page'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <MoviesProvider>
        <HomePage />
      </MoviesProvider>
    </ThemeProvider>
  )
}

export default App
