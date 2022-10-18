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
        <div className='w-screen h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin  md:scrollbar-thumb-lime-700/80'>
            {projects.map((project, i )=> (
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    key={i} 
                    className='flex flex-col w-screen flex-shrink-0 snap-center h-screen space-y-5 items-center justify-center p-8 md:pt-40'>
                    <div className='flex flex-col lg:flex-row lg:space-y-0 lg:space-x-8 items-center h-full space-y-4 md:space-y-6 px-0 max-w-xl lg:max-w-4xl justify-center'>
                        <div className='flex flex-col w-full space-y-4 justify-center items-center pt-40 lg:pt-0'>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.62 }}
                                viewport={{ once: true }}
                                className=''
                            >
                                <a href={`${project.link}`}>
                                <div className='w-[208px] h-[96px] md:w-[240px] md:h-[160px] lg:w-[450px] lg:h-[250px] relative'>
                                        <Image src={urlFor(project?.demoImage).url()}
                                                alt="Picture of the author"
                                                layout='fill'
                                                className='projectImg rounded-sm'
                                            />
                                    </div>
                                </a>
                                </motion.div>
                                
                                <a href={`${project?.link}`}>
                                    <h4 className='text-2xl md:text-4xl font-semibold text-center'> 
                                        {i + 1} of {projects.length}:
                                        {" "}
                                        <span className='ul-gr'>
                                            {project.title}
                                        </span>
                                    </h4>
                                </a>

                            <div className='flex space-x-5 justify-center'>
                                {project.skills.map((skill)=> (
                                    <div                                     
                                        key={skill._id}
                                        className='w-[32px] h-[32px] md:w-[48px] md:h-[48px] relative border-[0.62px] border-[#fffa] rounded-full'
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
                    </div>

                    <div className='flex overflow-auto justify-center items-start md:w-4/5 lg:w-full h-1/5 md:h-2/3 lg:h-5/6 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-lime-800/80'>
                            <p className='text-sm leading-5 tracking-wide md:leading-7 md:text-md text-left md:text-left md:text-xl md:px-4 pr-4 lg:leading-6 lg:tracking-wider'>
                                {project.summary}
                            </p>
                        </div>
                    </div>
                        <div className='flex w-1/5 justify-center items-center pb-8'>
                            <a href={`${project.link}`} className='px-4 py-2 flex w-[64px] md:w-[80px] text-center justify-center rounded bg-lime-500 font-medium tracking-wider uppercase hover:opacity-90 hover:bg-lime-600 hover:text-stone-50 cursor-pointer'>View</a>
                        </div>
                </motion.div>
            ))}
        </div>
        {/* SKEW BG */}
        <div className='w-full absolute top-[30%] bg-[#8fe821]/10 left-0 h-[500px] -skew-y-12'/>
        
    </div>

  )
}