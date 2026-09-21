import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 16 },
  },
}

export function SiteHeader() {
  return (
    <header
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <motion.div
          variants={item}
          animate={{ y: [0, -10, 0] }}
          transition={{ y: { repeat: Infinity, duration: 5, ease: 'easeInOut' } }}
        >
          <a
            href="https://www.linkedin.com/in/rishigoyal1/"
            target="_blank"
            rel="noreferrer"
            className="glow-ring block h-28 w-28 overflow-hidden rounded-full border-2 border-white/20"
          >
            <img
              src="/images/rishi.jpg"
              alt="Rishi Goyal"
              className="h-full w-full object-cover"
            />
          </a>
        </motion.div>

        <motion.div variants={item} className="space-y-3">
          <h1 className="text-3xl font-bold text-white [filter:drop-shadow(0_0_10px_rgba(255,255,255,0.95))_drop-shadow(0_0_28px_rgba(255,255,255,0.85))_drop-shadow(0_0_60px_rgba(255,255,255,0.6))] sm:text-5xl">
            Hi, I'm <span className="text-gradient">Rishi Goyal</span>
          </h1>
          <p className="text-base text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] sm:text-lg">
            Web Developer at ARIES · AI Student at Centennial College
          </p>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" nativeButton={false} render={<a href="#projects" />}>
              View My Work
            </Button>
          </motion.span>
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" nativeButton={false} render={<a href="#contact" />}>
              Get in Touch
            </Button>
          </motion.span>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-5 pt-4 text-white/60">
          <motion.a
            href="https://www.linkedin.com/in/rishigoyal1/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, color: '#ffffff' }}
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:rishi_goyal2003@outlook.com"
            aria-label="Email"
            whileHover={{ scale: 1.2, color: '#ffffff' }}
          >
            <FaEnvelope size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </header>
  )
}
