import { getMovieById, searchMovie } from '@/services/search-movie'
import { IMovieRepository } from '../interfaces'

export const moviesAdapter: IMovieRepository = {
  searchMovie: async (query) => {
    return await searchMovie(query)
  },
  getMovieById: async (movieId) => {
    const data = await getMovieById(movieId)

    // En este punto el IMovie es igual al IMovieAdapted, por eso no modificamos la informacion
    return data
  },
}
