import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'How long does a typical project take?', a: 'Most sites launch in 3–6 weeks depending on scope and feedback cadence.' },
  { q: 'What stacks do you prefer?', a: 'Modern React on the front, FastAPI/Node on the back, deployed to a platform that suits scale.' },
  { q: 'Can you help with copy and SEO?', a: 'Yes — messaging, information architecture, and technical SEO are part of the engagement.' },
  { q: 'What does it cost?', a: 'Projects are fixed-fee with clear milestones. After a short intro, you’ll get a crisp proposal.' },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-4 text-left text-[#f5f5f7]"
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="text-[#f5f5f7]/70">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-[#f5f5f7]/70">{a}</div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24" aria-label="FAQ">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-3xl md:text-5xl text-[#f5f5f7] font-semibold mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <Item key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
