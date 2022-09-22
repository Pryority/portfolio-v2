import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='vwrap'>
        <h3 className='sectionTitle'>Contact</h3>
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.62 }}
            className='flex flex-col space-y-10 pt-16 md:pt-32 justify-center items-center'>
            <motion.div 
            initial={{ y: -25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.62 }}
            className='flex justify-center w-4/5 md:w-full'
            >
                <h4 className='pr-t-lg'>
                    Want to team up?{" "} <span className='ul-gr-2'>Lets talk.</span>
                </h4>
            </motion.div>

            <motion.div 
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.62 }}
                className='space-y-2 justify-center items-center flex flex-col'>
                <div className='flex items-center space-x-4'>
                    <PhoneIcon className='text-lime-500 h-7 w-7 animate-pulse' />
                    <p className='text-lg md:text-2xl'>+1 647-705-7708</p>
                </div>
                <div className='flex items-center space-x-4'>
                    <EnvelopeIcon className='text-lime-500 h-7 w-7 animate-pulse' />
                    <p className='text-lg md:text-2xl'>matthewapryor@gmail.com</p>
                </div>
                <div className='flex items-center space-x-4'>
                    <MapPinIcon className='text-lime-500 h-7 w-7 animate-pulse' />
                    <p className='text-lg md:text-2xl'>Toronto, Ontario</p>
                </div>
            </motion.div>

            <form action="" className=''>
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.62 }}
                className='flex flex-col space-y-2 mx-auto w-full'
            >
                <div className='flex space-x-2'>
                    <input type="text" placeholder='First name' className='contact-input' />
                    <input type="text" placeholder='Last name' className='contact-input' />
                </div>
                <input type="text" placeholder='Email' className='contact-input' />

                <textarea 
                    name="message" 
                    id="message" 
                    placeholder='Enter a message' 
                    className='contact-input'
                    />
                </motion.div>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 4.62 }}
                    className='flex justify-center items-center pt-4'
                >
                        <button type='submit' className='w-1/2 rounded px-4 py-2 md:px-6 md:py-4 bg-lime-500 font-medium uppercase text-lime-900/80 tracking-widest'>Submit</button>
                </motion.div>
            </form>
        </motion.div>
    </div>
  )
}