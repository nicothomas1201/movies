import { IMovieAdapted, IMoviesAdapted } from '@/models/movies'
import { MovieItem } from './MovieItem'
import { useMoviesContext } from '@/context/movies.contexts'
import { useEffect, useState } from 'react'

interface Props {
  movies: IMoviesAdapted['results']
}

export function MovieList({ movies }: Props) {
  const [disabledAllChecks, setDisabledAllChecks] = useState(false)
  const { setSelectedMovies, selectedMovies } = useMoviesContext()

  useEffect(() => {
    setDisabledAllChecks(selectedMovies.length >= 3)
  }, [selectedMovies])

  const addMovie = (movie: IMovieAdapted, toDelete: boolean) => {
    if (!toDelete) {
      setSelectedMovies((prev) => [...prev, movie])
    } else {
      setSelectedMovies((prev) => prev.filter((item) => item.id !== movie.id))
    }
  }
  return (
    <ul className="p-0 m-0 list-none ">
      {movies.map((movie) => (
        <MovieItem
          disabled={disabledAllChecks}
          key={movie.id}
          movie={movie}
          addMovie={addMovie}
        />
      ))}
    </ul>
  )
}
