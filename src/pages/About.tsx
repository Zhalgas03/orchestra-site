import Layout from "../components/Layout"
import Hero from "../components/features/about/Hero"
import Mission from "../components/features/about/Mission"
import Achievements from "../components/features/about/Achievements"
import Stars from "../components/features/about/Stars"
import Ensembles from "../components/features/about/Ensembles"
import CtaCoop from "../components/CtaCoop"

const About = () => {
  return (
    <Layout>
      <div className="bg-[#0a0a0a] text-white">
        <Hero />
        <Mission />
        <Achievements />
        <Stars />
        <Ensembles />
        <CtaCoop />
      </div>
    </Layout>
  )
}

export default About