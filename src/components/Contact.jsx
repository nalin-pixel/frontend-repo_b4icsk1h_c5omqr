import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '', consent: true })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source_page: 'home' }),
      })
      if (!res.ok) throw new Error('Verzenden mislukt')
      setStatus('ok')
      setForm({ name: '', email: '', phone: '', service: '', message: '', consent: true })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center">Vraag een offerte</h2>
        <p className="text-slate-500 text-center mt-2">We antwoorden binnen 24 uur</p>
        <form onSubmit={handleSubmit} className="mt-10 grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border border-slate-200">
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Naam" className="border rounded-lg px-4 py-3" />
          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="E-mail" className="border rounded-lg px-4 py-3" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Telefoon" className="border rounded-lg px-4 py-3" />
          <input name="service" value={form.service} onChange={handleChange} placeholder="Geïnteresseerd in" className="border rounded-lg px-4 py-3" />
          <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Uw bericht" className="md:col-span-2 border rounded-lg px-4 py-3 min-h-[120px]" />
          <label className="md:col-span-2 flex items-center gap-3 text-sm text-slate-600">
            <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} />
            Ik ga akkoord dat mijn gegevens gebruikt worden om contact op te nemen.
          </label>
          <div className="md:col-span-2 flex gap-4">
            <button disabled={status==='sending'} className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60">
              {status==='sending' ? 'Versturen...' : 'Verstuur'}
            </button>
            {status === 'ok' && <p className="text-green-600">Bedankt! We nemen snel contact op.</p>}
            {status === 'error' && <p className="text-red-600">Er ging iets mis. Probeer opnieuw.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
