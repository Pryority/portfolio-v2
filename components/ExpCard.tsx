import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const plc ='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'

type Props = {}

export default function ExpCard({}: Props) {
  return (
    <article className='expCard'>
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className='relative w-[144px] h-[144px] rounded-full xl:w-[200px] xl:h-[200px]'
        >
            <Image src={plc}
                alt="Picture of the author"
                layout='fill'
                className='absolute object-cover object-center rounded-full'
            />
        </motion.div>
        <div className='px-0 md:px-10 flex flex-col space-y-4'>
            <div className='flex flex-col'>
                <h4 className='text-center text-2xl md:text-4xl font-light'>POSITION OF COMPANY</h4>
                <p className='text-center font-bold text-lg md:text-2xl mt-1'>COMPANY NAME</p>
            </div>
            <div className='flex space-x-2 my-2 justify-center'>
                {/* logo */}
                <div className='h-10 w-10 rounded-full bg-red-600'/>
                <div className='h-10 w-10 rounded-full bg-red-600'/>
                <div className='h-10 w-10 rounded-full bg-red-600'/>
                <div className='h-10 w-10 rounded-full bg-red-600'/>
            </div>
            <div className='grid md:grid-cols-2'>
                <p className='uppercase text-center space-y-5 ml-5'>Started - {'03/04/2020'}</p>
                <p className='uppercase text-center space-y-5 ml-5'>Ended - {'07/16/2020'}</p>
            </div>
            <ul className='keyLearnings'>
                    <li>key learnings key learnings key learnings </li>
                    <li>key learnings key learnings key learnings </li>
                    <li>key learnings key learnings key learnings </li>
                    <li>key learnings key learnings key learnings </li>
                    <li>key learnings key learnings key learnings </li>
                    <li>key learnings key learnings key learnings </li>
                </ul>
        </div>
    </article>
  )
}