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
            {/* <Img src={`/${urlFor(companyImage).url()}`} */}
            <Img src={`${urlFor(companyImage).url()}`}
                alt="Picture of the author"
                layout='fill'
                className='absolute object-cover object-center rounded-xl'
            />
        </motion.div>
        <div className='px-0 md:px-10 flex flex-col space-y-4'>
            <div className='flex flex-col'>
                <h4 className='text-center text-2xl md:text-4xl font-light mx-8'>{jobTitle}</h4>
                <p className='text-center font-bold text-lg md:text-2xl mt-1'>{company}</p>
            </div>
            <div className='grid md:grid-cols-2 justify-center md:w-full mr-16'>
                <p className='uppercase text-end md:text-center space-y-5 ml-5'>Started - {`${dateStarted}`}</p>
                <p className='uppercase text-end md:text-center space-y-5 ml-5'>Ended - {`${dateEnded}`}</p>
            </div>
            <div className='flex w-full items-center h-full justify-center'>
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