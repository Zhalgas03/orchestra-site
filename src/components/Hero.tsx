import heroImg from "../assets/1.jpeg"

const Hero = () => {
  return (
    <section id="hero" className="relative h-[70vh] w-full">
      
      {/* Фон */}
      <img
        src={heroImg}
        alt="оркестр"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Контент */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Музыка, которая создаёт атмосферу вашего события
          </h1>

          <p className="text-gray-300 mb-8">
            Живое выступление оркестра для свадеб, мероприятий и концертов
          </p>
<br />
<a
  href="#services"
  className="
    cursor-pointer 
    border border-white/40 
    px-6 py-3 
    rounded-md 
    hover:bg-white hover:text-black 
    transition 
    inline-block 
    active:scale-95
  "
>
  Заказать выступление
</a>


        </div>
      </div>

    </section>
  )
}

export default Hero