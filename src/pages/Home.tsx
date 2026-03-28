import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services/Services"

const Home = () => {
  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-main)] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
    </div>
  )
}

export default Home