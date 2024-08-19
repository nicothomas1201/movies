import { IMovieAdapted, IMoviesAdapted } from '@/models/movies'
import { MovieItem } from './MovieItem'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface Props {
  movies: IMoviesAdapted['results']
  currentMoviesSelect: IMovieAdapted[]
  setCurrentMoviesSelect: Dispatch<SetStateAction<IMovieAdapted[]>>
}

export function MovieList({
  movies,
  currentMoviesSelect,
  setCurrentMoviesSelect,
}: Props) {
  const [disabledAllChecks, setDisabledAllChecks] = useState(false)

  useEffect(() => {
    setDisabledAllChecks(currentMoviesSelect.length >= 3)
  }, [currentMoviesSelect])

  const addMovie = (movie: IMovieAdapted, toDelete: boolean) => {
    if (!toDelete) {
      setCurrentMoviesSelect((prev) => [...prev, movie])
    } else {
      setCurrentMoviesSelect((prev) =>
        prev.filter((item) => item.id !== movie.id),
      )
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
