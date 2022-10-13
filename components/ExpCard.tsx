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
        <div className='flex flex-col items-center space-y-4'>
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className='relative w-[144px] h-[88px] xl:w-[192px] xl:h-[104px]'
        >
            <Img src={`${urlFor(companyImage).url()}`}
                alt="Picture of the author"
                layout='fill'
                className='absolute object-cover object-center rounded-xl'
            />
        </motion.div>
        <div className='px-0 md:px-10 flex flex-col space-y-4'>
            <h4 className='text-center text-xl md:text-2xl font-light mx-8 leading-5'>{jobTitle}</h4>
            <p className='text-center font-bold text-md mx-4 md:text-lg mt-1 leading-4'>{company}</p>
            <div className='grid md:grid-cols-2 text-xs justify-center md:w-full'>
                <p className='uppercase text-center space-y-5'>Started - {`${dateStarted}`}</p>
                <p className='uppercase text-center space-y-5'>Ended - {`${dateEnded}`}</p>
            </div>
            <div className='flex w-full items-start h-full justify-center'>
                <ul className='keyLearnings'>
                    {keyLearnings.map((keyL, i) => (
                        <li key={i} className='keyL'>{keyL}</li>
                        ))}
                </ul>
            </div>
        </div>
        </div>
    </article>
    )
}