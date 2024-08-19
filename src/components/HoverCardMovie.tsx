import { IMovieAdapted } from '@/models/movies'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Button } from './ui/button'

type MovieType = {
  id: IMovieAdapted['id']
  title: IMovieAdapted['title']
  overview: IMovieAdapted['overview']
  poster_path?: IMovieAdapted['poster_path']
}

interface Props {
  movie: MovieType
}

export function HoverCardMovie({ movie }: Props) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="link"
          className="text-4xl font-extrabold tracking-tight lg:text-5xl"
        >
          {movie.title}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="max-w-[500px] w-full mt-5">
        <div className="flex gap-2">
          <div className="w-full overflow-hidden rounded-lg">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
          </div>
          <p className="w-auto leading-7">{movie.overview}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
