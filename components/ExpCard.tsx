import React from 'react'
import Img from 'next/image'
import { motion } from 'framer-motion'
import { Image, Skill } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    jobTitle: string;
    company: string;
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    keyLearnings: string[];
    skills: Skill[];
}

export default function ExpCard(
        {jobTitle, company, companyImage, dateStarted, dateEnded, keyLearnings, skills }: Props
    ) {
    return (
    <article className='expCard'>
        <div className='flex flex-col items-center w-full h-full relative'>
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className='absolute top-0 w-full h-[200px] md:h-[300px] xl:w-[192px] xl:h-[104px]'
        >
            <Img src={`${urlFor(companyImage).url()}`}
                alt="Picture of the author"
                layout='fill'
                className='absolute object-cover object-center rounded-xl'
            />
        </motion.div>
        <div className='flex flex-col h-full justify-end items-center'>
        <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.62 }}
            viewport={{ once: true }}
            className='px-0 md:px-10 flex flex-col h-2/3 w-56 md:w-[450px] rounded p-4 space-y-4 z-50 bg-zinc-800/60 backdrop-blur-md'
        >
            <h4 className='text-center text-xl md:text-2xl font-base mx-2 leading-5'>{jobTitle}</h4>
            <p className='text-center font-light text-md mx-4 md:text-lg mt-1 text-white/50 leading-4'>{company}</p>
            <div className='grid grid-cols-2 justify-center items-center mx-8'>
                <div className='flex flex-col w-full'>
                    <p className='text-[8px] font-light'>Started</p>
                    <p className='text-sm font-light'>{`${dateStarted}`}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='text-[8px] font-light'>Ended</p>
                    <p className='text-sm font-light'>{`${dateEnded}`}</p>
                </div>
            </div>
            <div className='flex w-full items-start h-full justify-center'>
                <ul className='keyLearnings'>
                    {keyLearnings.map((keyL, i) => (
                        <li key={i} className='keyL'>{keyL}</li>
                        ))}
                </ul>
            </div>
        </motion.div>
        </div>
        </div>
    </article>
    )
}