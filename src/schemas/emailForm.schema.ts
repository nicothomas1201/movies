import { z } from 'zod'

export const emailFormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .max(40),
})

export type TEmailForm = z.infer<typeof emailFormSchema>
