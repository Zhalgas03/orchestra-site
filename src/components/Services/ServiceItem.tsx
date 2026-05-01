import { useTranslation } from "react-i18next"
import { useReveal } from "../../hooks/useReveal"

interface ServiceData {
  id: string
  num: string
}

interface Props {
  s: ServiceData
  i: number
  cur: number
  onSelect: (i: number) => void
}

const ServiceItem = ({ s, i, cur, onSelect }: Props) => {
  const { t } = useTranslation()
  const ref = useReveal(i * 150)

  return (
    <div
      ref={ref}
      onMouseEnter={() => onSelect(i)}
      onClick={() => onSelect(i)}
      className="reveal flex items-center border-b border-white/[0.06] py-8 cursor-pointer relative group"
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#b8860b] origin-bottom"
        style={{
          transform: i === cur ? "scaleY(1)" : "scaleY(0)",
          transition: "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      />
      <span
        className="w-14 flex-shrink-0 font-mono text-[11px] pl-5"
        style={{
          color: i === cur ? "rgba(184,134,11,0.7)" : "rgba(255,255,255,0.18)",
          transition: "color 0.3s",
        }}
      >
        {s.num}
      </span>
      <span
        className="font-serif text-xl font-light"
        style={{
          color: i === cur ? "white" : "rgba(255,255,255,0.4)",
          transform: i === cur ? "translateX(4px)" : "translateX(0)",
          transition: "color 0.3s, transform 0.35s",
        }}
      >
        {t(`services.items.${s.id}.title`)}
      </span>
      <span
        className="ml-auto text-[#b8860b] text-sm pr-6"
        style={{
          opacity: i === cur ? 1 : 0,
          transform: i === cur ? "translateX(0)" : "translateX(-8px)",
          transition: "opacity 0.3s, transform 0.3s",
        }}
      >
        →
      </span>
    </div>
  )
}

export default ServiceItem