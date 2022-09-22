import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const plc ='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'

type Props = {}

export default function Projects({}: Props) {
    const projects = [1,2,3,4,5]
    return (
    <div className='vwrap'>
        <h3 className='sectionTitle'>Projects</h3>
        <div className='w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project, i )=> (
                <div key={i} className='flex flex-col w-screen flex-shrink-0 snap-center space-y-5 items-center justify-center p-8 md:p-44 h-screen'>
                    <motion.div
                        initial={{ opacity: 0, y: 300 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className='pt-32'
                    >
                        <Image src={plc}
                            alt="Picture of the author"
                            height={264}
                            width={350}
                            className='fullImg'
                            />
                    </motion.div>
                    <div className='space-y-4 md:space-y-8 md:space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-2xl md:text-4xl font-semibold text-center'> 
                            <span className='ul-gr'>
                                Case Study {i + 1} of {projects.length}:
                            </span>{" "}
                            Athleague
                        </h4>
                        <p className='text-sm tracking-wide md:text-lg text-center md:text-left'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fuga, reiciendis obcaecati sequi nobis impedit ipsa autem ut. Dolor velit repellat assumenda aut, delectus mollitia placeat maxime error aperiam aspernatur vero officia nesciunt, nobis nemo minus odit at quas excepturi iure, quae incidunt architecto quasi amet accusamus. Aperiam, nihil modi!
                        </p>
                    </div>
                </div>
            ))}
        </div>
        {/* SKEW BG */}
        <div className='w-full absolute top-[30%] bg-[#8fe821]/10 left-0 h-[500px] -skew-y-12'/>
    </div>

  )
}