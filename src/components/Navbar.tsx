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
    navigate("/")
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
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
<div className="max-w-7xl mx-auto flex items-center px-8 py-3">
  {/* Лого */}
  <Link to="/" className="flex items-center gap-1 w-[120px]">
    <span className="font-serif text-xl font-light text-white tracking-widest uppercase">
      Dostar
    </span>
  </Link>

  {/* Навигация — теперь истинно по центру */}
  <nav className="hidden md:flex gap-8 text-sm text-gray-300 mx-auto">
    <Link to="/" className="hover:text-white transition">Главная</Link>
    <button onClick={() => handleScrollTo("services")} className="hover:text-white transition">
      Услуги
    </button>
    <Link to="/about" className="hover:text-white transition">О нас</Link>
  </nav>

  {/* Спейсер — уравновешивает лого слева */}
  <div className="w-[120px]" />
</div>
    </header>
  )
}

export default Navbar