import { useState } from 'react'
import { moviesRepository } from '@/models/movies'
import { useMoviesContext } from '@/context/movies.contexts'
import {
  MovieCardDefault,
  MovieCardSkeleton,
  MovieCard,
  MoviesDialog,
  MovieForm,
} from './components'
import { TMovieForm } from './types'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
import { useLocation } from 'wouter'
import { useAi as Ai, mistral } from '@/services/ai'
import { config } from '@/config'
import { useRecMovieStore } from '@/stores'
import { ReloadIcon } from '@radix-ui/react-icons'

export function HomePage() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [movieName, setMovieName] = useState('')

  const { setRecMovie } = useRecMovieStore()

  const [, setLocation] = useLocation()

  const {
    searchedMovies: movies,
    setSearchedMovies: setMovies,
    selectedMovies,
    setSelectedMovies,
  } = useMoviesContext()

  const searchMovie = async (movieName: string) => {
    const data = await moviesRepository.searchMovie(movieName)
    setMovieName(movieName)

    if (data.results.length !== 0) {
      setOpen(true)
      setMovies(data)
    }
  }

  const emptyMovies = Array(3 - selectedMovies.length).fill(0)

  const handleFormSubmit = (data: TMovieForm) => {
    if (selectedMovies.length === 3) {
      toast({
        title: 'You can only select up to 3 movies',
        description: 'Please remove a movie to add a new one',
      })
      return
    }

    searchMovie(data.movieName)
  }

  const handleContinue = async () => {
    try {
      setLoading(true)
      const response = await Ai(
        mistral(config.aiApiKey),
        `Recommend me just one movie if my top three favorite movies are ${selectedMovies
          .map((movie) => movie.title)
          .join(
            ', ',
          )}. Return the response in the following JSON format: { "title": "Movie Title", "description": "A brief description of why you're recommending this movie.", "tmdb_id": "TMDB Movie ID" }
  `,
      )
      setLoading(false)

      const jsonMatch = response.match(/\{[\s\S]*\}/)

      if (jsonMatch) {
        const recMovie = JSON.parse(jsonMatch[0])
        console.log(recMovie)
        setRecMovie(recMovie)
        setLocation('~/movie/' + recMovie.tmdb_id)
      } else {
        console.log('No match')
      }
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  return (
    <div>
      <MoviesDialog
        open={open}
        setOpen={setOpen}
        movies={movies}
        searchName={movieName}
        onSave={(movies) => setSelectedMovies(movies)}
      />

      <div className="flex items-center justify-center w-full h-full">
        <div className="w-[350px]">
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight scroll-m-20 lg:text-4xl">
            Discover your next favorite movie
          </h1>

          <MovieForm onSubmit={handleFormSubmit} />

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
            {selectedMovies.length === 3 ? (
              <Button
                disabled={loading}
                size="lg"
                className="flex items-center gap-2 mt-4"
                onClick={handleContinue}
              >
                {loading ? (
                  <>
                    <span className="animate-pulse">Loading...</span>
                    <ReloadIcon className="w-4 h-4 mr-2 animate-spin" />
                  </>
                ) : (
                  'Continue'
                )}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
