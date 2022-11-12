import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project as ProjectType } from "../typings";
import { urlFor } from "../sanity";

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
            className='flex flex-col w-screen flex-shrink-0 snap-center h-screen space-y-5 items-center justify-center px-6 md:px-0 pt-6 md:pt-16'
          >
            <div className='flex flex-col md:flex-row lg:space-y-0 items-center h-full space-y-4 md:space-x-6 px-0 max-w-xl md:max-w-2xl lg:max-w-5xl w-full justify-center'>
              <div className='flex flex-col w-full space-y-4 justify-center items-center pt-24 lg:pt-0'>
                {/* -↓- IMAGE -↓- */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.62 }}
                  viewport={{ once: true }}
                  className='justify-center items-center flex flex-col w-full'
                >
                  <a href={`${project.link}`}>
                    <div>
                      <p className='text-xs text-center leading-2 pb-2 tracking-wide opacity-75 md:px-4 pr-4 lg:tracking-wider'>
                        {project.status}
                      </p>
                    </div>
                    <div className='w-full h-32 md:h-[200px] lg:w-[500px] lg:h-[300px] object-cover justify-center items-center flex relative'>
                      <Image src={urlFor(project?.demoImage).url()}
                        alt="Picture of the author"
                        layout='fill'
                        className='projectImg rounded-sm'
                      />
                    </div>
                  </a>
                </motion.div>
                {/* -↑- IMAGE -↑- */}
                                
                {/* -↓- TITLE -↓- */}
                <a href={`${project?.link}`}>
                  <h4 className='text-2xl md:text-4xl font-semibold text-center'> 
                    {i + 1} of {projects.length}:
                    {" "}
                    <span className='ul-gr'>
                      {project.title}
                    </span>
                  </h4>
                </a>
                {/* -↑- TITLE -↑- */}

                {/* -↓- BADGES -↓- */}
                <div className='flex space-x-5 justify-center'>
                  {project.skills.map((skill, i)=> (
                    <div key={skill._id} className='flex flex-col'>
                      <div                                     
                        className='w-[32px] h-[32px] md:w-[56px] md:h-[48px] relative border-[0.62px] border-[#fffa] rounded-full'
                      >
                        <Image 
                          src={urlFor(skill.image).url()} 
                          layout='fill'
                          alt={`Tech ${i+1}`}
                          objectFit='contain'
                          className='rounded-full'
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* -↑- BADGES -↑- */}
              </div>

              {/* -↓- SUMMARY -↓- */}
              <div className="md:p-2">
                <div className='flex flex-col justify-center items-center space-y-8 max-h-[200px] md:h-fit md:max-h-[350px] lg:max-h-[450px] text-slate-100 bg-black/70 md:bg-black/90 backdrop-blur-md p-3 md:p-4 rounded-sm border border-slate-600/50'>
                  <div className='flex overflow-auto justify-center items-start lg:w-full h-full scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-lime-800/80'>
                    <div className="flex flex-col items-center h-full">
                      <p className='text-sm leading-5 tracking-wider md:text-md text-left md:text-left md:text-xl lg:leading-8 lg:tracking-wider'>
                        {project.summary}
                      </p>
                    </div>
                  </div>
                  <div className='flex w-full justify-center items-center'>
                    <a href={`${project.link}`} className='view-btn'>View</a>
                  </div>
                </div>
              </div>
              {/* -↑- SUMMARY -↑- */}
            </div>
          </motion.div>
        ))}
      </div>
      {/* SKEW BG */}
      <div className='w-full absolute top-[30%] bg-[#8fe821]/10 left-0 h-[500px] -skew-y-12'/>
    </div>

  );
}