import { Cow, Sheep, PiggyBank, Leaf } from 'lucide-react'

const animals = [
  {
    name: 'Murrah Buffalo',
    stats: 'Average 8–12 L/day',
    note: 'High butterfat A2 milk, hardy and adaptable.',
    img: 'https://images.unsplash.com/photo-1520903920240-b6fbf9009d11?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Jersey Cow',
    stats: 'Average 12–18 L/day',
    note: 'Rich milk, suitable for small & mid-sized farms.',
    img: 'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'HF Cow',
    stats: 'Average 18–25 L/day',
    note: 'High-yielding dairy breed with proper feed & care.',
    img: 'https://images.unsplash.com/photo-1608023136034-626dad6c6180?q=80&w=1600&auto=format&fit=crop'
  },
]

export default function Livestock() {
  return (
    <section id="livestock" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Our Livestock</h2>
            <p className="mt-3 text-emerald-100/80 max-w-2xl">We specialize in healthy buffalo and cow breeds raised with care. Quality genetics and balanced nutrition ensure excellent yield and animal wellbeing.</p>
          </div>
          <div className="hidden sm:block text-right text-emerald-100/80">
            <p className="font-semibold">Breeding Support • Veterinary Care • Feed Advisory</p>
            <p className="text-sm">Farm visits and training programs available</p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {animals.map((a) => (
            <div key={a.name} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src={a.img} alt={a.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-xl">{a.name}</h3>
                  <span className="text-emerald-200/90 text-sm">{a.stats}</span>
                </div>
                <p className="mt-2 text-emerald-100/80">{a.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
