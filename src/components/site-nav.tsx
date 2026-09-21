import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function SiteNav() {
  const activeId = useActiveSection()
  const active = activeId === 'top' ? '' : `#${activeId}`

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="shrink-0 text-sm font-semibold tracking-wide">
          Rishi<span className="text-gradient">.dev</span>
        </a>
        <ul className="no-scrollbar flex gap-4 overflow-x-auto text-xs text-muted-foreground sm:gap-8 sm:text-sm">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className={cn(
                  'relative inline-block pb-1 transition-colors hover:text-foreground',
                  active === link.href && 'text-foreground',
                )}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
        <motion.span
          className="inline-block shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="sm" nativeButton={false} render={<a href="#contact" />}>
            Get in Touch
          </Button>
        </motion.span>
      </div>
    </motion.nav>
  )
}
