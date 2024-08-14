import { config } from '@/config'
import { IMovieImagesRepository } from '../interfaces'
import { getImagesByMovieId } from '@/services'

export const movieImagesAdapter: IMovieImagesRepository = {
  getLogoPath: async (movieId) => {
    const images = await getImagesByMovieId(movieId)

    return config.apiImages + '/original' + images.logos[0].file_path
  },
}
