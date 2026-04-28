import { ensembles } from "./data"

const icons: Record<string, string> = {
  "Камерный оркестр": "♬",
  "Фольклорный ансамбль": "♪",
  "Струнный квартет": "♩",
  "Саксофонист": "♫",
}

const Ensembles = () => {
  return (
    <section className="border-b border-white/10 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#b8860b08_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#b8860b]" />
          <span className="text-[#b8860b] text-xs tracking-[0.3em] uppercase font-medium">
            Составы
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <h2 className="font-serif text-5xl text-white font-light">
            Форматы выступлений
          </h2>
          <p className="text-white/40 lg:max-w-xs text-sm leading-relaxed">
            Подбираем состав под любое событие — от камерного вечера до грандиозного шоу
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {ensembles.map((e) => (
            <div
              key={e.name}
              className="bg-[#0a0a0a] p-8 group hover:bg-[#b8860b]/5 transition-all duration-500 cursor-default relative overflow-hidden"
            >
              {/* Иконка */}
              <div className="text-4xl text-[#b8860b]/20 group-hover:text-[#b8860b]/50 transition-all duration-500 mb-6 font-serif">
                {icons[e.name] ?? "♪"}
              </div>

              {/* Линия-акцент */}
              <div className="w-0 group-hover:w-8 h-0.5 bg-[#b8860b] transition-all duration-500 mb-4" />

              <h3 className="text-white text-lg font-medium mb-2 leading-snug">
                {e.name}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{e.desc}</p>

              {/* Стрелка при ховере */}
              <div className="absolute bottom-6 right-6 text-[#b8860b] opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm">
                ↗
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ensembles