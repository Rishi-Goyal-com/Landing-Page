import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, ZoomIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Reveal } from '@/components/reveal'
import { SectionShell } from '@/components/section-shell'
import { projects } from '@/data/projects'

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 90, damping: 18 } },
}

export function ProjectsSection() {
  const [openImage, setOpenImage] = useState<string | null>(null)

  return (
    <SectionShell id="projects">
      <Reveal>
        <p className="text-sm font-semibold tracking-widest text-gradient uppercase">
          Selected work
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Recent Projects</h2>
      </Reveal>

      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={cardItem} whileHover={{ y: -8 }}>
            <Card className="group overflow-hidden border-border/60 transition-colors duration-300 hover:border-transparent hover:glow-ring">
              <button
                type="button"
                onClick={() => setOpenImage(project.full)}
                className="relative block cursor-zoom-in overflow-hidden"
              >
                <img
                  src={project.thumb}
                  alt={project.title}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="size-6 text-white" />
                </div>
              </button>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary underline underline-offset-4"
                >
                  {project.linkLabel}
                  <ExternalLink className="size-3.5" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Reveal className="mt-10">
        <motion.span className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            nativeButton={false}
            render={
              <a
                href="https://www.linkedin.com/in/rishigoyal1/"
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            LinkedIn Profile
          </Button>
        </motion.span>
      </Reveal>

      <Dialog open={openImage !== null} onOpenChange={(open) => !open && setOpenImage(null)}>
        <DialogContent className="sm:max-w-3xl">
          <DialogTitle className="sr-only">Project screenshot</DialogTitle>
          <AnimatePresence mode="wait">
            {openImage && (
              <motion.img
                key={openImage}
                src={openImage}
                alt="Project screenshot"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                className="w-full rounded-md"
              />
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </SectionShell>
  )
}
