import { useState } from "react"
import { useTranslation } from "react-i18next"
import { ensembles } from "./data"
import { useReveal } from "../../../hooks/useReveal"

const ICONS = ["♬", "♪", "♩", "♫"]

const Ensembles = () => {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)
  const [displayed, setDisplayed] = useState(0)
  const [fading, setFading] = useState(false)
  const labelRef  = useReveal(0)
  const titleRef  = useReveal(100)
  const gridRef   = useReveal(200)
  const panelRef  = useReveal(350)

  const handleSelect = (i: number) => {
    if (i === active) return
    setFading(true)
    setTimeout(() => { setDisplayed(i); setActive(i); setFading(false) }, 200)
  }

  const e = ensembles[displayed]

  return (
    <section className="border-b border-white/10 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#b8860b08_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-8 relative z-10">

        <div ref={labelRef} className="reveal flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#b8860b]" />
          <span className="text-[#b8860b] text-xs tracking-[0.3em] uppercase font-medium">
            {t("about.ensembles.label")}
          </span>
        </div>

        <div ref={titleRef} className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <h2 className="font-serif text-5xl text-white font-light">{t("about.ensembles.title")}</h2>
          <p className="text-white/40 lg:max-w-xs text-sm leading-relaxed">{t("about.ensembles.subtitle")}</p>
        </div>

        <div ref={gridRef} className="reveal grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {ensembles.map((ens, i) => (
            <button key={ens.id} onClick={() => handleSelect(i)}
              className="bg-[#0a0a0a] p-8 group relative overflow-hidden text-left focus:outline-none">
              <div className={`absolute inset-0 transition-opacity duration-500 bg-[#b8860b]/5 ${i === active ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />
              <div className={`absolute bottom-0 left-0 h-[1.5px] bg-[#b8860b] transition-all duration-500 ${i === active ? "w-full" : "w-0 group-hover:w-full"}`} />
              <div className={`absolute top-0 right-0 w-8 h-px bg-[#b8860b] transition-opacity duration-300 ${i === active ? "opacity-100" : "opacity-0"}`} />
              <div className={`absolute top-0 right-0 w-px h-8 bg-[#b8860b] transition-opacity duration-300 ${i === active ? "opacity-100" : "opacity-0"}`} />
              <div className={`relative text-3xl font-serif mb-5 transition-all duration-500 ${i === active ? "text-[#b8860b]/70" : "text-[#b8860b]/20 group-hover:text-[#b8860b]/40"}`}>
                {ICONS[i]}
              </div>
              <div className={`relative h-px bg-[#b8860b] mb-4 transition-all duration-500 ${i === active ? "w-6" : "w-0 group-hover:w-6"}`} />
              <h3 className="relative text-white text-base font-medium mb-1.5 leading-snug">
                {t(`about.ensembles.items.${ens.id}.name`)}
              </h3>
              <p className="relative text-white/35 text-sm leading-relaxed">
                {t(`about.ensembles.items.${ens.id}.desc`)}
              </p>
              <div className={`absolute top-5 right-6 font-mono text-[11px] transition-colors duration-300 ${i === active ? "text-[#b8860b]/50" : "text-white/10"}`}>
                0{i + 1}
              </div>
            </button>
          ))}
        </div>

        <div ref={panelRef} className="reveal mt-8">
          <div style={{ transition: "opacity 0.2s ease, transform 0.2s ease", opacity: fading ? 0 : 1, transform: fading ? "translateY(10px)" : "translateY(0)" }}
            className="border border-white/[0.08] relative">
            <div className="absolute left-0 top-8 bottom-8 w-px bg-[#b8860b]/60" />
            <div className="grid lg:grid-cols-3">
              <div className="px-12 py-10 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                <p className="text-[#b8860b] text-[10px] tracking-[0.3em] uppercase font-medium mb-5">{t("about.ensembles.cast_label")}</p>
                <p className="font-serif text-3xl text-white font-light leading-none">{t(`about.ensembles.items.${e.id}.cast`)}</p>
              </div>
              <div className="px-12 py-10 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                <p className="text-[#b8860b] text-[10px] tracking-[0.3em] uppercase font-medium mb-5">{t("about.ensembles.events_label")}</p>
                <p className="text-white/70 text-sm leading-relaxed">{t(`about.ensembles.items.${e.id}.events`)}</p>
              </div>
              <div className="px-12 py-10">
                <p className="text-[#b8860b] text-[10px] tracking-[0.3em] uppercase font-medium mb-5">{t("about.ensembles.repertoire_label")}</p>
                <p className="text-white/70 text-sm leading-relaxed">{t(`about.ensembles.items.${e.id}.repertoire`)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ensembles