import { motion } from 'framer-motion'
import { Shield, Zap, Cpu, FileText, Boxes, MousePointer2, Rocket, Search } from 'lucide-react'

const items = [
  { title: 'Bespoke design', desc: 'Tailored visuals and flows built uniquely for your goals.', icon: MousePointer2 },
  { title: 'Seriously Secure', desc: 'From headers to hashing — your stack is locked in.', icon: Shield, glitch: true },
  { title: 'Fast dev/loads', desc: 'Snappy builds, silky runtime. Users feel the speed.', icon: Zap },
  { title: 'Powerful CMS', desc: 'Structured content that scales with your story.', icon: Cpu },
  { title: 'Copy that sings', desc: 'Words that move people to action.', icon: FileText },
  { title: 'Professional integrations', desc: 'Payments, auth, CRMs — connected cleanly.', icon: Boxes },
  { title: 'ROI-driven focus', desc: 'Data-led decisions and measurable results.', icon: Rocket },
  { title: 'Specialist SEO', desc: 'Technical and on-page wins for ranking lift.', icon: Search },
]

function Glitch({ children }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -translate-x-px text-cyan-300 opacity-60 mix-blend-screen select-none" aria-hidden>{children}</span>
      <span className="absolute inset-0 translate-x-px text-fuchsia-300 opacity-60 mix-blend-screen select-none" aria-hidden>{children}</span>
    </span>
  )
}

export default function Benefits() {
  return (
    <section className="py-24" aria-label="Creativity. Cubed.">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl text-[#f5f5f7] font-semibold">Creativity. Cubed.</h2>
          <p className="text-[#f5f5f7]/70 mt-2">Interactive cards packed with capability.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 hover:shadow-[0_0_40px_#67e8f933] transition"
              >
                <div className="flex items-center gap-3 text-[#f5f5f7]">
                  <div className="p-2 rounded-lg bg-white/10"><Icon size={20} /></div>
                  <h3 className="text-lg font-medium">
                    {it.glitch ? <Glitch>Seriously Secure</Glitch> : it.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-[#f5f5f7]/70">{it.desc}</p>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-cyan-400/10 blur-2xl group-hover:bg-cyan-400/20 transition" aria-hidden />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
