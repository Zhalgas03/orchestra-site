import { useEffect, useState } from "react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
        w-full fixed top-0 left-0 z-50
        transition-all duration-300
        ${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Лого */}
        <div className="text-xl font-semibold tracking-wide text-white">
          Orchestra
        </div>

        {/* Навигация */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#hero" className="hover:text-white transition">
            Главная
          </a>
          <a href="#services" className="hover:text-white transition">
            Услуги
          </a>
          <a href="#about" className="hover:text-white transition">
            О нас
          </a>
          <a href="#contact" className="hover:text-white transition">
            Контакты
          </a>
        </nav>

        {/* Кнопка */}
        <a
          href="#services"
          className="cursor-pointer border border-white/40 text-white px-5 py-2 rounded-md text-sm hover:bg-white hover:text-black transition inline-block active:scale-95"
        >
          Заказать
        </a>

      </div>
    </header>
  )
}

export default Navbar