import React from 'react'
import { motion } from 'framer-motion'
import ExpCard from './ExpCard'

type Props = {}

export default function Experience({}: Props) {
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
            <ExpCard />
            <ExpCard />
            <ExpCard />
            <ExpCard />
        </div>
      </motion.div>
    </div>
      
  )
}