import { useState } from 'react'
import { FaEnvelope, FaMobileAlt } from 'react-icons/fa'
import { CheckCircle2, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Reveal } from '@/components/reveal'
import { SectionShell } from '@/components/section-shell'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactSection() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!FORMSPREE_ID) {
      console.warn(
        'VITE_FORMSPREE_ID is not set — create a Formspree form and add its ID to .env to enable the contact form.',
      )
      setStatus('error')
      return
    }

    const form = event.currentTarget
    setStatus('sending')

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })

      if (response.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <SectionShell id="contact">
      <Reveal>
        <p className="text-sm font-semibold tracking-widest text-gradient uppercase">
          Let's talk
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Get In Touch</h2>
      </Reveal>

      <Reveal delay={100} className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
        <form onSubmit={handleSubmit} className="grid gap-4 sm:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input type="text" name="name" placeholder="Name" required />
            <Input type="email" name="email" placeholder="Email" required />
          </div>
          <Textarea name="message" placeholder="Message" rows={4} required />
          <Button type="submit" disabled={status === 'sending'} className="w-fit">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </Button>
          {status === 'sent' && (
            <p className="flex items-center gap-2 text-sm text-emerald-400">
              <CheckCircle2 className="size-4" />
              Thanks for reaching out — I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-center gap-2 text-sm text-destructive">
              <XCircle className="size-4" />
              Something went wrong sending your message. Please try again later.
            </p>
          )}
        </form>
        <ul className="space-y-5">
          <li>
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 text-background">
                <FaMobileAlt size={14} />
              </span>
              Phone
            </h3>
            <p className="mt-1.5 pl-10 text-sm text-muted-foreground">416-788-4476</p>
          </li>
          <li>
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 text-background">
                <FaEnvelope size={14} />
              </span>
              Email
            </h3>
            <a
              href="mailto:rishi_goyal2003@outlook.com"
              className="mt-1.5 block max-w-full truncate pl-10 text-sm text-primary underline underline-offset-4"
            >
              rishi_goyal2003@outlook.com
            </a>
          </li>
        </ul>
      </Reveal>
    </SectionShell>
  )
}
