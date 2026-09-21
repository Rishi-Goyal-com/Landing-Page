import { Reveal } from '@/components/reveal'
import { SectionShell } from '@/components/section-shell'
import { skillCategories } from '@/data/skills'

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <Reveal>
        <p className="text-sm font-semibold tracking-widest text-gradient uppercase">
          What I work with
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Skills &amp; Tech Stack</h2>
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {skillCategories.map((category, categoryIndex) => (
          <Reveal key={category.title} delay={categoryIndex * 100}>
            <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:border-transparent hover:glow-ring"
                >
                  <skill.icon className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  {skill.name}
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
