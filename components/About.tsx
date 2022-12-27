import React from "react";
import Image from "next/image";
import dai from "../assets/dai.jpg";
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <div className="vwrap">
      <h3 className="sectionTitle">
        About
      </h3>
      <div className="flex flex-col h-screen justify-center items-center absolute sm:top-0 pt-40 sm:pt-40 md:pt-24 lg:pt-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="about-container">
          <motion.div
            initial={{
              x: -50,
              opacity: 0
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2
            }}
            className="relative flex-shrink-0 h-24 w-40 sm:w-48 sm:h-32 md:w-40 md:h-56 lg:w-48 lg:h-64 xl:h-80 xl:w-64"
          >
            <Image 
              src={dai}
              alt="Matthew in Hokkaido"
              layout="fill"
              className="object-cover absolute mx-auto md:mb-0 rounded-lg"
            />
          </motion.div>
          <div 
            className="space-y-2 sm:space-y-4 md:space-y-6 px-0 md:px-10 items-center md:items-start justify-start flex flex-col h-fit"
          >
            <motion.div
              initial={{
                y: -50,
                opacity: 0
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2
              }}
            >
              <h4 className="text-2xl md:text-4xl font-semibold">
                A{" "}<span className="ul-gr-2">little</span>{" "}bit about me
              </h4>
            </motion.div>
            <motion.div
              initial={{
                x: 50,
                opacity: 0
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2
              }} 
              className="about-text">
              <p>
                My name is Matthew and I am a full-stack developer who jumpstarted their developer career by joining a coding bootcamp with the University of Toronto in February 2022. Prior to joining this program, I graduated from Laurentian University with my Bachelor of Physical Health Education and Bachelor of Education.
              </p>
              <p>
                I am pursuing a career in web development because of my passion for technology, programming, creativity and art. In my free time, you can find me flying my DJI drone on a hike somewhere, headscratching and pondering various app ideas or creating digital art.</p>
              <p>
                I am eagerly learning about Ethereum, blockchain technology, smart contracts, NFTs and cryptocurrencies in general.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>

  );
}
