import { motion } from 'framer-motion'
import { Sparkles, Calendar, FileSpreadsheet, PenTool, Rocket } from 'lucide-react'

const steps = [
  { title: 'Request & Vision', icon: Sparkles, desc: 'Share your goals, constraints, and inspirations.' },
  { title: 'Meeting & Scope', icon: Calendar, desc: 'Align on scope, priorities, and outcomes.' },
  { title: 'Proposal & Timeline', icon: FileSpreadsheet, desc: 'Transparent plan with milestones and pricing.' },
  { title: 'Design & Construction', icon: PenTool, desc: 'Interface, copy, and code woven into one.' },
  { title: 'Launch & Handover', icon: Rocket, desc: 'Deploy, document, and support your success.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24" aria-label="Process">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-3xl md:text-5xl text-[#f5f5f7] font-semibold mb-10">Process</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#7795b9]/60 to-transparent" aria-hidden />
          <ol className="space-y-8">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[#f5f5f7]"><Icon size={16} /></div>
                  <h3 className="text-[#f5f5f7] font-medium">{s.title}</h3>
                  <p className="text-sm text-[#f5f5f7]/70">{s.desc}</p>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
