import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  return (
    <header
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32 text-center"
    >
      <div className="relative z-10 flex flex-col items-center gap-6">
        <a
          href="https://www.linkedin.com/in/rishigoyal1/"
          target="_blank"
          rel="noreferrer"
          className="glow-ring h-28 w-28 overflow-hidden rounded-full border-2 border-white/20"
        >
          <img
            src="/images/rishi.jpg"
            alt="Rishi Goyal"
            className="h-full w-full object-cover"
          />
        </a>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-white sm:text-5xl [filter:drop-shadow(0_0_10px_rgba(255,255,255,0.95))_drop-shadow(0_0_28px_rgba(255,255,255,0.85))_drop-shadow(0_0_60px_rgba(255,255,255,0.6))]">
            Hi, I'm <span className="text-gradient">Rishi Goyal</span>
          </h1>
          <p className="text-base text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] sm:text-lg">
            Web Developer at ARIES · AI Student at Centennial College
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            size="lg"
            nativeButton={false}
            render={<a href="#projects" />}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            nativeButton={false}
            render={<a href="#contact" />}
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex items-center gap-5 pt-4 text-white/60">
          <a
            href="https://www.linkedin.com/in/rishigoyal1/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:rishi_goyal2003@outlook.com"
            aria-label="Email"
            className="transition-colors hover:text-white"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </header>
  )
}
