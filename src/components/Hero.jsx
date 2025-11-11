import { useEffect, useMemo, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, AnimatePresence } from 'framer-motion'

const phrases = ['The Wizard', 'The Wordsmith', 'The Webmaster']

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length)
    }, 2000)
    return () => clearInterval(timerRef.current)
  }, [])

  // Parallax mouse-follow
  const [mx, setMx] = useState(0)
  const [my, setMy] = useState(0)
  const onMouseMove = (e) => {
    const { innerWidth: w, innerHeight: h } = window
    const x = (e.clientX - w / 2) / w
    const y = (e.clientY - h / 2) / h
    setMx(x)
    setMy(y)
  }

  return (
    <section
      onMouseMove={onMouseMove}
      className="relative min-h-[100svh] overflow-hidden flex items-center"
      aria-label="Hero"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_-10%,#1b2850_0%,transparent_60%),radial-gradient(800px_500px_at_90%_10%,#0b3a60_0%,transparent_55%)] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#12121a]" />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0 pointer-events-auto" aria-hidden>
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glow particles */}
      <motion.div
        className="absolute -top-16 -left-16 w-96 h-96 rounded-full blur-3xl bg-cyan-500/10 pointer-events-none"
        animate={{ x: mx * 40, y: my * 40 }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 w-full">
        <div className="max-w-2xl">
          <p className="text-[#f5f5f7]/70 mb-2">Hen9 • Portfolio</p>

          <div className="h-10 mb-2 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-[#7795b9] text-xl tracking-wide"
                aria-live="polite"
              >
                {phrases[index]}
              </motion.div>
            </AnimatePresence>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#f5f5f7]">
            Weaving Winning Websites
          </h1>
          <p className="mt-4 text-[#f5f5f7]/70 max-w-xl">
            Premium design, precise words, and robust engineering — woven into digital experiences that convert.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[#0a0a0f] bg-[#7795b9] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7795b9] active:scale-[0.98] transition"
            >
              <span>Start a project</span>
              <span className="absolute inset-0 rounded-full shadow-[0_0_40px_#67e8f9] opacity-0 group-hover:opacity-30 transition" />
            </a>
            <a href="#work" className="text-[#f5f5f7]/80 hover:text-[#f5f5f7]">View work</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1">
          <motion.span
            className="block w-1 h-2 rounded-full bg-white/70"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  )
}
