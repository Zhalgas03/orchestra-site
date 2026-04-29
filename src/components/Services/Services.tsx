import { useState } from "react"
import { services } from "./services.data"
import { useReveal } from "../../hooks/useReveal"
import ServiceItem from "./ServiceItem"

const Services = () => {
  const [cur, setCur] = useState(0)
  const [fading, setFading] = useState(false)
  const [displayed, setDisplayed] = useState(0)

  const labelRef = useReveal(0)
  const layoutRef = useReveal(120)

  const handleSelect = (i: number) => {
    if (i === cur) return
    setFading(true)
    setTimeout(() => {
      setDisplayed(i)
      setCur(i)
      setFading(false)
    }, 350)
  }

  const e = services[displayed]

  return (
    <section id="services" className="border-b border-white/10 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#b8860b07_0%,_transparent_55%)]" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        {/* Лейбл */}
        <div ref={labelRef} className="reveal flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-[#b8860b]" />
          <span className="text-[#b8860b] text-xs tracking-[0.3em] uppercase font-medium">
            Услуги
          </span>
        </div>

        <div ref={layoutRef} className="reveal grid lg:grid-cols-2 gap-0">

          {/* Левая — список */}
          <div className="border-r border-white/[0.07] pr-0">
            {services.map((s, i) => (
              <ServiceItem
                key={s.id}
                s={s}
                i={i}
                cur={cur}
                onSelect={handleSelect}
              />
            ))}
          </div>

          {/* Правая — детали */}
          <div
            className="pl-14 flex flex-col justify-center relative"
            style={{ minHeight: "420px", height: "420px" }}
          >
            <div
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(12px)" : "translateY(0)",
                transition: "opacity 0.35s ease, transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
              }}
            >
              {/* Тег */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-5 bg-[#b8860b]" />
                <span className="text-[#b8860b] text-[10px] tracking-[0.28em] uppercase font-medium">
                  Услуга {e.num}
                </span>
              </div>

              {/* Заголовок */}
              <h3 className="font-serif text-3xl font-light text-white leading-tight mb-6 tracking-tight">
                {e.title}
              </h3>

              <div className="h-px bg-white/[0.07] mb-6" />

              {/* Текст */}
              <p className="text-white/50 text-sm leading-[1.8] mb-8 max-w-xs">
                {e.full}
              </p>

              {/* Кнопка */}
              <a
                href={`https://wa.me/77774743278?text=${encodeURIComponent(
                  `Здравствуйте! Интересует услуга: ${e.title}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-5"
              >
                Оставить заявку
                <i className="btn-arr fa-solid fa-arrow-right-long" />
              </a>
            </div>

            {/* Декоративная цифра */}
            <div
              className="absolute bottom-0 right-0 font-serif font-light leading-none pointer-events-none select-none"
              style={{
                fontSize: "96px",
                color: "rgba(255,255,255,0.025)",
                opacity: fading ? 0 : 1,
                transition: "opacity 0.35s ease",
              }}
            >
              {e.num}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services