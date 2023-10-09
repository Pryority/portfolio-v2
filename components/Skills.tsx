import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative text-center md:text-left xl:flex-row max-w-[2000px] p-4 xl:px-10 min-h-screen justify-evenly xl:space-y-0 mx-auto items-center snap-center"
    >
      <h3 className="absolute ml-4 justify-center top-24 text-center uppercase tracking-[20px] text-violet-400/40 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-3 gap-4 md:gap-6 items-center pt-40 md:pt-32">
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft={true} />
        ))}
      </div>
    </motion.div>
  );
}
