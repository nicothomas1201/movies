import { searchMovie } from '@/services/search-movie'
import { IMovieRepository } from '../interfaces'

export const moviesAdapter: IMovieRepository = {
  searchMovie: async (query) => {
    return await searchMovie(query)
  },
}
