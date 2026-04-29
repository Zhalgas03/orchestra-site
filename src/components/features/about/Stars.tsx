import { useReveal } from "../../../hooks/useReveal"
import { stars } from "./data"

const Stars = () => {
  const labelRef = useReveal(0)
  const gridRef  = useReveal(150)

  return (
    <section className="border-b border-white/10 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <div ref={labelRef} className="reveal flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-[#b8860b]" />
          <span className="text-[#b8860b] text-xs tracking-[0.3em] uppercase font-medium">
            С кем выступали
          </span>
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-white/8">
          {stars.map((s, i) => (
            <div
              key={s.name}
              className="group p-8 relative transition-all duration-300 cursor-default"
            >
              <span className="absolute top-6 right-6 font-serif text-xs text-white/15 group-hover:text-[#b8860b]/40 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mb-2">
                <div className="w-6 h-0.5 bg-[#b8860b]/0 group-hover:bg-[#b8860b] transition-all duration-500 mb-4" />
                <p className="text-white text-lg font-medium group-hover:text-[#b8860b] transition-colors duration-300">
                  {s.name}
                </p>
              </div>
              <p className="text-white/40 text-sm tracking-wide">{s.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Stars