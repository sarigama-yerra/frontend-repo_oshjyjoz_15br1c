import { motion } from 'framer-motion'

export default function Testimonial() {
  return (
    <section className="py-24" aria-label="Testimonial">
      <div className="mx-auto max-w-[1400px] px-6 grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -left-8 -top-8 w-40 h-40 rounded-full bg-cyan-400/10 blur-2xl" aria-hidden />
          <blockquote className="text-2xl md:text-3xl text-[#f5f5f7] leading-tight">
            “Working with Hen³ was seamless — premium taste, crisp communication, and results that moved the needle.”
          </blockquote>
          <div className="mt-6 text-[#f5f5f7]/70">— Jordan S., Product Lead</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4"
        >
          <img
            src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop"
            alt="Jordan avatar"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div className="text-[#f5f5f7]/80 text-sm">
            <div className="font-medium text-[#f5f5f7]">Jordan S.</div>
            <div>Product Lead at TYVM</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
