import React from 'react'
import Image from 'next/image'
import dai from '../assets/dai.jpg'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-4 justify-center mx-auto items-center'>
        <h3 className='sectionTitle'>
            About
        </h3>
        <motion.div
            initial={{
                y: 200,
                opacity: 0
            }}
            whileInView={{ opacity: 1, y: 0}}
            // viewport={{ once: true }}
            transition={{
                duration: 1.2
            }}
            className='relative flex-shrink-0 pb-4 pt-96'
        >
            <Image 
                src={dai}
                alt="Matthew in Hokkaido"
                width={144}
                height={144}
                className='object-cover mx-auto -b-20 md:mb-0 rounded-full snap-center'
            />
        </motion.div>
        <div className='space-y-8 px-0 md:px-10 relative'>
            <h4 className='text-4xl font-semibold'>
                A{" "}<span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}bit about me
            </h4>
            <div className='text-[12px] text-left pb-64 tracking-wide flex flex-col space-y-2'>
                <p>
                It is nice to meet you. My name is Matthew and I am an aspiring full-stack developer.
                Before I started to learn full-stack development with the University of Toronto, I finished my studies at Laurentian University with my Bachelor of Physical Health Education and Bachelor of Education.
                </p>
                <p>I am pursuing a career in web development because of my passion for technology, for media and art. In my free time, you can find me flying my DJI drone, tinkering with software ideas or creating digital art.</p>
                <p> In addition to learning about common programming languages, frameworks and libraries, I am eagerly learning about blockchain technology, smart contracts, NFTs and cryptocurrencies in general.</p>
            </div>
        </div>
    </motion.div>

  )
}