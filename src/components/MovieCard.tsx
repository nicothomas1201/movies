import { movieImagesRepository } from '@/models/images'
import { IMovieAdapted } from '@/models/movies'
import { useEffect, useState } from 'react'

interface Props {
  movie: IMovieAdapted
}

export function MovieCard({ movie }: Props) {
  const [logoPath, setLogoPath] = useState('')

  useEffect(() => {
    movieImagesRepository.getLogoPath(movie.id).then((path) => {
      setLogoPath(path)
    })
  }, [movie.id])
  return (
    <div className="flex items-center w-full gap-3 p-5 border rounded-md shadow-sm bg-card">
      <div className="flex items-center justify-center overflow-hidden rounded-full w-9 h-9">
        <img
          src={logoPath}
          alt={movie.title}
          className="object-cover align-middle"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="w-full text-sm">{movie.title}</h3>
      </div>
    </div>
  )
}
