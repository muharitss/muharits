import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { profileData } from '../data/profile'

// Map skill names to their icon files in /public/
const skillIconMap: Record<string, string> = {
  'React': '/react-js.svg.webp',
  'Next.js': '/nextjs.svg.webp',
  'TypeScript': '/typescript.svg.webp',
  'Tailwind CSS': '/tailwindcss.svg.webp',
  'Express.js': '/expressjs.png',
  'PostgreSQL': '/postgresql.svg.webp',
  'GitHub': '/github.svg.webp',
}

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-[#E8E8E5]">
      <Container>
        <div className="max-w-4xl">
          <SectionHeading
            heading={profileData.aboutHeading}
          />

          {/* Detailed Story & Background */}
          <div className="space-y-4 text-base sm:text-lg text-[#737373] leading-relaxed mb-14">
            {profileData.aboutStory.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Tech Stack & Technologies - COMMENTED OUT */}
          {/* <div className="space-y-6 mb-14">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#536B82]" />
              <h3 className="text-xl sm:text-2xl font-semibold text-[#171717] tracking-tight">
                Tech Stack & Core Technologies
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#737373]">
              The primary tools, frameworks, and workflows I use to build reliable web products.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-2">
              {profileData.techCategories.map((cat, idx) => {
                const Icon = categoryIcons[idx % categoryIcons.length]
                return (
                  <div
                    key={cat.title}
                    className="p-5 sm:p-6 rounded-xl border border-[#E8E8E5] bg-white shadow-xs"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#536B82]/10 text-[#536B82]">
                        <Icon className="w-4 h-4" />
                      </span>
                      <h4 className="font-semibold text-base sm:text-lg text-[#171717]">
                        {cat.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-[#737373] mb-4">
                      {cat.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#FAFAF8] text-[#536B82] border border-[#E8E8E5]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div> */}

          {/* My Skills - Logo/Icon Only */}
          <div className="space-y-6 mb-14">
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#171717] tracking-tight">
                My Skills
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 lg:gap-6">
              {profileData.techCategories.flatMap((cat) =>
                cat.skills.map((skill) => {
                  const iconPath = skillIconMap[skill]
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-[#E8E8E5] shadow-xs hover:shadow-md hover:border-[#536B82]/30 transition-all duration-200 group"
                      title={skill}
                    >
                      {iconPath ? (
                        <img
                          src={iconPath}
                          alt={skill}
                          className="w-6 h-6 sm:w-7 sm:h-7 object-contain group-hover:opacity-80 transition-opacity duration-200"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-xs font-medium text-[#536B82]">{skill}</span>
                      )}
                    </span>
                  )
                })
              )}
            </div>
          </div>

          {/* Core Strengths & Principles */}
        
        </div>
      </Container>
    </section>
  )
}