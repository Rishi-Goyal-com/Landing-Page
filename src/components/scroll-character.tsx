import { motion } from 'framer-motion'
import { useActiveSection } from '@/hooks/use-active-section'
import { useScrollProgress } from '@/hooks/use-scroll-progress'

const captions: Record<string, string> = {
  top: "Hi, I'm Rishi. Scroll along with me!",
  about: 'A bit about me...',
  skills: "Here's what I build with.",
  experience: "Where I've worked...",
  projects: "Some things I've shipped.",
  contact: "Let's connect!",
}

const expressions: Record<string, string> = {
  top: '👋',
  about: '🙂',
  skills: '🤓',
  experience: '😎',
  projects: '🤩',
  contact: '🥳',
}

const RADIUS = 22
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export function ScrollCharacter() {
  const progress = useScrollProgress()
  const activeId = useActiveSection()

  return (
    <div className="pointer-events-none fixed right-3 bottom-3 z-40 sm:right-6 sm:bottom-6">
      {/* The caption bubble needs real screen space to its upper-left, which
          mobile layouts don't reliably have (it ends up overlapping page
          content) — so it only shows from `sm:` up. */}
      <motion.div
        key={`caption-${activeId}`}
        initial={{ opacity: 0, y: 8, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="absolute right-0 bottom-full mb-3 hidden w-56 rounded-2xl border border-white/10 bg-background/85 px-3 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-md sm:block"
      >
        {captions[activeId] ?? captions.top}
      </motion.div>

      <motion.div
        animate={{ y: [0, -5, 0], rotate: [-4, 4, -4] }}
        transition={{ repeat: Infinity, duration: 0.9, ease: 'easeInOut' }}
        className="relative flex size-14 items-center justify-center"
      >
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 52 52">
          <circle cx="26" cy="26" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
          <circle
            cx="26"
            cy="26"
            r={RADIUS}
            fill="none"
            stroke="url(#scroll-progress-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
            style={{ transition: 'stroke-dashoffset 150ms ease-out' }}
          />
          <defs>
            <linearGradient id="scroll-progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex size-10 items-center justify-center overflow-hidden rounded-full border-2 border-white/40 bg-gradient-to-br from-cyan-400 to-violet-400 shadow-lg shadow-black/30">
          <motion.span
            key={`face-${activeId}`}
            initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            className="text-xl leading-none"
          >
            {expressions[activeId] ?? expressions.top}
          </motion.span>
        </div>
      </motion.div>
    </div>
  )
}
