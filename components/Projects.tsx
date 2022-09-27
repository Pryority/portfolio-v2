import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project as ProjectType } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    projects: ProjectType[]
}

export default function Projects({projects}: Props) {
    return (
    <div className='vwrap'>
        <h3 className='sectionTitle'>Projects</h3>
        <div className='w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin  md:scrollbar-thumb-lime-700/80'>
            {projects.map((project, i )=> (
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    key={i} 
                    className='flex flex-col w-screen flex-shrink-0 snap-center space-y-5 items-center justify-center p-8 md:p-32 h-screen'>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.62 }}
                        viewport={{ once: true }}
                        className='pt-20'
                    >
                    <div className='w-[208px] h-[104px] md:w-[240px] md:h-[160px] relative'>
                        <Image src={urlFor(project?.demoImage).url()}
                                alt="Picture of the author"
                                layout='fill'
                                className='projectImg rounded-sm'
                            />
                    </div>
                    </motion.div>
                    <div className='flex flex-col items-center space-y-4 md:space-y-6 px-0 max-w-xl'>
                        <h4 className='text-2xl md:text-4xl font-semibold text-center'> 
                            <span className='ul-gr'>
                                Case Study {i + 1} of {projects.length}:
                            </span>{" "}
                            {project.title}
                        </h4>
                        <div className='flex space-x-5 justify-center'>
                        {project.skills.map((skill)=> (
                            <div                                     
                                key={skill._id}
                                className='w-[24px] h-[24px] md:w-[40px] md:h-[40px] relative border-[0.62px] border-[#fffa] rounded-full'
                            >
                                <Image 
                                    src={urlFor(skill.image).url()} 
                                    layout='fill'
                                    alt={`Tech ${i+1}`}
                                    objectFit='contain'
                                    className='rounded-full'
                                />
                            </div>
                        ))}
                        </div>

                        <p className='text-xs tracking-wide md:leading-5 md:text-md text-center md:text-left md:px-4'>
                            {project.summary}
                        </p>
                        <div className='flex w-1/5 justify-center items-center'>
                            <a href={`/`} className='px-4 py-2 flex w-[64px] md:w-[80px] text-center justify-center rounded bg-lime-500 font-medium tracking-wider uppercase hover:opacity-90 hover:bg-lime-600 hover:text-stone-50 cursor-pointer'>View</a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
        {/* SKEW BG */}
        <div className='w-full absolute top-[30%] bg-[#8fe821]/10 left-0 h-[500px] -skew-y-12'/>
        
    </div>

  )
}