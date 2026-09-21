import { useEffect, useState } from 'react'

/** Returns how far the page has been scrolled, from 0 (top) to 1 (bottom). */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const next = scrollable > 0 ? window.scrollY / scrollable : 0
      setProgress(Math.min(1, Math.max(0, next)))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return progress
}
