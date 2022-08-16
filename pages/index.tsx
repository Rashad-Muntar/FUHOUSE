import type { NextPage } from 'next'
import Navbar from '../src/components/layout/navbar'
import Headers from '../src/components/layout/headers'
import Hero from '../src/components/Homepage/heroSection'
import Testimony from '../src/components/Homepage/testimony'
import Partners from '../src/components/Homepage/partners'
import HowItWorks from '../src/components/Homepage/howItWorks'
import Locations from '../src/components/Homepage/locations'
import Recommendations from '../src/components/Homepage/receommendations'

const Home: NextPage = () => {
  return (
    <>
      <Headers title="Home page" />
      <div className="overflow-hidden flex flex-col justify-center">
        <Navbar />
        <Hero />
        <Testimony />
        <Partners />
        <HowItWorks />
        <Locations />
        <Recommendations />
      </div>
    </>
  )
}

export default Home
