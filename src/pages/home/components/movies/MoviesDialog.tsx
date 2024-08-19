import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { IMovieAdapted, IMoviesAdapted } from '@/models/movies'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MovieList } from './MovieList'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { useMoviesContext } from '@/context/movies.contexts'

interface Props {
  searchName: string
  movies: IMoviesAdapted
  open: boolean
  setOpen: (open: boolean) => void
  onSave: (movies: IMovieAdapted[]) => void
}

export function MoviesDialog({
  movies,
  searchName,
  setOpen,
  open,
  onSave,
}: Props) {
  const [currentMoviesSelect, setCurrentMoviesSelect] = useState<
    IMovieAdapted[]
  >([])
  const { selectedMovies } = useMoviesContext()

  const handleSave = () => {
    onSave(currentMoviesSelect)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) {
      setCurrentMoviesSelect([])
    } else {
      setCurrentMoviesSelect(selectedMovies)
    }
  }, [open])

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
          <MovieList
            movies={movies.results}
            currentMoviesSelect={currentMoviesSelect}
            setCurrentMoviesSelect={setCurrentMoviesSelect}
          />
        </ScrollArea>

        <DialogFooter>
          <Button onClick={handleSave} variant="secondary" size="lg">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
