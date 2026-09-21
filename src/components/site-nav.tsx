import { Button } from '@/components/ui/button'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function SiteNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="shrink-0 text-sm font-semibold tracking-wide">
          Rishi<span className="text-gradient">.dev</span>
        </a>
        <ul className="no-scrollbar flex gap-4 overflow-x-auto text-xs text-muted-foreground sm:gap-8 sm:text-sm">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button size="sm" className="shrink-0" nativeButton={false} render={<a href="#contact" />}>
          Get in Touch
        </Button>
      </div>
    </nav>
  )
}
