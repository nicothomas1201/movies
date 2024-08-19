import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { emailFormSchema, TEmailForm } from '@/schemas'

interface Props {
  onSubmit: (data: TEmailForm) => void
  SendButton: React.ReactNode
}

export function EmailForm({ onSubmit, SendButton }: Props) {
  const form = useForm<TEmailForm>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: '',
    },
  })

  const handleSubmit = (data: TEmailForm) => {
    onSubmit(data)
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Email</FormLabel>
              <div className="flex gap-2">
                <FormControl>
                  <Input
                    className="flex-1"
                    type="email"
                    placeholder="youremail@thanks.com"
                    {...field}
                  />
                </FormControl>
                {SendButton}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </FormProvider>
  )
}
