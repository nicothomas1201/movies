import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { IMoviesAdapted } from '@/models/movies'
import { ScrollArea } from './ui/scroll-area'
import { MovieList } from './MovieList'

interface Props {
  searchName: string
  movies: IMoviesAdapted
  open: boolean
  setOpen: (open: boolean) => void
}

export function MoviesDialog({ movies, searchName, setOpen, open }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>All results for movie "{searchName}"</DialogTitle>
          <DialogDescription>
            Remember you only can select 3 movies
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-full max-h-80">
          <MovieList movies={movies.results} />
          {/* {movies?.results.map((movie) => (
            <div
              key={movie.id}
              className="flex items-center gap-2 p-2 overflow-hidden border border-blborder"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-10 h-10 rounded-lg"
              />
              <div className="flex flex-col flex-1">
                <h3 className="w-full">{movie.title}</h3>
                <h4 className="text-muted-foreground">test</h4>
              </div>
            </div>
          ))} */}
        </ScrollArea>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
