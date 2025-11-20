import { motion } from 'framer-motion'
import { Milk, Leaf } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950" />
        <div className="absolute -top-1/2 left-1/2 h-[120vh] w-[120vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.25),transparent_60%)]" />
        <div className="absolute -bottom-20 right-1/2 h-[80vh] w-[80vh] translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.25),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-200">
              <Milk className="w-4 h-4" /> Premium Dairy & Sustainable Farming
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Namuna Bhaisi Farm
            </h1>
            <p className="mt-5 text-lg text-emerald-100/90 max-w-xl">
              A modern buffalo and cow farm focused on ethical breeding, organic feed, and high-quality dairy products. Visit us to experience sustainable agriculture done right.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-semibold px-5 py-3 transition-colors">
                Book a Farm Tour
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3 border border-white/10 transition-colors">
                Explore Services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-emerald-200/80">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full ring-2 ring-emerald-500/30 bg-emerald-300/80" />
                ))}
              </div>
              <p>Trusted by local communities since 2015</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1759778351678-bcc41a6f026b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCdWZmYWxvZXMlMjBncmF6aW5nfGVufDB8MHx8fDE3NjM2NTI4Nzh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Buffaloes grazing" className="w-full h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400 grid place-items-center">
                    <Leaf className="text-emerald-950" />
                  </div>
                  <div className="text-white/90">
                    <p className="font-semibold">Organic Feed</p>
                    <p className="text-xs text-white/70">Green fodder + mineral balance</p>
                  </div>
                </div>
                <div className="text-right text-white/90">
                  <p className="font-semibold">3,000L/month</p>
                  <p className="text-xs text-white/70">A2 buffalo & cow milk</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
