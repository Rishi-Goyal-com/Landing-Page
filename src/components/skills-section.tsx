import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'
import { SectionShell } from '@/components/section-shell'
import { skillCategories } from '@/data/skills'

const badgeContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}

const badgeItem = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 200, damping: 18 } },
}

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
            <motion.div
              variants={badgeContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-wrap gap-2"
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={badgeItem}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="group flex items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1.5 text-sm transition-colors hover:border-transparent hover:glow-ring"
                >
                  <skill.icon className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  {skill.name}
                </motion.div>
              ))}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
