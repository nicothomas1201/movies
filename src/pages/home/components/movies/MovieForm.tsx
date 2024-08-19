import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { movieFormSchema } from '@home/schemas/movieForm.schema'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { TMovieForm } from '@home/types'

interface Props {
  onSubmit: (data: TMovieForm) => void
}

export function MovieForm({ onSubmit }: Props) {
  const form = useForm<TMovieForm>({
    resolver: zodResolver(movieFormSchema),
    defaultValues: {
      movieName: '',
    },
  })

  const handleSubmit = (data: TMovieForm) => {
    onSubmit(data)
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="movieName"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  type="text"
                  placeholder="Write your top 3 movies..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">search</Button>
      </form>
    </FormProvider>
  )
}
