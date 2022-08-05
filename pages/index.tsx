import type { NextPage } from 'next'
import Navbar from '../src/components/layout/navbar'
import Headers from '../src/components/layout/headers'
import Hero from '../src/components/heroSection'

const Home: NextPage = () => {
  return (
    <>
      <Headers title="Home page" />
      <main className=" border-2 overflow-hidden flex flex-col justify-center">
        <Navbar />
        <Hero />
      </main>
    </>
  )
}

export default Home
