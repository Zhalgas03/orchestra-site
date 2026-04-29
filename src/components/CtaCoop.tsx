import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useReveal } from '../hooks/useReveal'

const Footer = () => {
    const labelRef = useReveal(0)
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#b8860b10_0%,_transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b8860b]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 pt-24 pb-8 relative z-10">

        {/* CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-16">
          <div>
                    <div ref={labelRef} className="reveal flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#b8860b]" />
          <span className="text-[#b8860b] text-xs tracking-[0.3em] uppercase font-medium">
            Сотрудничество
          </span>
        </div>

            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white leading-tight">
              Готовы создать музыку<br />
              <span className="text-[#b8860b] italic">вашего события?</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:min-w-[260px]">
            <a href="https://wa.me/77774743278" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
              Заказать выступление
              <i className="btn-arr fa-solid fa-arrow-right-long" />
            </a>
            <a href="tel:+77774743278" className="btn btn-ghost btn-lg">
              Связаться с нами
            </a>
          </div>
        </div>

        {/* 4 колонки */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12 border-t border-b border-white/[0.08]">

          {/* О нас */}
          <div className="flex flex-col gap-4">
            <img src={logo} alt="Dostar" className="h-28 w-28 opacity-80 mb-2" />
            <p className="text-sm text-white/40 leading-relaxed">
              Эстрадно-симфонический оркестр.<br />Астана, Казахстан.
            </p>
          </div>

          {/* Навигация */}
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-[0.3em] uppercase text-white/25">Навигация</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Главная', to: '/' },
                { label: 'Услуги', to: '/services' },
                { label: 'О нас', to: '/about' },
              ].map(({ label, to }) => (
                <Link key={to} to={to} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Услуги */}
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-[0.3em] uppercase text-white/25">Услуги</p>
            <div className="flex flex-col gap-3">
              {['Свадьбы', 'Корпоративы', 'Частные события'].map((s) => (
                <span key={s} className="text-sm text-white/50">{s}</span>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-[0.3em] uppercase text-white/25">Контакты</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+77774743278" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                +7 777 474 32 78
              </a>
              <a href="https://wa.me/77774743278" target="_blank" rel="noreferrer" className="text-sm text-[#b8860b]/80 hover:text-[#b8860b] transition-colors duration-200">
                WhatsApp
              </a>
              <span className="text-sm text-white/50">Астана, Казахстан</span>
            </div>
          </div>

        </div>

        {/* Копирайт */}
        <div className="flex justify-between items-center pt-8">
          <span className="text-white/15 text-xs tracking-widest uppercase">Dostar Orchestra</span>
          <span className="text-white/15 text-xs tracking-widest">© {new Date().getFullYear()}</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer