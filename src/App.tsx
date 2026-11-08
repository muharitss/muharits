import { IntroLoader } from './components/IntroLoader'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { About } from './sections/About'
import { Contact } from './sections/Contact'

function App() {
  return (
    <>
      <IntroLoader />
      <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#171717]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#536B82] text-white rounded-md text-sm font-medium focus-visible:outline-none"
        >
          Skip to content
        </a>

        {/* Floating Navbar (melayang di samping kanan pada desktop, di atas pada mobile) */}
        <Navbar />

        {/* Alur landing page profesional dari atas ke bawah (konten tetap di tengah dengan container mx-auto) */}
        <main id="main-content" className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
