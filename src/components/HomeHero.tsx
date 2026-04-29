import heroImg from "../assets/1.jpeg"
import { useReveal } from "../hooks/useReveal"

const HomeHero = () => {
  const labelRef = useReveal(0)
  const titleRef = useReveal(120)
  const textRef = useReveal(240)
  const buttonsRef = useReveal(360)

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black">

      {/* Фон */}
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-45 pointer-events-none select-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b8860b]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b8860b]/30 to-transparent" />

      {/* Контент */}
      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">

        {/* Лейбл */}
        <div ref={labelRef} className="reveal flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-[#b8860b]" />
          <span className="text-[#b8860b] text-xs tracking-[0.3em] uppercase font-medium">
            Эстрадно-симфонический оркестр «Достар»
          </span>
        </div>

        {/* Заголовок */}
        <h1
          ref={titleRef}
          className="reveal font-serif font-light leading-[0.92] tracking-tight mb-8"
        >
          <span className="block text-[clamp(2.2rem,4.5vw,4rem)] text-white">
            Музыка, которая
          </span>
          <span className="block text-[clamp(2.2rem,4.5vw,4rem)] text-[#b8860b] italic">
            создаёт атмосферу
          </span>
        </h1>

        {/* Подзаголовок */}
        <p
          ref={textRef}
          className="reveal text-white/50 text-base leading-relaxed mb-12 max-w-sm"
        >
          Живое выступление оркестра для свадеб,
          мероприятий и концертов любого масштаба
        </p>

      
{/* CTA */}
<div ref={buttonsRef} className="reveal flex items-center gap-5 mt-5">
  <a href="#services" className="btn btn-primary btn-lg">
    Заказать выступление
    <span className="btn-arr" />
  </a>
  <a href="/about" className="btn btn-secondary btn-lg">
    Об оркестре
  </a>
</div>

      </div>

      {/* Скролл-хинт */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-px h-10 bg-gradient-to-b from-[#b8860b] to-transparent animate-pulse" />
      </div>

    </section>
  )
}

export default HomeHero