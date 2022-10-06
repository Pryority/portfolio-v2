import type { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import headshot from '../assets/matt.jpg'
import WorkExperience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { PageInfo, Experience, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
}

const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen p-2 snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-lime-500/80'>
      <Head>
        <title>{"Matt's Portfolio"}</title>
      </Head>
      {/* ------------------------------ */}
      <Header socials={socials}/>
      {/* ------------------------------ */}
      <section id="hero" className='snap-center'>
        <Hero pageInfo={pageInfo} />
      </section>
      {/* ------------------------------ */}
      <section id='about' className='snap-start'>
        <About />
      </section>
      {/* ------------------------------ */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>
      {/* ------------------------------ */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>
      {/* ------------------------------ */}
      <section id='experience' className='snap-start'>
        <WorkExperience experiences={experiences} />
      </section>
      {/* ------------------------------ */}
      <section id="contact" className='snap-start'>
        <Contact />
      </section>
      {/* ------------------------------ */}
      <Link href={'#hero'}>
        <footer className='sticky bottom-2 w-full cursor-pointer z-30'>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    revalidate: 10
  }
}