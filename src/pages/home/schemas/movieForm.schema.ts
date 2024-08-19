import { z } from 'zod'

export const movieFormSchema = z.object({
  movieName: z
    .string()
    .min(1, {
      message: 'Movie name is required',
    })
    .max(100),
})
