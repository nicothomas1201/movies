import { IMovieRepository } from './interfaces'
import { moviesAdapter } from './adapters/movies.adapter'

function createMovieRepository(adapter: IMovieRepository): IMovieRepository {
  return {
    async searchMovie(query: string) {
      return await adapter.searchMovie(query)
    },
    async getMovieById(movieId) {
      return await adapter.getMovieById(movieId)
    },
  }
}

export const moviesRepository = createMovieRepository(moviesAdapter)
