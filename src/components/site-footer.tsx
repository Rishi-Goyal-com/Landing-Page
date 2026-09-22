import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Rishi Goyal. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <motion.a
            href="https://www.linkedin.com/in/rishigoyal1/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2 }}
            className="transition-colors hover:text-foreground"
          >
            <FaLinkedin size={18} />
          </motion.a>
          <motion.a
            href="mailto:rishi_goyal2003@outlook.com"
            aria-label="Email"
            whileHover={{ scale: 1.2 }}
            className="transition-colors hover:text-foreground"
          >
            <FaEnvelope size={18} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
