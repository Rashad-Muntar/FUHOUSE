import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../src/layout/navbar'
import Headers from '../src/headers'

const Home: NextPage = () => {
  return (
    <div >
      <Headers title='Home page'/>
      <main className='text-3xl font-bold underline'>
        <Navbar />
      </main>

    </div>
  )
}

export default Home
