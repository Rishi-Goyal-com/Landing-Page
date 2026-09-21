import type { ReactNode } from 'react'

export function SectionShell({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-background/55 p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4),0_0_45px_-8px_rgba(255,255,255,0.2)] backdrop-blur-2xl sm:p-10">
        {children}
      </div>
    </section>
  )
}
