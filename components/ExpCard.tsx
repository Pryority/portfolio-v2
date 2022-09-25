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
        // CURRENTLY UNDEFINED 
        console.log('IMAGE ========', skills)
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
                <h4 className='text-center text-2xl md:text-4xl font-light'>{jobTitle}</h4>
                <p className='text-center font-bold text-lg md:text-2xl mt-1'>{company}</p>
            </div>
            {/* <div className='flex space-x-2 my-2 justify-center'>
                {skills.map((skill, i)=>(
                    <div key={i} className='h-10 w-10 rounded-full bg-red-600'/>
                ))}
            </div> */}
            <div className='grid md:grid-cols-2'>
                <p className='uppercase text-center space-y-5 ml-5'>Started - {`${dateStarted}`}</p>
                <p className='uppercase text-center space-y-5 ml-5'>Ended - {`${dateEnded}`}</p>
            </div>
            <ul className='keyLearnings h-full justify-center'>
                {keyLearnings.map((keyL, i) => (
                    <li key={i} className='keyL'>{keyL}</li>
                ))}
                </ul>
        </div>
        </div>
    </article>
    )
}