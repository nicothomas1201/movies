import { Wrapper } from '@/components/wrapper'
import { IMovieAdapted } from '@/models/movies'
import { HoverCardMovie } from '@/components/HoverCardMovie'

type MovieType = {
  id: IMovieAdapted['id']
  title: IMovieAdapted['title']
  overview: IMovieAdapted['overview']
  poster_path?: IMovieAdapted['poster_path']
}

export function WatchedMoviesPage() {
  const movies: MovieType[] = [
    {
      id: 573435,
      poster_path: '/oGythE98MYleE6mZlGs5oBGkux1.jpg',
      title: 'Bad Boys: Ride or Die',
      overview:
        'After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.',
    },
    {
      id: 9737,
      overview:
        "Marcus Burnett is a henpecked family man. Mike Lowrey is a footloose and fancy free ladies' man. Both Miami policemen, they have 72 hours to reclaim a consignment of drugs stolen from under their station's nose. To complicate matters, in order to get the assistance of the sole witness to a murder, they have to pretend to be each other.",
      poster_path: '/x1ygBecKHfXX4M2kRhmFKWfWbJc.jpg',
      title: 'Bad Boys',
    },
    {
      id: 13633,
      overview:
        "Mick O'Brien is a young Chicago street thug torn between a life of petty crime and the love of his girlfriend. But when the heist of a local drug dealer goes tragically wrong Mick is sentenced to a brutal juvenile prison where violence is a rite of passage and respect is measured in vengeance.",
      poster_path: '/5nHZ3wflOifKJMUcTCw0isKhmCv.jpg',
      title: 'Bad Boys',
    },
  ]

  return (
    <Wrapper width={700}>
      <div className="mb-4">
        <h1 className="mb-10 text-2xl font-extrabold tracking-tight text-center text-muted-foreground scroll-m-20 lg:text-2xl">
          Watched movies
        </h1>

        {/* TODO: this films will be fetching from our own server, for now, we'll harcod the data */}
        {/* Maybe we could use hover card to show the film poster and overview and just show the title in the list */}
        <div className="flex flex-col gap-8 max-w-[600px] m-auto items-start">
          {movies.map((movie) => (
            <HoverCardMovie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
