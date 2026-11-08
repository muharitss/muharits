import { useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { GithubIcon } from '../components/icons/GithubIcon'
import { profileData } from '../data/profile'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage(null)
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const message = String(formData.get('message') ?? '')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message. Please try again.')
      }

      setSubmitted(true)
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : 'An error occurred while sending your message. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-[#E8E8E5]">
      <Container>
        <div className="max-w-3xl">
          <SectionHeading
            heading={profileData.contactHeading}
            description={profileData.contactDescription}
          />

          <div className="bg-white border border-[#E8E8E5] rounded-xl p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <p className="text-base sm:text-lg font-medium text-[#171717]">
                  Thank you for reaching out!
                </p>
                <p className="text-sm text-[#737373]">
                  Your message has been received. I'll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setErrorMessage(null)
                  }}
                  className="mt-4 text-sm text-[#536B82] hover:underline font-medium cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-lg bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm"
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[#171717]"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E8E5] bg-[#FAFAF8] text-[#171717] placeholder:text-[#737373]/60 focus:bg-white focus:border-[#536B82] focus:ring-1 focus:ring-[#536B82] transition-colors text-sm outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-[#171717]"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      placeholder="your.email@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E8E5] bg-[#FAFAF8] text-[#171717] placeholder:text-[#737373]/60 focus:bg-white focus:border-[#536B82] focus:ring-1 focus:ring-[#536B82] transition-colors text-sm outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[#171717]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    disabled={isSubmitting}
                    placeholder="How can I help you?"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E8E5] bg-[#FAFAF8] text-[#171717] placeholder:text-[#737373]/60 focus:bg-white focus:border-[#536B82] focus:ring-1 focus:ring-[#536B82] transition-colors text-sm outline-none resize-y min-h-[100px] disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-lg bg-[#536B82] text-white font-medium text-sm hover:bg-[#43576a] focus-visible:ring-2 focus-visible:ring-[#536B82] focus-visible:ring-offset-2 focus-visible:outline-none transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {profileData.github && (
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl border border-[#E8E8E5] bg-white shadow-xs">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-lg bg-[#FAFAF8] border border-[#E8E8E5] text-[#171717]">
                  <GithubIcon className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-[#171717]">
                    Explore my source code
                  </p>
                  <p className="text-xs text-[#737373]">
                    Repositories, contributions, and open-source projects
                  </p>
                </div>
              </div>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#536B82] hover:text-[#43576a] focus-visible:ring-2 focus-visible:ring-[#536B82] focus-visible:outline-none rounded-md px-3.5 py-2 border border-[#E8E8E5] hover:border-[#536B82]/40 bg-[#FAFAF8] transition-colors shrink-0"
                aria-label="Visit Muhammad Harits' GitHub (opens in new tab)"
              >
                <span>github.com/muharitss</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
