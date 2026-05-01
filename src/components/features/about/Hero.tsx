import { useTranslation } from "react-i18next"
import heroImg from "../../../assets/2.jpg"

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_70%_50%,_#b8860b18_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_20%_80%,_#b8860b0d_0%,_transparent_55%)]" />
      <img src={heroImg} alt=""
        className="absolute right-0 top-0 h-full w-[55vw] object-cover scale-x-[-1] opacity-[0.18] pointer-events-none select-none"
        style={{ maskImage: 'linear-gradient(to left, transparent 0%, black 40%, black 100%)' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="absolute left-[calc(50%-1px)] top-0 w-px h-full bg-gradient-to-b from-transparent via-[#b8860b]/15 to-transparent hidden xl:block" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b8860b]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b8860b]/40 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#b8860b]/25 to-transparent" />

      <div className="container max-w-7xl mx-auto px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[80vh] py-32">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-12 bg-[#b8860b]" />
              <span className="text-[#b8860b] text-xs tracking-[0.3em] uppercase font-medium">
                {t("about.hero.label")}
              </span>
            </div>
            <h1 className="font-serif font-light leading-[0.88] tracking-tight mb-8">
              <span className="block text-[clamp(3.5rem,8vw,7rem)] text-white">
                {t("about.hero.title1")}
              </span>
              <span className="block text-[clamp(3.5rem,8vw,7rem)] text-[#b8860b] italic">
                {t("about.hero.title2")}
              </span>
            </h1>
            <div className="mt-10">
              <div className="h-px w-24 bg-gradient-to-r from-[#b8860b] to-transparent" />
            </div>
          </div>

          <div className="lg:pl-8 lg:border-l lg:border-white/10 space-y-8">
            <p className="text-white/65 text-lg leading-relaxed">{t("about.hero.desc")}</p>
            <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-white/10">
              <div>
                <div className="text-[#b8860b] font-serif text-3xl font-light leading-none mb-1.5">100+</div>
                <div className="text-white/40 text-[11px] tracking-widest uppercase leading-none mb-0.5">{t("about.hero.stat1_label")}</div>
                <div className="text-white/25 text-[10px] leading-none">{t("about.hero.stat1_sub")}</div>
              </div>
              <div>
                <div className="text-[#b8860b] font-serif text-3xl font-light leading-none mb-1.5">4</div>
                <div className="text-white/40 text-[11px] tracking-widest uppercase leading-none mb-0.5">{t("about.hero.stat2_label")}</div>
                <div className="text-white/25 text-[10px] leading-none">{t("about.hero.stat2_sub")}</div>
              </div>
              <div>
                <div className="text-[#b8860b] font-serif text-3xl font-light leading-none mb-1.5">Астана</div>
                <div className="text-white/40 text-[11px] tracking-widest uppercase leading-none">{t("about.hero.stat3_label")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-[#b8860b] to-transparent animate-pulse" />
      </div>
    </section>
  )
}

export default Hero