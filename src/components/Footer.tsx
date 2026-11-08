import { Container } from './Container'
import { GithubIcon } from './icons/GithubIcon'
import { profileData } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-[#E8E8E5] bg-[#FAFAF8] py-8">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#737373]">
          <p>{profileData.footerText}</p>
          {profileData.github && (
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-[#737373] hover:text-[#171717] focus-visible:ring-2 focus-visible:ring-[#536B82] focus-visible:outline-none rounded-md px-2 py-1 transition-colors"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <GithubIcon className="w-4 h-4 text-[#171717]" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </Container>
    </footer>
  )
}
