import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { DialogPortal } from '@radix-ui/react-dialog'
import { EmailForm } from './EmailForm'
import { TEmailForm } from '@/schemas'
import { Button } from './ui/button'
import { PaperPlaneIcon, ReloadIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { useToast } from './ui/use-toast'
import emailjs from '@emailjs/browser'
import { config } from '@/config'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

export function EmailDialog({ open, setOpen }: Props) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (data: TEmailForm) => {
    try {
      setLoading(true)
      await emailjs.send(
        config.emailServiceId,
        config.emailTemplateId,
        {
          message: data.email,
        },
        config.emailPublicKey,
      )
      setLoading(false)
      toast({
        title: 'Thank you!',
        description: 'You will be the first to know when new features are live',
      })
      setOpen(false)
    } catch (err) {
      console.error(err)
      setLoading(false)
      toast({
        variant: 'destructive',
        title: 'Oops!',
        description: 'Something went wrong, please try again',
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Oops!</DialogTitle>
            <DialogDescription>
              Some features aren't live yet. Leave your email to be the first to
              know when they are
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-1">
            <EmailForm
              onSubmit={handleSubmit}
              SendButton={
                <Button
                  type="submit"
                  size="icon"
                  className="self-end"
                  disabled={loading}
                >
                  {loading ? (
                    <ReloadIcon className="animate-spin" />
                  ) : (
                    <>
                      <span className="sr-only">Send</span>
                      <PaperPlaneIcon />
                    </>
                  )}
                </Button>
              }
            />
          </div>
          <DialogFooter className="sm:justify-start">
            <span className="text-xs text-muted-foreground">
              Thank you my friend, for being interested in this little project,
              if you want to gieve me feedback or just say hi, you can reach me
              via{' '}
              <a
                className="underline text-primary"
                href="https://www.linkedin.com/in/nicolas-quintero-rodriguez-390531227/"
              >
                linkedin
              </a>
            </span>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
