import { IMovieRepository } from './interfaces'
import { moviesAdapter } from './adapters/movies.adapter'

function createMovieRepository(adapter: IMovieRepository): IMovieRepository {
  return {
    async searchMovie(query: string) {
      return await adapter.searchMovie(query)
    },
  }
}

export const moviesRepository = createMovieRepository(moviesAdapter)
