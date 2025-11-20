import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Livestock from './components/Livestock'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Livestock />
      <CTA />
      <footer className="py-10 border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-emerald-100/70">© {new Date().getFullYear()} Namuna Bhaisi Farm. All rights reserved.</p>
            <div className="flex items-center gap-4 text-emerald-100/70 text-sm">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#livestock" className="hover:text-white">Livestock</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
