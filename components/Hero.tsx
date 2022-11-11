import React from "react";
import Link from "next/link";
import Image from "next/image";
import headshot from "../assets/matt.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";

type Props = {
    pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Yo!",
      "How are you?",
      "",
      "",
      "Take a look around."
    ],
    loop: true,
    delaySpeed: 2000
  });
  return (
    <div className='hero'>
      <BackgroundCircles />
      <Image src={headshot}
        alt="Picture of the author"
        width="144px"
        height="144px"
        className='relative object-cover rounded-full mx-auto'
      />
      <div className='z-20 flex flex-col justify-between h-1/3'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Front-End Developer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#B2E342'/>
        </h1>
        <div className='heroLinks'>
          <Link href='#about'>
            <button className='heroBtn lg:col-span-2'>About</button>
          </Link>
          <Link href='#projects'>
            <button className='heroBtn lg:col-span-2 '>Projects</button>
          </Link>
          <Link href='#skills'>
            <button className='heroBtn lg:col-span-2'>Skills</button>
          </Link>
          <Link href='#experience'>
            <button className='heroBtn lg:col-span-2'>Experience</button>
          </Link>
        </div>
      </div>
    </div>
  );
}