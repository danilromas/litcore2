'use client'

import { useEffect, useState } from 'react'

/**
 * Луч сканирует страницу при скролле (motion-спека СПЕКТР).
 * Тонкая горизонтальная электрик-линия + мягкое свечение, положение = прогресс скролла.
 */
export function ScanBeam() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      <div
        className="absolute inset-x-0 h-px"
        style={{
          top: `${10 + progress * 80}%`,
          background:
            'linear-gradient(90deg, transparent, color-mix(in srgb, var(--cyan) 90%, transparent) 30%, var(--electric) 50%, color-mix(in srgb, var(--cyan) 90%, transparent) 70%, transparent)',
          boxShadow: '0 0 24px 2px color-mix(in srgb, var(--electric) 45%, transparent)',
          opacity: 0.55,
        }}
      />
    </div>
  )
}
