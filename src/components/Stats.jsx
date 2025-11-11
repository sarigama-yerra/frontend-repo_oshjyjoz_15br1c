import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { label: 'Delighted Clients', value: 25, suffix: '+' },
  { label: 'Satisfaction', value: 100, suffix: '%' },
  { label: 'Daily Responses', value: 1, suffix: '00%' },
  { label: 'Passion', value: Infinity, suffix: '' },
]

function Counter({ target, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = Number.isFinite(target) ? target : 100
    const duration = 1400
    const startTime = performance.now()
    const tick = (t) => {
      const prog = Math.min(1, (t - startTime) / duration)
      const eased = 1 - Math.pow(1 - prog, 3)
      const cur = Math.floor(start + (end - start) * eased)
      setVal(cur)
      if (prog < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-semibold text-[#f5f5f7]">
      {Number.isFinite(target) ? val : '∞'}
      <span className="text-[#7795b9] ml-1">{suffix}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-24" aria-label="Stats">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-[0.03]" />
      </div>
      <div className="mx-auto max-w-[1400px] px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 hover:shadow-[0_0_40px_#67e8f933] transition will-change-transform"
          >
            <Counter target={s.value} suffix={s.suffix} />
            <p className="mt-2 text-[#f5f5f7]/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
