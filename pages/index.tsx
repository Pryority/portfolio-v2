import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen p-2 snap-y snap-mandatory overflow-scroll z-0'>
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
      <section id='experience' className='snap-start'>
        <Experience />
      </section>
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
    </div>
  )
}

export default Home
