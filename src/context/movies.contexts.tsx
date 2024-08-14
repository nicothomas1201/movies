import { IMovieAdapted, IMoviesAdapted } from '@/models/movies'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type Set<T> = Dispatch<SetStateAction<T>>

interface MoviesState {
  searchedMovies: IMoviesAdapted
  setSearchedMovies: Set<IMoviesAdapted>

  selectedMovies: IMovieAdapted[]
  setSelectedMovies: Set<IMovieAdapted[]>
}

const MoviesContext = createContext<MoviesState>({} as MoviesState)

export function MoviesProvider({ children }: { children: React.ReactNode }) {
  const [searchedMovies, setSearchedMovies] = useState<IMoviesAdapted>({
    page: 1,
    results: [],
    total_results: 0,
    total_pages: 1,
  })

  const [selectedMovies, setSelectedMovies] = useState<IMovieAdapted[]>([])

  return (
    <MoviesContext.Provider
      value={{
        searchedMovies,
        setSearchedMovies,
        selectedMovies,
        setSelectedMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

export function useMoviesContext() {
  const context = useContext(MoviesContext)

  if (!context) {
    throw new Error('useMoviesContext must be used within a MoviesProvider')
  }

  return context
}
