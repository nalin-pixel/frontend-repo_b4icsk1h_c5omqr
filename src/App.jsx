import { useRef } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const contactRef = useRef(null)

  const scrollToContact = () => {
    const el = document.getElementById('contact') || contactRef.current
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Hero onCTAClick={scrollToContact} />
      <Services />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
