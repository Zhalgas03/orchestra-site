import Layout from "../components/Layout"
import Hero from "../components/features/about/Hero"
import Mission from "../components/features/about/Mission"
import Achievements from "../components/features/about/Achievements"
import Stars from "../components/features/about/Stars"
import Ensembles from "../components/features/about/Ensembles"

const About = () => {
  return (
    <Layout>
      <div className="bg-[#0a0a0a] text-white">
        <Hero />
        <Mission />
        <Achievements />
        <Stars />
        <Ensembles />

        {/* CTA секция */}
        <section className="relative overflow-hidden py-32">
          {/* Декоративный фон */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#b8860b12_0%,_transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b8860b]/30 to-transparent" />

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-[#b8860b]" />
                  <span className="text-[#b8860b] text-xs tracking-[0.3em] uppercase font-medium">
                    Сотрудничество
                  </span>
                </div>
                <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light text-white leading-tight">
                  Готовы создать музыку<br />
                  <span className="text-[#b8860b] italic">вашего события?</span>
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-4 bg-[#b8860b] text-black px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#d4a017] transition-all duration-300"
                >
                  Заказать выступление
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <a
                  href="tel:+77000000000"
                  className="inline-flex items-center gap-4 border border-white/20 text-white/70 px-8 py-4 text-sm tracking-widest uppercase hover:border-white/40 hover:text-white transition-all duration-300"
                >
                  Позвонить нам
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About