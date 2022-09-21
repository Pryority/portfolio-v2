import React from 'react'
import Image from 'next/image'
import dai from '../assets/dai.jpg'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.div
            initial={{
                x: -200,
                opacity: 0
            }}
            whileInView={{ opacity: 1, x: 0}}
            // viewport={{ once: true }}
            transition={{
                duration: 1.2
            }}
            className='relative flex-shrink-0 pt-40 pb-10'
        >

            <Image 
                src={dai}
                alt="Matthew in Hokkaido"
                width={144}
                height={144}
                className='object-cover mx-auto -mb-20 md:mb-0 w-[40px] h-[64px] rounded-full'
            />
        </motion.div>
        <div className='space-y-10 px-0 md:px-10 h-full'>
            <h4 className='text-4xl font-semibold'>
                Here is a{" "}<span className='underline decoration-[#F7AB0A]/50'>bit</span>{" "}about me
            </h4>
            <p className='text-base'>
            It is nice to meet you. My name is Matthew and I am an aspiring full-stack developer.
            <br /> <br />
            Before I started to learn full-stack development with the University of Toronto, I finished my studies at Laurentian University with my Bachelor of Physical Health Education and Bachelor of Education. I am pursuing a career in web development because of my passion for technology, for media and art. In my free time, you can find me flying my DJI drone, tinkering with software ideas or creating digital art.
            <br /><br />
            In addition to learning about common programming languages, frameworks and libraries, I am eagerly learning about blockchain technology, smart contracts, NFTs and cryptocurrencies in general.
            </p>
        </div>
    </motion.div>
  )
}