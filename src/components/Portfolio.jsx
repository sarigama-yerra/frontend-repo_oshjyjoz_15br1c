import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  { title: 'TYVM', year: '2024', tags: ['Brand', 'Web'], img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Applied Performance Coach', year: '2024', tags: ['Coach', 'Web'], img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Amplify', year: '2023', tags: ['SaaS', 'UI'], img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Ali Abdaal', year: '2023', tags: ['Creator', 'UX'], img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop' },
  { title: 'PTYA', year: '2022', tags: ['Course', 'Brand'], img: 'https://images.unsplash.com/photo-1532619675605-1ede6f19d03b?q=80&w=1600&auto=format&fit=crop' },
  { title: 'You / Your Company', year: 'Next', tags: ['Hire'], img: 'https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1600&auto=format&fit=crop' },
]

export default function Portfolio() {
  const [freezeScroll, setFreezeScroll] = useState(false)

  return (
    <section id="work" className="py-24" aria-label="Recent Projects">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl text-[#f5f5f7] font-semibold">Recent Projects</h2>
            <p className="text-[#f5f5f7]/70 mt-2">A mix of product, creator, and brand builds.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <ProjectCard key={p.title} project={p} setFreeze={setFreezeScroll} idx={idx} />)
          )}
        </div>
      </div>
      {freezeScroll && (
        <style>{`body{overflow:hidden}`}</style>
      )}
    </section>
  )
}

function ProjectCard({ project, setFreeze, idx }) {
  const cardRef = useRef(null)

  const onEnter = () => setFreeze(true)
  const onLeave = () => setFreeze(false)

  return (
    <motion.article
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={project.img} alt="" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <a href="#" className="px-4 py-2 rounded-full bg-[#7795b9] text-[#0a0a0f] text-sm font-medium shadow-[0_0_40px_#67e8f9]">View Project</a>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-[#f5f5f7]">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <span className="text-[#f5f5f7]/60">{project.year}</span>
        </div>
        <p className="mt-2 text-sm text-[#f5f5f7]/70">{project.tags.join(' • ')}</p>
        <div className="mt-4 max-h-24 overflow-auto pr-2 text-[#f5f5f7]/80 text-sm leading-relaxed">
          Suspendisse potenti. Integer posuere erat a ante. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla.
        </div>
      </div>
    </motion.article>
  )
}
