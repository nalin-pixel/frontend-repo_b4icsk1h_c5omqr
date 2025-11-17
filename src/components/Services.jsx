import { useEffect, useState } from 'react'
import { Layers, Thermometer, Flame, Droplet, Square } from 'lucide-react'

const iconMap = { Layers, Thermometer, Flame, Droplet, Square }

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/services`)
        const data = await res.json()
        setServices(data)
      } catch (e) {
        setError('Kon diensten niet laden')
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [])

  return (
    <section id="diensten" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center">Onze diensten</h2>
        <p className="text-slate-500 text-center mt-2">Alles rond chape, vloeren en afwerking</p>
        {loading ? (
          <p className="text-center mt-10">Laden...</p>
        ) : error ? (
          <p className="text-center mt-10 text-red-600">{error}</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Layers
              return (
                <div key={s.id} className="p-6 rounded-xl border border-slate-200 hover:shadow-lg transition bg-white">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                  <p className="text-slate-600 text-sm mt-1">{s.description}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
