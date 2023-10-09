import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCirles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 2],
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-6 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-6" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-6" />
      <div className="absolute border border-[#599011] rounded-full h-[650px] w-[650px] mt-6 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[900px] w-[900px] mt-6 animate-ping" />
    </motion.div>
  );
}
