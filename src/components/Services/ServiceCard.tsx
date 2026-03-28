import type { Service } from "./services.data"

type Props = {
  service: Service
  onClick: () => void
}

const ServiceCard = ({ service, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="
        group cursor-pointer 
        border border-white/10 
        p-8 rounded-md 
        bg-transparent
        hover:bg-white/[0.03]
        hover:border-white/30
        transition duration-300
        hover:-translate-y-1
      "
    >
      {/* Заголовок */}
      <h3 className="
        text-xl font-semibold mb-4 
        group-hover:translate-x-1 
        transition
      ">
        {service.title}
      </h3>

      {/* Описание */}
      <p className="text-gray-400 leading-relaxed mb-6">
        {service.short}
      </p>

      {/* Подробнее */}
      <div className="
        text-sm text-[var(--accent)] 
        opacity-0 group-hover:opacity-100 
        transition
        flex items-center gap-2 pt-3
      ">
        Подробнее
        <span className="group-hover:translate-x-1 transition">
          →
        </span>
      </div>
    </div>
  )
}

export default ServiceCard