import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import headshot from '../assets/matt.jpg'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen p-2 snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-lime-500/80'>
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
      <section id="contact" className='snap-start'>
        <Contact />
      </section>
      <Link href={'#hero'}>
        <footer className='sticky bottom-2 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <div className='w-10 h-10 filter grayscale hover:grayscale-0 cursor-pointer'>
              <Image src={headshot}
                alt="Picture of the author"
                layout='fill'
                className='object-cover rounded-full'
              />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
