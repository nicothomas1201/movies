import { IMovieAdapted } from '@/models/movies'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'
import { useMoviesContext } from '@/context/movies.contexts'

interface Props {
  movie: IMovieAdapted
  disabled?: boolean
  addMovie: (movie: IMovieAdapted, toDelete: boolean) => void
}

export function MovieItem({ movie, disabled = false, addMovie }: Props) {
  const { selectedMovies } = useMoviesContext()
  const isSelected = selectedMovies.some((item) => item.id === movie.id)

  const [checked, setChecked] = useState(isSelected)

  const handleChange = (value: boolean) => {
    setChecked(value)

    if (value) {
      addMovie(movie, false)
    } else {
      addMovie(movie, true)
    }
  }

  return (
    <li className="flex items-center gap-2 p-2 overflow-hidden">
      <Checkbox
        disabled={checked ? false : disabled}
        checked={checked}
        onCheckedChange={handleChange}
      />
      <h3 className="text-muted-foreground">{movie.title}</h3>
      {/* <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-10 h-10 rounded-lg"
      />
      <div className="flex flex-col flex-1">
        <h3 className="w-full">{movie.title}</h3>
        <h4 className="text-muted-foreground">test</h4>
      </div> */}
    </li>
  )
}
