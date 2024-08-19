import { IMovie, IMovieResponse } from '@/models/movies'
import { api } from './api'

export async function searchMovie(query: string): Promise<IMovieResponse> {
  const response = await api.get('/search/movie', {
    params: {
      query,
    },
  })

  return response.data
}

export async function getMovieById(movieId: number): Promise<IMovie> {
  const response = await api.get(`/movie/${movieId}`)

  return response.data
}
