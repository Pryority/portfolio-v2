import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const plc ='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'

type Props = {
    directionLeft?: boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex flex-col cursor-pointer'>
        <motion.div
            initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='skill-wrapper group'
        >
            <Image src={plc}
                alt="Picture of the author"
                layout='fill'
                className='rounded-full'
                objectFit='cover'
            />
        </motion.div>
        <div className='absolute object-center opacity-1 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 lg:w-32 lg:h-32   rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}