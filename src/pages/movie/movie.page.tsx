import { Button } from '@/components/ui/button'
import { MovieLayout } from '@/layouts'
import { IMovieAdapted, moviesRepository } from '@/models/movies'
import { useEffect, useState } from 'react'
import { useParams } from 'wouter'
import { MovieRating } from './components'
import { EmailDialog } from '@/components/EmailDialog'

export function MoviePage() {
  const [open, setOpen] = useState(false)
  const [movie, setMovie] = useState<IMovieAdapted | null>(null)
  const params = useParams()

  useEffect(() => {
    if (Number(params.id)) {
      moviesRepository.getMovieById(Number(params.id)).then((data) => {
        setMovie(data)
      })
    }
  }, [params.id])

  const askEmail = () => {
    setOpen(true)
  }

  if (!movie) return null

  return (
    <MovieLayout>
      <EmailDialog open={open} setOpen={setOpen} />
      <div className="flex flex-col items-center w-full gap-2 mt-4 sm:items-start sm:flex-row sm:gap-5">
        <div className="max-w-[400px] items-start  overflow-hidden rounded-lg">
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="max-w-[500px]">
          <h1 className="text-3xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            {movie.title}
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {movie.overview}
          </p>
          <div className="my-3">
            <MovieRating ratingValue={askEmail} />
          </div>
          <div className="flex flex-col gap-2 my-6 sm:flex-row">
            <Button className="sm:flex-1" onClick={askEmail} size="lg">
              Add to watch list
            </Button>
            <Button
              className="sm:flex-1"
              onClick={askEmail}
              variant="secondary"
              size="lg"
            >
              Add to watched list
            </Button>
          </div>
        </div>
      </div>
    </MovieLayout>
  )
}
