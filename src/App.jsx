import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Testimonial from './components/Testimonial'
import Benefits from './components/Benefits'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f5f5f7]">
      {/* Background base gradient */}
      <div className="fixed inset-0 -z-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_-10%,#182036_0%,transparent_60%),radial-gradient(900px_500px_at_0%_10%,#0a2a4a_0%,transparent_55%)] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#12121a]" />
      </div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Testimonial />
        <Benefits />
        <Portfolio />
        <Process />
        <FAQ />
        <Contact />
        <footer className="py-12 text-center text-[#f5f5f7]/60">© {new Date().getFullYear()} Hen³. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
