import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import headshot from '../assets/matt.jpg'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Yo! The Name's Matthew Pryor!",
            "TEST TEST TEST"
        ],
        loop: true,
        delaySpeed: 2000
    })
  return (
  <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image src={headshot}
            alt="Picture of the author"
            width="144px"
            height="144px"
            className='relative object-cover rounded-full mx-auto'
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Front-End Developer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
            <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroBtn'>About</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroBtn'>Experience</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroBtn'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroBtn'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}