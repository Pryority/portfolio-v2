import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className={'bg-[rgb(36,36,36)] text-white h-screen p-2 snap-y snap-mandatory overflow-scroll z-0'}>
      <Head>
        <title>{"Matt's Portfolio"}</title>
      </Head>
      <Header/>
      {/* <HERO></HERO> */}
      <section id="hero" className='snap-center'>
        <Hero />
      </section>
      {/* ABOUT  */}
      <section id='about' className='snap-start'>
        <About />
      </section>
    </div>
  )
}

export default Home
