import type { NextPage } from 'next'
import Navbar from '../src/components/layout/navbar'
import Headers from '../src/components/layout/headers'

const Home: NextPage = () => {
  return (
    <div>
      <Headers title="Home page" />
      <main className="w-screen overflow-hidden">
        <Navbar />
      </main>
    </div>
  )
}

export default Home
