import { IMovieResponse } from '@/models/movies'
import { api } from './api'

export async function searchMovie(query: string): Promise<IMovieResponse> {
  const response = await api.get('/search/movie', {
    params: {
      query,
    },
  })

  return response.data
}
