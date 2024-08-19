import { movieImagesRepository } from '@/models/images'
import { IMovieAdapted } from '@/models/movies'
import { useEffect, useState } from 'react'
import { MovieLogo } from './MovieLogo'
import { MovieCardOptions } from './MovieCardOptions'
import { useMoviesContext } from '@/context'

interface Props {
  movie: IMovieAdapted
}

export function MovieCard({ movie }: Props) {
  const [logoPath, setLogoPath] = useState('')
  const { deleteMovieSelected } = useMoviesContext()

  useEffect(() => {
    movieImagesRepository.getLogoPath(movie.id).then((path) => {
      setLogoPath(path)
    })
  }, [movie.id])

  return (
    <div className="movie-card">
      <MovieLogo path={logoPath} alt={movie.title} />

      <div className="flex flex-col flex-1">
        <h3 className="w-full text-sm">{movie.title}</h3>
      </div>

      <MovieCardOptions onDelete={() => deleteMovieSelected(movie.id)} />
    </div>
  )
}
