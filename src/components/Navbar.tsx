import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollTo = (id: string) => {
    navigate("/") // сначала идём на главную

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      })
    }, 100)
  }

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
        <Link to="/" className="text-xl font-semibold tracking-wide text-white">
          Dostar
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link to="/" className="hover:text-white transition">
            Главная
          </Link>

          {/* 🔥 ВОТ ТАК МЕНЯЕМ */}
          <button
            onClick={() => handleScrollTo("services")}
            className="hover:text-white transition"
          >
            Услуги
          </button>

          <Link to="/about" className="hover:text-white transition">
            О нас
          </Link>

          <button
            onClick={() => handleScrollTo("contact")}
            className="hover:text-white transition"
          >
            Контакты
          </button>
        </nav>

        {/* Кнопка */}
        <button
          onClick={() => handleScrollTo("services")}
          className="cursor-pointer border border-white/40 text-white px-5 py-2 rounded-md text-sm hover:bg-white hover:text-black transition inline-block active:scale-95"
        >
          Заказать
        </button>
      </div>
    </header>
  )
}

export default Navbar