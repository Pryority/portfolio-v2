import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
                
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}>
            <div className="social-icons flex items-center">
                <SocialIcon 
                    url='https://www.linkedin.com/in/pryor-matthew/' 
                    fgColor='gray' 
                    bgColor='transparent'/>
                <SocialIcon 
                    url='https://github.com/Pryority' 
                    fgColor='gray' 
                    bgColor='transparent'/>
            </div>
        </motion.div>
        <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
        >
            <SocialIcon network='email' fgColor='gray' bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-500'>
                Get in touch
            </p>
        </motion.div>
    </header>
)
}