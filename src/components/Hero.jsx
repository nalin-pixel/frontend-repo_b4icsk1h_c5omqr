import { motion } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#60a5fa,transparent_25%),radial-gradient(circle_at_80%_30%,#a78bfa,transparent_25%),radial-gradient(circle_at_40%_80%,#34d399,transparent_25%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              Nieuwe Vloer, perfect gelegd
              <span className="block text-blue-400">Door een vakman vloerder</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-slate-200 max-w-2xl"
            >
              Betrouwbare plaatsing van chape, vloerisolatie, vloerverwarming, tegelwerken en gietvloeren. Snel een vrijblijvende offerte bij u thuis.
            </motion.p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button onClick={onCTAClick} className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold">
                Vraag een offerte aan
              </button>
              <a href="#diensten" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition font-semibold">
                Bekijk onze diensten
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-300">
              Regio: Antwerpen, Vlaams-Brabant, Limburg en omstreken
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
          >
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Strakke afwerking', desc: 'Tot op de millimeter nauwkeurig' },
                { title: 'Correcte prijs', desc: 'Transparante offertes' },
                { title: 'Snelle plaatsing', desc: 'Volgens planning' },
                { title: '10+ jaar ervaring', desc: 'Vakkundig & betrouwbaar' },
              ].map((item) => (
                <li key={item.title} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-slate-300">{item.desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
