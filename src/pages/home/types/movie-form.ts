import { z } from 'zod'
import { movieFormSchema } from '../schemas/movieForm.schema'

export type TMovieForm = z.infer<typeof movieFormSchema>
