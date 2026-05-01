import { useRef, useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

const NOTES = ['♩','♪','♫','♬']

const MiniPlayer = ({ src = "/audio/showreel.mp3" }) => {
  const { t } = useTranslation()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [notes, setNotes] = useState<{ id: number; note: string; x: number; size: number }[]>([])
  const [ripple, setRipple] = useState(false)
  const circumference = 157

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    setRipple(true)
    setTimeout(() => setRipple(false), 500)
    if (audio.paused) { audio.play(); setPlaying(true) }
    else { audio.pause(); setPlaying(false) }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onTime = () => setProgress(audio.currentTime / (audio.duration || 1))
    const onEnd = () => { setPlaying(false); setProgress(0) }
    audio.addEventListener("timeupdate", onTime)
    audio.addEventListener("ended", onEnd)
    return () => {
      audio.removeEventListener("timeupdate", onTime)
      audio.removeEventListener("ended", onEnd)
    }
  }, [])

  useEffect(() => {
    if (!playing) return
    const interval = setInterval(() => {
      const id = Date.now()
      const note = NOTES[Math.floor(Math.random() * 4)]
      const x = 8 + Math.random() * 30
      const size = 11 + Math.random() * 5
      setNotes(n => [...n, { id, note, x, size }])
      setTimeout(() => setNotes(n => n.filter(i => i.id !== id)), 2000)
    }, 600)
    return () => clearInterval(interval)
  }, [playing])

  return (
    <>
      <audio ref={audioRef} src={src} preload="none" />

      <style>{`
        @keyframes noteFly {
          0%   { opacity: 0; transform: translateY(0) scale(0.7) rotate(-10deg); }
          15%  { opacity: 1; }
          80%  { opacity: 0.6; }
          100% { opacity: 0; transform: translateY(-52px) scale(1.1) rotate(12deg); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.55; }
          70%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        @keyframes idle-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(184,134,11,0.0),  0 0 14px 2px rgba(184,134,11,0.25); }
          50%       { box-shadow: 0 0 0 8px rgba(184,134,11,0.0), 0 0 22px 6px rgba(184,134,11,0.45); }
        }
        @keyframes ripple-out {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes eq {
          0%, 100% { height: 6px; }
          50%       { height: 18px; }
        }
        .note-fly { animation: noteFly 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .pulse-ring { animation: pulse-ring 1.8s cubic-bezier(0.215, 0.61, 0.355, 1) infinite; }
        .idle-glow  { animation: idle-glow 2.2s ease-in-out infinite; }
        .ripple-out { animation: ripple-out 0.5s ease-out forwards; }
        .bar { animation: eq 0.8s ease-in-out infinite; }
      `}</style>

      <div className="fixed bottom-7 right-7 z-50 flex flex-col items-center gap-1.5">

        {/* Ноты */}
        <div className="relative w-16 h-4 pointer-events-none">
          {notes.map(({ id, note, x, size }) => (
            <span
              key={id}
              className="absolute bottom-0 note-fly select-none"
              style={{
                right: `${x}px`,
                color: "#b8860b",
                fontSize: `${size}px`,
                textShadow: "0 0 8px rgba(184,134,11,0.6)",
              }}
            >
              {note}
            </span>
          ))}
        </div>

        {/* Кнопка */}
        <div className="relative w-[60px] h-[60px] flex items-center justify-center">

          {/* Пульсирующее кольцо — только когда не играет */}
          {!playing && (
            <span
              className="pulse-ring absolute inset-0 rounded-full border border-[#b8860b]/50 pointer-events-none"
            />
          )}

          {/* Волна при клике */}
          {ripple && (
            <span
              className="ripple-out absolute inset-0 rounded-full bg-[#b8860b]/30 pointer-events-none"
            />
          )}

          {/* Прогресс-кольцо */}
          <svg width="60" height="60" viewBox="0 0 60 60"
            className="absolute top-0 left-0 -rotate-90 pointer-events-none">
            <circle cx="30" cy="30" r="25" fill="none"
              stroke="rgba(184,134,11,0.15)" strokeWidth="2.5" />
            <circle cx="30" cy="30" r="25" fill="none"
              stroke="#b8860b" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress * circumference}
              style={{ transition: "stroke-dashoffset 0.3s linear" }}
            />
          </svg>

          {/* Сама кнопка */}
          <button
            onClick={toggle}
            className={[
              "absolute inset-0 rounded-full flex items-center justify-center z-10",
              "transition-all duration-200 active:scale-90",
              playing
                ? "bg-[#b8860b] hover:bg-[#d4a017]"
                : "bg-[#b8860b] hover:bg-[#d4a017] idle-glow",
            ].join(" ")}
          >
            {playing ? (
              <div className="flex items-end gap-[3px] h-[18px]">
                {[0, 130, 60, 190].map((delay, i) => (
                  <span
                    key={i}
                    className="bar w-[3px] bg-black rounded-sm"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="#0d0d0d">
                <polygon points="5,3 15,9 5,15" />
              </svg>
            )}
          </button>
        </div>

        {/* Подпись */}
        <span
          className="text-[10px] tracking-widest transition-colors duration-300"
          style={{ color: playing ? "rgba(184,134,11,0.9)" : "rgba(184,134,11,0.55)" }}
        >
          {playing ? t("player.playing") : t("player.listen")}
        </span>
      </div>
    </>
  )
}

export default MiniPlayer