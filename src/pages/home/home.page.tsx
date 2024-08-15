import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { HomeLayout } from '@/layouts'
import { FormEvent, useState } from 'react'
import { moviesRepository } from '@/models/movies'
import { MoviesDialog } from '@/components/MoviesDialog'
import { useMoviesContext } from '@/context/movies.contexts'
import { MovieCard } from '@/components/MovieCard'
import { MovieCardSkeleton } from '@/components/MovieCardSkeleton'
import { MovieCardDefault } from '@/components/MovieCardDefault'

export function HomePage() {
  const [open, setOpen] = useState(false)
  const [movieName, setMovieName] = useState('')
  const {
    searchedMovies: movies,
    setSearchedMovies: setMovies,
    selectedMovies,
  } = useMoviesContext()

  const searchMovie = async (e: FormEvent) => {
    e.preventDefault()

    if (movieName === '') return

    const data = await moviesRepository.searchMovie(movieName)

    if (data.results.length !== 0) {
      setOpen(true)
      setMovies(data)
    }
  }

  const emptyMovies = Array(3 - selectedMovies.length).fill(0)

  return (
    <HomeLayout>
      <MoviesDialog
        open={open}
        setOpen={setOpen}
        movies={movies}
        searchName={movieName}
      />

      <div className="flex justify-center w-full">
        <div className="w-[350px] mt-16">
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight scroll-m-20 lg:text-4xl">
            Discover your next favorite movie
          </h1>

          <form onSubmit={searchMovie} className="flex gap-2">
            <Input
              type="text"
              value={movieName}
              onChange={(e) => setMovieName(e.currentTarget.value)}
              placeholder="Write your top 3 movies..."
            />
            <Button type="submit">search</Button>
          </form>

          <div className="flex flex-col gap-2 mt-6">
            {selectedMovies.length === 0 ? (
              <MovieCardDefault />
            ) : (
              selectedMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            )}
            {emptyMovies.map((_, index) => (
              <MovieCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
