import { useEffect, useState, useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const ruRef = useRef<HTMLButtonElement>(null)
  const kkRef = useRef<HTMLButtonElement>(null)
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 })
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setAnimate(false)
    window.scrollTo({ top: 0, behavior: "instant" })
    const activeRef = i18n.language === "ru" ? ruRef : kkRef
    if (activeRef.current) {
      setSliderStyle({
        left: activeRef.current.offsetLeft,
        width: activeRef.current.offsetWidth,
      })
    }
  }, [location.pathname])

  useEffect(() => {
    const activeRef = i18n.language === "ru" ? ruRef : kkRef
    if (activeRef.current) {
      setSliderStyle({
        left: activeRef.current.offsetLeft,
        width: activeRef.current.offsetWidth,
      })
    }
  }, [i18n.language])

  const switchLang = (lang: string) => {
    setAnimate(true)
    i18n.changeLanguage(lang)
  }

  const handleHome = () => {
    setMenuOpen(false)
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate("/")
    }
  }

  const handleAbout = () => {
    setMenuOpen(false)
    if (location.pathname === "/about") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate("/about")
    }
  }

  const handleScrollTo = (id: string) => {
    setMenuOpen(false)
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    } else {
      navigate("/")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <header
        className={`
          w-full fixed top-0 left-0 z-50
          transition-all duration-300
          ${scrolled || menuOpen ? "bg-black/95 backdrop-blur-md" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto relative flex items-center px-6 py-4">

          {/* Лого */}
          <button onClick={handleHome} className="flex items-center cursor-pointer">
            <span className="font-serif text-xl font-light text-white tracking-widest uppercase">
              Dostar
            </span>
          </button>

          {/* Десктоп навигация */}
          <nav className="hidden md:flex gap-8 text-sm absolute left-1/2 -translate-x-1/2">
            <button
              onClick={handleHome}
              className={`relative pb-0.5 transition-colors duration-200 group cursor-pointer ${
                isActive("/") ? "text-white" : "text-white/50 hover:text-white"
              }`}
            >
              {t("nav.home")}
              <span className={`absolute bottom-0 left-0 h-px bg-[#b8860b] transition-all duration-300 ${
                isActive("/") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>

            <button
              onClick={() => handleScrollTo("services")}
              className={`relative pb-0.5 transition-colors duration-200 group cursor-pointer ${
                isActive("/services") ? "text-white" : "text-white/50 hover:text-white"
              }`}
            >
              {t("nav.services")}
              <span className="absolute bottom-0 left-0 h-px bg-[#b8860b] w-0 group-hover:w-full transition-all duration-300" />
            </button>

            <button
              onClick={handleAbout}
              className={`relative pb-0.5 transition-colors duration-200 group cursor-pointer ${
                isActive("/about") ? "text-white" : "text-white/50 hover:text-white"
              }`}
            >
              {t("nav.about")}
              <span className={`absolute bottom-0 left-0 h-px bg-[#b8860b] transition-all duration-300 ${
                isActive("/about") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>
          </nav>

          <div className="ml-auto flex items-center gap-4">
            {/* Переключатель языка */}
            <div className="relative flex bg-white/[0.04] border border-white/10 rounded-full overflow-hidden cursor-pointer">
              <div
                className="absolute top-0 bottom-0 bg-[#b8860b] rounded-full"
                style={{
                  left: sliderStyle.left,
                  width: sliderStyle.width,
                  transition: animate
                    ? "left 0.3s cubic-bezier(0.4,0,0.2,1), width 0.3s cubic-bezier(0.4,0,0.2,1)"
                    : "none",
                }}
              />
              <button
                ref={ruRef}
                onClick={() => switchLang("ru")}
                className={`relative z-10 text-[10px] tracking-[2px] px-3 py-1.5 cursor-pointer transition-colors duration-200 ${
                  i18n.language === "ru" ? "text-black font-medium" : "text-white/40 hover:text-white/70"
                }`}
              >
                РУ
              </button>
              <button
                ref={kkRef}
                onClick={() => switchLang("kk")}
                className={`relative z-10 text-[10px] tracking-[2px] px-3 py-1.5 cursor-pointer transition-colors duration-200 ${
                  i18n.language === "kk" ? "text-black font-medium" : "text-white/40 hover:text-white/70"
                }`}
              >
                ҚАЗ
              </button>
            </div>

            {/* Бургер — только мобилка */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
              aria-label="Меню"
            >
              <span className={`block w-6 h-px bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`} />
              <span className={`block w-6 h-px bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`} />
              <span className={`block w-6 h-px bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`} />
            </button>
          </div>

        </div>

        {/* Мобильное меню */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <nav className="flex flex-col px-6 pb-6 gap-5 border-t border-white/[0.06]">
            <button
              onClick={handleHome}
              className={`text-sm pt-5 text-left transition-colors duration-200 ${
                isActive("/") ? "text-white" : "text-white/50"
              }`}
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => handleScrollTo("services")}
              className="text-sm text-white/50 text-left transition-colors duration-200"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={handleAbout}
              className={`text-sm text-left transition-colors duration-200 ${
                isActive("/about") ? "text-white" : "text-white/50"
              }`}
            >
              {t("nav.about")}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar