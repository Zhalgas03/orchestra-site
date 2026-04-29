import { useState, useRef, useEffect } from "react"
import { achievements } from "./data"
import { useReveal } from "../../../hooks/useReveal"

const Achievements = () => {
  const [cur, setCur] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState(340)

  const headerRef   = useReveal(0)
  const carouselRef = useReveal(150)
  const dotsRef     = useReveal(250)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth
        setCardWidth(Math.min(340, w - 32))
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  useEffect(() => {
    if (trackRef.current) {
      const GAP = 16
      trackRef.current.style.transform = `translateX(-${cur * (cardWidth + GAP)}px)`
    }
  }, [cur, cardWidth])

  const goTo = (i: number) =>
    setCur(Math.max(0, Math.min(achievements.length - 1, i)))

  const getCardStyle = (idx: number) => {
    const diff = Math.abs(idx - cur)
    if (diff === 0) return { transform: "scale(1)", opacity: 1, filter: "blur(0px)" }
    if (diff === 1) return { transform: "scale(0.93)", opacity: 0.4, filter: "blur(0.4px)" }
    return { transform: "scale(0.87)", opacity: 0.18, filter: "blur(0.8px)" }
  }

  return (
    <section className="border-b border-white/10 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#b8860b0d_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-8">

        <div ref={headerRef} className="reveal flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#b8860b]" />
              <span className="text-[#b8860b] text-xs tracking-[0.3em] uppercase font-medium">
                Достижения
              </span>
            </div>
            <h2 className="font-serif text-5xl text-white font-light">
              Наша история
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => goTo(cur - 1)}
              disabled={cur === 0}
              className="group relative w-14 h-14 flex items-center justify-center transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <span className={`absolute inset-0 border transition-colors duration-300
                ${cur === 0 ? "border-white/10" : "border-white/20 group-hover:border-[#b8860b]"}`} />
              <span className="absolute top-0 left-0 w-3 h-px bg-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute top-0 left-0 w-px h-3 bg-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-0 right-0 w-3 h-px bg-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-0 right-0 w-px h-3 bg-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none"
                className={`transition-all duration-300 group-hover:-translate-x-0.5
                  ${cur === 0 ? "text-white/20" : "text-white/50 group-hover:text-[#b8860b]"}`}>
                <path d="M7 1L1 6L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="1" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            <button
              onClick={() => goTo(cur + 1)}
              disabled={cur >= achievements.length - 1}
              className="group relative w-14 h-14 flex items-center justify-center transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <span className={`absolute inset-0 border transition-colors duration-300
                ${cur >= achievements.length - 1 ? "border-white/10" : "border-white/20 group-hover:border-[#b8860b]"}`} />
              <span className="absolute top-0 right-0 w-3 h-px bg-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute top-0 right-0 w-px h-3 bg-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-0 left-0 w-3 h-px bg-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-0 left-0 w-px h-3 bg-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none"
                className={`transition-all duration-300 group-hover:translate-x-0.5
                  ${cur >= achievements.length - 1 ? "text-white/20" : "text-white/50 group-hover:text-[#b8860b]"}`}>
                <path d="M11 1L17 6L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="17" y1="6" x2="1" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div ref={carouselRef} className="reveal">
          <div ref={containerRef} className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-4"
              style={{ transition: "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
            >
              {achievements.map((a, idx) => (
                <div
                  key={a.num}
                  onClick={() => goTo(idx)}
                  style={{
                    minWidth: `${cardWidth}px`,
                    maxWidth: `${cardWidth}px`,
                    transition: "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.55s ease, filter 0.55s ease",
                    ...getCardStyle(idx),
                  }}
                  className={`flex-shrink-0 border p-8 cursor-pointer group relative overflow-hidden
                    ${idx === cur
                      ? "border-[#b8860b]/60 bg-[#b8860b]/5"
                      : "border-white/[0.08] bg-white/[0.02]"}`}
                >
                  <div className={`absolute top-0 right-0 w-12 h-px transition-colors duration-300
                    ${idx === cur ? "bg-[#b8860b]" : "bg-transparent"}`} />
                  <div className={`absolute top-0 right-0 w-px h-12 transition-colors duration-300
                    ${idx === cur ? "bg-[#b8860b]" : "bg-transparent"}`} />
                  <div className={`font-serif text-7xl font-light mb-6 leading-none transition-colors duration-300
                    ${idx === cur ? "text-[#b8860b]" : "text-white/15"}`}>
                    {a.num}
                  </div>
                  <h3 className="text-white text-lg font-medium mb-3 leading-snug">{a.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={dotsRef} className="reveal flex items-center gap-3 mt-8">
          {achievements.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full
                ${i === cur ? "w-8 h-1 bg-[#b8860b]" : "w-1 h-1 bg-white/25 hover:bg-white/50"}`}
            />
          ))}
          <span className="ml-auto text-white/25 text-xs font-mono">
            {String(cur + 1).padStart(2, "0")} / {String(achievements.length).padStart(2, "0")}
          </span>
        </div>

      </div>
    </section>
  )
}

export default Achievements