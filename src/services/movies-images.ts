import { IMovieImages } from '@/models/images/interfaces'
import { api } from './api'

export async function getImagesByMovieId(
  movieId: number,
): Promise<IMovieImages> {
  const response = await api.get(`/movie/${movieId}/images`)

  return response.data
}
