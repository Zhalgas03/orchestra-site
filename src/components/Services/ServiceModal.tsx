import type { Service } from "./services.data"

type Props = {
  service: Service
  onClose: () => void
}

const ServiceModal = ({ service, onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      
      {/* Фон */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Модалка */}
<div className="
  relative z-10 
  w-full max-w-xl 
  bg-[var(--bg-secondary)]
  border border-white/10 
  rounded-lg 
  p-10
  shadow-2xl
  animate-[scaleIn_0.35s_cubic-bezier(0.22,1,0.36,1)]
">

        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 
            text-gray-500 hover:text-white 
            text-lg
          "
        >
          ✕
        </button>

        {/* Заголовок */}
        <h3 className="text-3xl font-semibold mb-6">
          {service.title}
        </h3>

        {/* Линия */}
        <div className="w-12 h-[2px] bg-[var(--accent)] mb-6" />

        {/* Текст */}
        <p className="text-gray-300 leading-relaxed mb-10">
          {service.full}
        </p>

        {/* Кнопки */}
        <div className="flex items-center gap-6 pt-6">
          
          <a
            href={`https://wa.me/77774743278?text=${encodeURIComponent(
              `Здравствуйте! Интересует услуга: ${service.title}`
            )}`}
            target="_blank"
            className="
              px-6 py-3 
              bg-[var(--accent)] 
              text-black 
              font-medium
              rounded-md 
              hover:opacity-90 
              transition
            "
          >
            Заказать
          </a>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            Закрыть
          </button>

        </div>

      </div>
    </div>
  )
}

export default ServiceModal