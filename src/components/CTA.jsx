import { Phone, MapPin, Mail, Clock } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-black text-white">Visit Namuna Bhaisi Farm</h2>
            <p className="mt-3 text-emerald-100/80">We welcome schools, families, and agri-enthusiasts. Book a guided tour, tasting session, or a training program.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <div className="flex items-center gap-3 text-white/90">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">+977-9800000000</span>
                </div>
                <p className="mt-1 text-emerald-100/80 text-sm">Call for orders and bookings</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <div className="flex items-center gap-3 text-white/90">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">hello@namunabhaisi.farm</span>
                </div>
                <p className="mt-1 text-emerald-100/80 text-sm">Reach us for partnerships</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <div className="flex items-center gap-3 text-white/90">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">Chitwan, Nepal</span>
                </div>
                <p className="mt-1 text-emerald-100/80 text-sm">Farm open 7 days • 8am–6pm</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <div className="flex items-center gap-3 text-white/90">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Fresh Milk Delivery</span>
                </div>
                <p className="mt-1 text-emerald-100/80 text-sm">Morning & Evening slots</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=84.0%2C27.6%2C84.6%2C27.9&layer=mapnik"
              className="w-full h-[420px]"
            />
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-lime-400/10 p-6 text-center">
          <p className="text-emerald-100/90">Looking for bulk supply for your cafe or hotel? We offer custom contracts, cold chain logistics, and consistent quality.</p>
        </div>
      </div>
    </section>
  )
}
