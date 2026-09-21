import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'
import { SectionShell } from '@/components/section-shell'
import { Badge } from '@/components/ui/badge'
import { experience } from '@/data/experience'

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <Reveal>
        <p className="text-sm font-semibold tracking-widest text-gradient uppercase">
          Where I've been
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Experience</h2>
      </Reveal>

      <div className="relative mt-12 pl-8">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
          className="absolute inset-y-0 left-0 w-px bg-border/60"
        />

        <ol className="space-y-10">
          {experience.map((entry, index) => (
            <Reveal key={`${entry.org}-${entry.role}`} delay={index * 100} className="relative">
              {entry.current ? (
                <span className="absolute top-1.5 -left-[calc(2rem+5px)] flex size-2.5">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-cyan-400"
                    animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
                  />
                  <span className="relative inline-flex size-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                </span>
              ) : (
                <span
                  className="absolute top-1.5 -left-[calc(2rem+5px)] size-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                  aria-hidden
                />
              )}
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold">{entry.role}</h3>
                {entry.current && (
                  <Badge className="border-none bg-gradient-to-r from-cyan-400 to-violet-400 text-background">
                    Current
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {entry.org} · {entry.location}
              </p>
              <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground/80 uppercase">
                {entry.period}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionShell>
  )
}
