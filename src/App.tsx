import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { ScrollCharacter } from '@/components/scroll-character'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SiteNav } from '@/components/site-nav'
import { SkillsSection } from '@/components/skills-section'
import { useScrollProgress } from '@/hooks/use-scroll-progress'

function App() {
  const scrollProgress = useScrollProgress()

  // Color-grade the same photo from a cool, bright daytime look to a warm
  // golden-hour look as the page scrolls, instead of swapping to a different
  // photo. sepia's target hue (~35-40°) already lands close to warm evening
  // light, so hue-rotate is dropped entirely rather than fighting sepia's
  // natural direction, and brightness/contrast lean toward a moodier look.
  const dayToSunsetFilter = [
    `brightness(${1 - 0.32 * scrollProgress})`,
    `saturate(${1 + 0.5 * scrollProgress})`,
    `sepia(${0.5 * scrollProgress})`,
    `contrast(${1 + 0.22 * scrollProgress})`,
  ].join(' ')

  return (
    <div className="relative isolate min-h-screen text-foreground">
      <img
        src="/images/office.jpg"
        alt=""
        aria-hidden="true"
        style={{ filter: dayToSunsetFilter }}
        className="fixed inset-0 -z-10 h-full w-full object-cover object-center transition-[filter] duration-150 ease-out"
      />
      <div
        aria-hidden="true"
        style={{ opacity: scrollProgress }}
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_65%_40%_at_50%_72%,rgba(246,135,9,0.28),rgba(226,94,43,0.14)_45%,transparent_75%)] transition-opacity duration-150 ease-out"
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-background/10 via-background/15 to-background" />

      <SiteNav />
      <ScrollCharacter />
      <SiteHeader />
      <main>
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
