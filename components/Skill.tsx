import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    skill: SkillType;
    directionLeft?: boolean;
}

export default function Skill({skill, directionLeft}: Props) {
  return (
    <div className='group relative flex flex-col cursor-pointer'>
      <motion.div
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='skill-wrapper group'
      >
        <Image src={urlFor(skill?.image).url()}
          alt="Picture of the author"
          layout='fill'
          className='rounded-full'
          objectFit='cover'
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .162 }}
        viewport={{ once: false }}
        className='absolute object-center opacity-1 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/80 hidden group-hover:block h-24 w-24 md:w-28 md:h-28 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
        </div>
      </motion.div>
    </div>
  );
}