import { animate, motion, useMotionValue, type AnimationPlaybackControls } from 'framer-motion'
import { useEffect, useRef } from 'react'

const MAX_ROTATE = 32
const DRAG_SENSITIVITY = 0.4
const CLICK_THRESHOLD_PX = 6

// Widths (px) for a simple procedural barcode pattern.
const BARCODE_BARS = [2, 1, 1, 3, 1, 2, 1, 4, 2, 1, 1, 3, 2, 1, 4, 1, 2, 1, 3, 1, 2, 1]

export function HangingIdCard() {
  const rotate = useMotionValue(0)
  const idleControls = useRef<AnimationPlaybackControls | null>(null)
  const dragState = useRef({ dragging: false, startX: 0, startRotate: 0, moved: 0 })

  const startIdleSway = () => {
    idleControls.current?.stop()
    idleControls.current = animate(rotate, [0, 6, -6, 4, -4, 0], {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    })
  }

  useEffect(() => {
    startIdleSway()
    return () => idleControls.current?.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    idleControls.current?.stop()
    dragState.current = { dragging: true, startX: e.clientX, startRotate: rotate.get(), moved: 0 }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragState.current.dragging) return
    const deltaX = e.clientX - dragState.current.startX
    dragState.current.moved = Math.max(dragState.current.moved, Math.abs(deltaX))
    // A card hanging from a top pivot needs a *negative* CSS rotation to
    // swing its bottom to the right (positive/clockwise rotation swings a
    // downward-hanging object's bottom to the left) — so this is inverted
    // relative to deltaX to make dragging right actually move it right.
    const next = dragState.current.startRotate - deltaX * DRAG_SENSITIVITY
    rotate.set(Math.max(-MAX_ROTATE, Math.min(MAX_ROTATE, next)))
  }

  function handlePointerUp() {
    const wasClick = dragState.current.moved < CLICK_THRESHOLD_PX
    dragState.current.dragging = false

    animate(rotate, 0, { type: 'spring', stiffness: 140, damping: 7, mass: 0.9 }).then(() => {
      startIdleSway()
    })

    if (wasClick) {
      window.open('https://www.linkedin.com/in/rishigoyal1/', '_blank', 'noreferrer')
    }
  }

  return (
    <div className="flex flex-col items-center select-none">
      <motion.div
        style={{ rotate, transformOrigin: 'top center' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="flex cursor-grab flex-col items-center active:cursor-grabbing"
      >
        {/* Lanyard strap */}
        <div className="relative h-56 w-3.5 overflow-hidden rounded-b-sm bg-gradient-to-r from-zinc-700 via-zinc-900 to-zinc-700 shadow-[inset_2px_0_2px_rgba(255,255,255,0.2),inset_-2px_0_2px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-x-0 top-0 h-px bg-white/30" />
        </div>

        {/* Metal clip */}
        <div className="-mt-0.5 h-3 w-5 rounded-[2px] border border-white/40 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-300 shadow-sm" />
        <div className="-mt-1 size-1.5 rounded-full border border-gray-400 bg-gray-200" />

        {/* Card */}
        <div className="mt-1 w-44 overflow-hidden rounded-lg border border-black/10 bg-white shadow-2xl shadow-black/50">
          <div className="h-2 bg-gradient-to-r from-zinc-700 to-zinc-900" />

          <div className="flex flex-col items-center px-4 pt-4 pb-4">
            <div className="aspect-[3/4] w-20 overflow-hidden rounded-sm border border-gray-200 bg-gray-100 shadow-inner">
              <img src="/images/rishi.jpg" alt="Rishi Goyal" className="h-full w-full object-cover" />
            </div>

            <p className="mt-3 text-sm font-bold text-gray-900">Rishi Goyal</p>
            <p className="text-[11px] text-gray-500">Web Developer</p>

            <div className="mt-2.5 w-full border-t border-dashed border-gray-200 pt-2 text-center text-[9px] tracking-widest text-gray-400 uppercase">
              ID · RG-2026
            </div>

            <div className="mt-2 flex h-5 items-stretch gap-[1px]">
              {BARCODE_BARS.map((w, i) => (
                <div key={i} style={{ width: `${w}px` }} className="bg-gray-800" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
