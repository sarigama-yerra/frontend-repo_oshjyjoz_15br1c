import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#work', label: 'Projects' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 10)
      setHidden(y > lastY && y > 120) // hide on scroll down
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  useEffect(() => {
    if (open) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
  }, [open])

  return (
    <header
      className={
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' +
        (hidden ? '-translate-y-full' : 'translate-y-0')
      }
      aria-label="Primary"
    >
      <div
        className={
          'mx-auto max-w-[1400px] px-6 py-4 flex items-center justify-between transition-all ' +
          (scrolled
            ? 'backdrop-blur-md/80 bg-white/5 border-b border-white/10 rounded-xl mt-3'
            : 'bg-transparent')
        }
      >
        <a href="#" className="text-xl font-semibold tracking-tight text-[#f5f5f7]">
          Hen9
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-[#f5f5f7]/80 hover:text-[#f5f5f7] transition-colors"
            >
              <span>{l.label}</span>
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-px w-0 bg-[#7795b9] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-[#f5f5f7] p-2 rounded hover:bg-white/10"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 bg-[#0a0a0f]/90 backdrop-blur-xl">
          <div className="flex items-center justify-between p-6">
            <span className="text-[#f5f5f7] text-lg font-semibold">Hen9</span>
            <button
              className="text-[#f5f5f7] p-2 rounded hover:bg-white/10"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X />
            </button>
          </div>
          <div className="px-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#f5f5f7] text-2xl py-3"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
