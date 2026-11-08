import { useState, useEffect, useRef } from 'react'
import { Home, Briefcase, User, Mail } from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'
import { profileData } from '../data/profile'

const navItems = [
  { name: 'Home', href: '#hero', id: 'hero', icon: Home },
  { name: 'About', href: '#about', id: 'about', icon: User },
  { name: 'Work', href: '#work', id: 'work', icon: Briefcase },
  { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('hero')

  // Ref to prevent scroll listener from overriding the target during click animation
  const isClickScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef<number | null>(null)

  // Find index of the currently active section for the sliding pill
  const activeIndex = navItems.findIndex((item) => item.id === activeSection)

  // Track active section as user scrolls through landing page
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'work', 'contact']

    const handleScroll = () => {
      // If a navigation click triggered the scroll, let the pill stay smoothly on the target
      if (isClickScrollingRef.current) return

      // Bottom of page activates contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection('contact')
        return
      }

      const triggerPoint = window.innerHeight * 0.35
      let current = 'hero'

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= triggerPoint) {
            current = id
          }
        }
      }

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Clean up any pending timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  // Smooth scroll and seamless pill glide on click
  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault()

    setActiveSection(id)
    isClickScrollingRef.current = true

    const targetElement = document.getElementById(id)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    // Unlock scroll tracking once smooth scroll finishes
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    scrollTimeoutRef.current = window.setTimeout(() => {
      isClickScrollingRef.current = false
    }, 850)
  }

  return (
    <>
      {/* Mobile & Tablet Floating Dock (< lg) - Melayang di atas dengan sliding pill magnetik */}
      <header className="sticky top-3 z-50 w-full flex justify-center px-4 lg:hidden pointer-events-none">
        <div className="relative pointer-events-auto rounded-full border border-[#E8E8E5] bg-white/95 backdrop-blur-md shadow-sm p-1.5 flex items-center space-x-1">
          {/* Satu pill aktif meluncur mulus (horizontal) */}
          <div
            className="absolute top-1.5 left-1.5 w-10 h-10 rounded-full bg-[#536B82] shadow-xs pointer-events-none transition-transform duration-400 ease-[cubic-bezier(0.2,0.9,0.2,1.15)] will-change-transform"
            style={{
              transform:
                activeIndex >= 0
                  ? `translateX(${activeIndex * 2.75}rem)`
                  : 'translateX(0)',
              opacity: activeIndex >= 0 ? 1 : 0,
            }}
            aria-hidden="true"
          />

          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleItemClick(e, item.id)}
                aria-label={item.name}
                className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#536B82] focus-visible:outline-none ${
                  isActive
                    ? 'text-white'
                    : 'text-[#536B82] hover:bg-[#536B82]/10'
                }`}
              >
                <Icon className="w-4 h-4" />
              </a>
            )
          })}

          {profileData.github && (
            <>
              <div className="w-px h-5 bg-[#E8E8E5] mx-0.5" aria-hidden="true" />
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (opens in new tab)"
                className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-150 text-[#536B82] hover:bg-[#536B82]/10 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#536B82] focus-visible:outline-none"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </>
          )}
        </div>
      </header>

      {/* Desktop Floating Right Dock (>= lg) - Melayang di samping kanan dengan sliding pill magnetik vertikal */}
      <nav
        className="fixed right-4 lg:right-6 xl:right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center pointer-events-auto"
        aria-label="Side Floating Navigation"
      >
        <div className="relative rounded-2xl border border-[#E8E8E5] bg-white/95 backdrop-blur-md shadow-lg shadow-black/[0.04] p-1.5 flex flex-col space-y-1.5">
          {/* Satu pill aktif meluncur vertikal dengan fisika pegas magnetik */}
          <div
            className="absolute top-1.5 left-1.5 w-10 h-10 rounded-xl bg-[#536B82] shadow-sm pointer-events-none transition-transform duration-400 ease-[cubic-bezier(0.2,0.9,0.2,1.15)] will-change-transform"
            style={{
              transform:
                activeIndex >= 0
                  ? `translateY(${activeIndex * 2.875}rem)`
                  : 'translateY(0)',
              opacity: activeIndex >= 0 ? 1 : 0,
            }}
            aria-hidden="true"
          />

          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleItemClick(e, item.id)}
                aria-label={item.name}
                className={`group relative z-10 flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#536B82] focus-visible:outline-none ${
                  isActive
                    ? 'text-white'
                    : 'text-[#536B82] hover:bg-[#536B82]/10 hover:text-[#43576a]'
                }`}
              >
                <Icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />

                {/* Tooltip pada hover ke arah kiri */}
                <span className="pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-[#536B82] text-white text-xs font-medium tracking-wide shadow-md whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150">
                  {item.name}
                </span>
              </a>
            )
          })}

          {profileData.github && (
            <>
              <div className="w-5 h-px bg-[#E8E8E5] my-0.5 self-center" aria-hidden="true" />
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (opens in new tab)"
                className="group relative z-10 flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200 text-[#536B82] hover:bg-[#536B82]/10 hover:text-[#43576a] active:scale-95 focus-visible:ring-2 focus-visible:ring-[#536B82] focus-visible:outline-none"
              >
                <GithubIcon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />

                {/* Tooltip pada hover ke arah kiri */}
                <span className="pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-[#536B82] text-white text-xs font-medium tracking-wide shadow-md whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150">
                  GitHub
                </span>
              </a>
            </>
          )}
        </div>
      </nav>
    </>
  )
}
