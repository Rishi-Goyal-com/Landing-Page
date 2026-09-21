import { GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { SectionShell } from '@/components/section-shell'

const facts = [
  { icon: GraduationCap, label: 'Software Eng. Technology – AI, Centennial College' },
  { icon: MapPin, label: 'Toronto, ON' },
  { icon: Sparkles, label: 'Focused on full-stack development & applied ML' },
]

export function AboutSection() {
  return (
    <SectionShell id="about">
      <Reveal>
        <p className="text-sm font-semibold tracking-widest text-gradient uppercase">
          Get to know me
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">About</h2>
      </Reveal>

      <div className="mt-10 grid gap-10 sm:grid-cols-[minmax(0,1fr)_260px] sm:items-start">
        <Reveal delay={100}>
          <p className="text-muted-foreground leading-relaxed">
            Hi, I'm Rishi Goyal, a Software Engineering Technology – AI student
            at Centennial College passionate about building user-centered
            digital experiences and intelligent systems. With a strong
            foundation in machine learning, UI/UX design, and full-stack
            development, I thrive at the intersection of design and technology.
            Whether it's crafting accessible interfaces in Figma, developing
            responsive apps in React, or deploying AI-driven tools in the
            cloud, I enjoy turning ideas into impactful, real-world solutions.
            Explore my projects to see how I combine creativity, code, and
            curiosity to solve problems that matter.
          </p>
          <Button
            className="mt-6"
            nativeButton={false}
            render={<a href="/Resume.pdf" target="_blank" rel="noreferrer" />}
          >
            Download Resume
          </Button>
        </Reveal>

        <Reveal delay={200} className="rounded-2xl border border-border/60 bg-card/80 p-5 backdrop-blur-sm">
          <ul className="space-y-4">
            {facts.map((fact) => (
              <li key={fact.label} className="flex items-start gap-3 text-sm">
                <fact.icon className="mt-0.5 size-4 shrink-0 text-cyan-400" />
                <span className="text-muted-foreground">{fact.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionShell>
  )
}
