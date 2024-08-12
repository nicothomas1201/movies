import { ThemeProvider } from './components/theme-provider'
import { HomePage } from './pages/home.page'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HomePage />
    </ThemeProvider>
  )
}

export default App
