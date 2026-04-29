import Layout from "../components/Layout"
import HomeHero from "../components/HomeHero"
import Services from "../components/Services/Services"
import CtaCoop from "../components/CtaCoop"

const Home = () => {
  return (
    <Layout>
      <div className="bg-[#0a0a0a] text-white">
        <HomeHero />
        <Services />
        <CtaCoop />
      </div>
    </Layout>
  )
}

export default Home