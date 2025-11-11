import { useState } from 'react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSuccess(true)
  }

  return (
    <section id="contact" className="py-24" aria-label="Contact">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-3xl md:text-5xl text-[#f5f5f7] font-semibold mb-8">Contact</h2>
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Name" required />
          <Input label="Email" type="email" required />
          <Input label="Project type" />
          <Input label="Budget" />
          <div className="md:col-span-2">
            <label className="block text-sm text-[#f5f5f7]/70 mb-2">Description</label>
            <textarea className="w-full h-32 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#f5f5f7] focus:outline-none focus:ring-2 focus:ring-[#7795b9]" placeholder="Tell me about your project." required />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button
              className="relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[#0a0a0f] bg-[#7795b9] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7795b9] active:scale-[0.98] transition"
              type="submit"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? 'Sending…' : 'Send message'}
            </button>
            {success && <div className="text-cyan-300">Swiiiish. That was beautiful.</div>}
          </div>
        </form>
      </div>
    </section>
  )
}

function Input({ label, type = 'text', required }) {
  return (
    <div>
      <label className="block text-sm text-[#f5f5f7]/70 mb-2">{label}</label>
      <input type={type} required={required} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#f5f5f7] focus:outline-none focus:ring-2 focus:ring-[#7795b9]" />
    </div>
  )
}
