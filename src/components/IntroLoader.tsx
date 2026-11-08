import { useEffect, useState } from 'react'

interface LetterItem {
  char: string
  x: number
  delay: string
}

const LETTERS: LetterItem[] = [
  { char: 'M', x: 132, delay: '0s' },
  { char: 'U', x: 232, delay: '0.12s' },
  { char: 'H', x: 334, delay: '0.24s' },
  { char: 'A', x: 434, delay: '0.36s' },
  { char: 'R', x: 532, delay: '0.48s' },
  { char: 'I', x: 612, delay: '0.60s' },
  { char: 'T', x: 706, delay: '0.72s' },
  { char: 'S', x: 804, delay: '0.84s' },
]

interface IntroLoaderProps {
  onComplete?: () => void
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const skipLoader =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).has('skip')

  const [isFading, setIsFading] = useState(skipLoader)
  const [isMounted, setIsMounted] = useState(!skipLoader)

  useEffect(() => {
    if (skipLoader) {
      onComplete?.()
      return
    }

    // Lock body scrolling during intro animation
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Check prefers-reduced-motion for accessibility
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    // Letter animations complete and shrink ends at 3.0s (2.4s + 0.6s)
    const fadeTimerDuration = prefersReducedMotion ? 500 : 3000
    const unmountDelay = prefersReducedMotion ? 400 : 700

    const fadeTimer = setTimeout(() => {
      setIsFading(true)
      // Restore scroll as the page begins revealing
      document.body.style.overflow = originalOverflow
    }, fadeTimerDuration)

    const unmountTimer = setTimeout(() => {
      setIsMounted(false)
      onComplete?.()
    }, fadeTimerDuration + unmountDelay)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(unmountTimer)
      document.body.style.overflow = originalOverflow
    }
  }, [onComplete])

  if (!isMounted) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#FAFAF8] transition-opacity duration-700 ease-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Memuat MUHARITS"
    >
      <div className="w-full flex justify-center px-4">
        <svg
          viewBox="0 0 1000 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="intro-loader-svg"
          role="img"
          aria-label="MUHARITS"
        >
          {LETTERS.map(({ char, x, delay }) => (
            <g key={`${char}-${x}`}>
              {/* Outline stroke animation */}
              <text
                className="intro-loader-letter intro-loader-outline"
                x={x}
                y="100"
                style={{ '--d': delay } as React.CSSProperties}
              >
                {char}
              </text>
              {/* Fill letter animation */}
              <text
                className="intro-loader-letter intro-loader-fill"
                x={x}
                y="100"
                style={{ '--d': delay } as React.CSSProperties}
              >
                {char}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}
