import { IMovieImagesRepository } from './interfaces'
import { movieImagesAdapter } from './adapters/images.adapter'

function createMovieImagesRepository(adapter: IMovieImagesRepository) {
  return {
    async getLogoPath(movieId: number) {
      return await adapter.getLogoPath(movieId)
    },
  }
}

export const movieImagesRepository =
  createMovieImagesRepository(movieImagesAdapter)
