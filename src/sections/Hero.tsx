import { Container } from '../components/Container'
import { GithubIcon } from '../components/icons/GithubIcon'
import { profileData } from '../data/profile'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-16 sm:pt-20 lg:pt-24 pb-0">
      <Container>
        <div className="min-h-full flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-6 pb-12 sm:pb-16 lg:pb-24 pt-4 space-y-6">
              {/* Small text greeting: Hello, I'am */}
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-px bg-[#536B82]/50 inline-block" aria-hidden="true" />
                <p className="text-sm sm:text-base md:text-lg font-medium text-[#536B82] tracking-normal">
                  {profileData.greeting}
                </p>
              </div>

              {/* Largest heading with rigid minimalist lean font: MUHAMMAD HARITS */}
              <h1 className="font-display font-light sm:font-normal text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-[0.03em] uppercase text-[#171717] leading-[1.05]">
                {profileData.heroHeading}
              </h1>

              {/* Small subtitle with the exact same font as the name: frontend web developer */}
              <p className="font-display text-sm sm:text-base md:text-lg text-[#536B82] tracking-[0.16em] uppercase font-normal">
                {profileData.role}
              </p>

              {/* Brief description (not the full about me yet) */}
              <p className="text-base sm:text-lg text-[#737373] leading-relaxed max-w-xl">
                {profileData.heroDescription}
              </p>

              {/* Action buttons (Clean, static, no hover effects) */}
              <div className="pt-2 flex flex-wrap gap-3 sm:gap-4 items-center">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-lg bg-[#536B82] text-white font-medium text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#536B82] focus-visible:ring-offset-2 focus-visible:outline-none shadow-xs"
                >
                  Explore My Work
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-lg bg-white border border-[#E8E8E5] text-[#171717] font-medium text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#536B82] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  About Me
                </a>
                {profileData.github && (
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 justify-center min-h-[44px] px-5 py-3 rounded-lg bg-white border border-[#E8E8E5] text-[#171717] font-medium text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#536B82] focus-visible:ring-offset-2 focus-visible:outline-none"
                    aria-label="GitHub Profile (opens in new tab)"
                  >
                    <GithubIcon className="w-5 h-5 text-[#171717]" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Visual Showcase (Foto besar berdiri penuh sampai dasar bagian bawah hero) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end items-end relative">
              <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-[520px] h-[480px] sm:h-[560px] lg:h-[620px] xl:h-[660px] flex items-end justify-center">
                
                {/* Komponen lingkaran ukuran sedang yang berada TEPAT DI BELAKANG KEPALA (z-0, tertutup oleh foto) */}
                <div
                  className="absolute top-6 sm:top-10 lg:top-14 left-1/2 -translate-x-1/2 z-0 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full pointer-events-none"
                  aria-hidden="true"
                >
                  {/* Soft ambient backdrop glow */}
                  <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-tr from-[#536B82]/20 via-[#536B82]/10 to-transparent blur-xl" />

                  {/* Outer dashed architectural orbit ring */}
                  <div className="absolute -inset-2 sm:-inset-2.5 rounded-full border border-[#536B82]/25 border-dashed" />

                  {/* Main circular pedestal disc di belakang kepala */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-b from-[#EBF2F7] via-[#DFE9F1] to-[#CFDEEA] border-2 border-white shadow-xl shadow-[#536B82]/15" />
                </div>

                {/* Foto dari kepala sampai dada (berada di DEPAN lingkaran, z-10, berdiri penuh menyentuh dasar hero) */}
                <div className="relative z-10 w-full h-full flex items-end justify-center select-none pointer-events-none">
                  <img
                    src="/my-photo.png"
                    alt={profileData.name}
                    className="w-full h-full object-contain object-bottom drop-shadow-[0_16px_28px_rgba(30,41,59,0.18)]"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}