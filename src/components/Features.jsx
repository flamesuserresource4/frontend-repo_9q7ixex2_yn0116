import { Sprout, Milk, ShieldCheck, HeartHandshake, BadgeCheck, Leaf } from 'lucide-react'

const features = [
  {
    icon: Milk,
    title: 'Premium Dairy',
    desc: 'Fresh A2 buffalo and cow milk, hygienically processed and quality tested.'
  },
  {
    icon: Sprout,
    title: 'Organic Feed',
    desc: 'Green fodder grown on-site with sustainable practices and zero pesticides.'
  },
  {
    icon: ShieldCheck,
    title: 'Animal Welfare',
    desc: 'Ethical breeding, free-grazing, clean sheds, and regular veterinary care.'
  },
  {
    icon: HeartHandshake,
    title: 'Community First',
    desc: 'Fair pricing for farmers, doorstep delivery for families and cafes.'
  },
  {
    icon: BadgeCheck,
    title: 'Quality Assured',
    desc: 'Lactometer-tested, cold chain maintained, and transparent sourcing.'
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    desc: 'Water conservation, manure composting, and renewable energy usage.'
  },
]

export default function Features() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white">What We Offer</h2>
          <p className="mt-3 text-emerald-100/80">From premium dairy to sustainable farming solutions, we bring the best of agriculture to your home and business.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/90 grid place-items-center shadow-md shadow-emerald-500/30">
                <f.icon className="text-emerald-950" />
              </div>
              <h3 className="mt-5 font-bold text-xl text-white">{f.title}</h3>
              <p className="mt-2 text-emerald-100/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
