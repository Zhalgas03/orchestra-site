import heroImg from "../assets/2.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">

      {/* Фоновый gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_70%_50%,_#b8860b18_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_20%_80%,_#b8860b0d_0%,_transparent_55%)]" />

      {/* ФОНОВОЕ ИЗОБРАЖЕНИЕ — более видимое */}
      <img
        src={heroImg}
        alt=""
        className="
          absolute
          right-0 top-0
          h-full w-[55vw]
          object-cover
          scale-x-[-1]
          opacity-[0.18]
          pointer-events-none
          select-none
        "
        style={{ maskImage: 'linear-gradient(to left, transparent 0%, black 40%, black 100%)' }}
      />

      {/* Затемнение поверх фото */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Вертикальная золотая линия — декор */}
      <div className="absolute left-[calc(50%-1px)] top-0 w-px h-full bg-gradient-to-b from-transparent via-[#b8860b]/15 to-transparent hidden xl:block" />

      {/* Горизонтальные линии */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b8860b]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b8860b]/40 to-transparent" />

      {/* Вертикальная боковая линия */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#b8860b]/25 to-transparent" />

      {/* КОНТЕНТ */}
      <div className="container max-w-7xl mx-auto px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[80vh] py-32">

          {/* Левая колонка — заголовок */}
          <div>
            {/* Лейбл */}
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-12 bg-[#b8860b]" />
              <span className="text-[#b8860b] text-xs tracking-[0.3em] uppercase font-medium">
                Об оркестре
              </span>
            </div>

            {/* Большой заголовок */}
            <h1 className="font-serif font-light leading-[0.88] tracking-tight mb-8">
              <span className="block text-[clamp(3.5rem,8vw,7rem)] text-white">
                Оркестр
              </span>
              <span className="block text-[clamp(3.5rem,8vw,7rem)] text-[#b8860b] italic">
                «ДОСТАР»
              </span>
            </h1>

            {/* Подчёркивающая линия под заголовком */}
            <div className="flex items-center gap-4 mt-10">
              <div className="h-px w-24 bg-gradient-to-r from-[#b8860b] to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#b8860b]" />
            </div>
          </div>

          {/* Правая колонка — текст и кнопка */}
{/* Правая колонка */}
<div className="lg:pl-8 lg:border-l lg:border-white/10 space-y-8">



  <p className="text-white/65 text-lg leading-relaxed">
    Эстрадно-симфонический оркестр, объединяющий классическое мастерство
    и современное звучание — для концертов, мероприятий и торжеств
    любого масштаба.
  </p>

  {/* Статы — без Гиннесса */}
  <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-white/10">
  <div>
    <div className="text-[#b8860b] font-serif text-3xl font-light">100+</div>
    <div className="text-white/40 text-xs tracking-widest uppercase mt-1">
      Национальностей<br/>
      <span className="text-white/25 normal-case tracking-normal text-[10px]">рекорд Гиннесса</span>
    </div>
  </div>
  <div>
    <div className="text-[#b8860b] font-serif text-3xl font-light">4</div>
    <div className="text-white/40 text-xs tracking-widest uppercase mt-1">Формата<br/>
      <span className="text-white/25 normal-case tracking-normal text-[10px]">состава оркестра</span>
    </div>
  </div>
  <div>
    <div className="text-[#b8860b] font-serif text-2xl font-light leading-tight">Астана</div>
    <div className="text-white/40 text-xs tracking-widest uppercase mt-1">Казахстан</div>
  </div>
</div>

  
    
</div>

        </div>
      </div>

      {/* Декоративный нижний элемент — скролл-хинт */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-[#b8860b] to-transparent animate-pulse" />
      </div>

    </section>
  )
}

export default Hero