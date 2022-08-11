import type { NextPage } from 'next'
import Navbar from '../src/components/layout/navbar'
import Headers from '../src/components/layout/headers'
import Hero from '../src/components/Homepage/heroSection'
import Testimony from '../src/components/Homepage/testimony'
import Partners from '../src/components/Homepage/partners'
import HowItWorks from '../src/components/Homepage/howItWorks'
const Home: NextPage = () => {
  return (
    <>
      <Headers title="Home page" />
      <main className="overflow-hidden flex flex-col justify-center">
        <Navbar />
        <Hero />
        <Testimony />
        <Partners />
        <HowItWorks />
      </main>
    </>
  )
}

export default Home
