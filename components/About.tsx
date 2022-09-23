import React from 'react'
import Image from 'next/image'
import dai from '../assets/dai.jpg'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='vwrap'>
        <h3 className='sectionTitle'>
            About
        </h3>
        <div className='flex flex-col justify-center items-center absolute md:max-w-3xl lg:max-w-6xl h-full pt-40'>
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative text-center md:text-left md:flex-row max-w-7xl  px-4 justify-start mx-auto items-center space-y-4 h-full'>
            <motion.div
                initial={{
                    y: 50,
                    opacity: 0
                }}
                whileInView={{ opacity: 1, y: 0}}
                // viewport={{ once: true }}
                transition={{
                    duration: 1.2
                }}
                className='relative flex-shrink-0 h-24 w-24 md:w-32 md:h-32 lg:w-48 lg:h-48'
            >
                <Image 
                    src={dai}
                    alt="Matthew in Hokkaido"
                    layout='fill'
                    className='object-cover absolute mx-auto md:mb-0 rounded-full'
                />
            </motion.div>
            <div className='space-y-8 px-0 md:px-10 items-center md:items-start justify-start flex flex-col h-full md:h-fit'>
                <h4 className='text-4xl font-semibold'>
                    A{" "}<span className='ul-gr-2'>little</span>{" "}bit about me
                </h4>
                <div className='text-[16px] leading-[1.58] md:text-left tracking-wide flex flex-col space-y-2 overflow-y-scroll h-[224px] no-scroll mx-3'>
                    <p>
                    It is nice to meet you. 
                    </p>
                    <p>
                    My name is Matthew and I am an aspiring full-stack developer.
                    Before I started to learn full-stack development with the University of Toronto, I finished my studies at Laurentian University with my Bachelor of Physical Health Education and Bachelor of Education.
                    </p>
                    <p>I am pursuing a career in web development because of my passion for technology, for media and art. In my free time, you can find me flying my DJI drone, tinkering with software ideas or creating digital art.</p>
                    <p> In addition to learning about common programming languages, frameworks and libraries, I am eagerly learning about blockchain technology, smart contracts, NFTs and cryptocurrencies in general.</p>
                </div>
                </div>
        </motion.div>
        </div>
    </div>

  )
}