import { useState } from 'react'
import { Menu, X, Leaf, Milk, Tractor } from 'lucide-react'

function Brand() {
  return (
    <a href="#" className="flex items-center gap-2 group">
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-lime-300 to-emerald-600 shadow-lg shadow-emerald-500/20 grid place-items-center">
          <Milk className="w-5 h-5 text-emerald-950" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white grid place-items-center shadow ring-2 ring-emerald-200">
          <Leaf className="w-3 h-3 text-emerald-600" />
        </div>
      </div>
      <div className="leading-tight">
        <p className="text-white font-bold text-lg tracking-tight">Namuna Bhaisi Farm</p>
        <p className="text-emerald-200/80 text-xs">Dairy • Breeding • Agriculture</p>
      </div>
    </a>
  )
}

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#livestock', label: 'Livestock' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <Brand />
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-emerald-950 font-semibold px-4 py-2 transition-colors">
                <Tractor className="w-4 h-4" /> Book a Visit
              </a>
            </nav>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/5 text-white">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 mt-2 rounded-xl bg-emerald-500/90 text-emerald-950 font-semibold text-center">
                Book a Visit
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
