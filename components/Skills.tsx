import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-evenly xl:space-y-0 mx-auto items-center snap-center'>
        <h3 className='sectionTitle'>
            Skills
        </h3>    
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>

        <div className='grid grid-cols-3 gap-4 md:gap-6 items-center pt-24 md:pt-32'>
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
        </div>
    </motion.div>
  )
}