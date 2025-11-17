export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} NieuweVloer — Alle rechten voorbehouden</p>
        <div className="text-sm opacity-80">
          BE-nummer op aanvraag • Professionele aansprakelijkheidsverzekering
        </div>
      </div>
    </footer>
  )
}
