import { useTranslation } from "react-i18next"
import { useReveal } from "../../../hooks/useReveal"

const Mission = () => {
  const { t } = useTranslation()
  const labelRef = useReveal(0)
  const gridRef  = useReveal(120)

  return (
    <section className="border-b border-white/10 relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#b8860b]/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div ref={labelRef} className="reveal flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-[#b8860b]" />
          <span className="text-[#b8860b] text-xs tracking-[0.3em] uppercase font-medium">
            {t("about.mission.label")}
          </span>
        </div>
        <div ref={gridRef} className="reveal grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <p className="text-white/70 text-xl leading-relaxed">{t("about.mission.p1")}</p>
            <p className="text-white/70 text-xl leading-relaxed">{t("about.mission.p2")}</p>
            <p className="text-white/70 text-xl leading-relaxed">{t("about.mission.p3")}</p>
          </div>
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-[#b8860b]" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-[#b8860b]" />
            <div className="bg-white/[0.03] border border-white/10 p-10 backdrop-blur-sm">
              <div className="text-[#b8860b] text-xs tracking-[0.3em] uppercase mb-6 font-medium">
                {t("about.mission.record_label")}
              </div>
              <h3 className="font-serif text-3xl text-white font-light leading-tight mb-4 italic">
                {t("about.mission.record_title")}
              </h3>
              <div className="h-px bg-white/10 my-6" />
              <p className="text-white/40 text-xs tracking-[0.25em] uppercase">
                {t("about.mission.record_sub")}
              </p>
              <div className="mt-8 flex gap-2 opacity-20">
                {["♩","♪","♫","♬"].map((note, i) => (
                  <span key={i} className="text-[#b8860b] text-2xl">{note}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission