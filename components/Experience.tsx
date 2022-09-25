import React from 'react'
import { motion } from 'framer-motion'
import ExpCard from './ExpCard'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}
export default function WorkExperience({experiences}: Props) {
  console.log('EXPERIENCE:', experiences)
  return (
    <div className='vwrap'>
        <h3 className='sectionTitle'>
            Experience
        </h3>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='exp'>
        <div className='expCardList'>
            {experiences.map((exp)=> (
              <ExpCard 
                key={exp._id} 
                jobTitle={exp.jobTitle} 
                company={exp.company} 
                companyImage={exp.companyImage} 
                dateStarted={exp.dateStarted}
                dateEnded={exp.dateEnded}
                keyLearnings={exp.keyLearnings}
                skills={exp.skills}
              />
              // <p key={exp._id}>hello</p>
            ))}
        </div>
      </motion.div>
    </div>
      
  )
}