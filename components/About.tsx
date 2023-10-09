import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import headshot from "../assets/matt-headshot-2023.jpg";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="vwrap">
      <h3 className="absolute ml-4 justify-center top-24 text-center uppercase tracking-[20px] text-cyan-500/40 text-2xl">
        About
      </h3>
      <div className="w-screen h-screen grid md:flex overflow-y-scroll md:overflow-x-scroll overflow-y-hidden md:overflow-y-hidden snap-y md:snap-x snap-mandatory z-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col w-screen relative flex-shrink-0 snap-center h-screen space-y-2 items-center justify-center overflow-x-hidden overflow-y-scroll  md:px-0 pt-40 md:pt-16"
        >
          <div className="w-full absolute top-40">
            <Image
              src={headshot}
              alt="Matthew in Hokkaido"
              className="object-contain md:rounded-l-lg "
            />
          </div>

          <div className="space-y-4 md:space-y-6 p-4 h-fit flex flex-col justify-start absolute items-start top-2/3 left-0 pb-16 bg-gradient-to-b from-black/60 backdrop-blur-lg to-transparent">
            <p>
              Hi, my name is Matthew. My interest to become a full-stack
              developer began in 2021 after I started creating mock app designs
              for fun using Figma. I started by learning to make simple views in
              SwiftUI, since all I had on my computer at the time was XCode.
            </p>
            <p>
              Then, I had a desire to learn a little about coding games and game
              design, so I scratched the surface of Godot and made a less than
              basic adventure game. Coding a game felt like a big challenge, so
              I left it alone and stumbled across Ethereum.
            </p>
            <p>
              The concept of a blockchain or distributed network of nodes
              working together to run an immutable database fascinated me. To
              add to this, there was this concept I saw many people talking
              about, which was this idea of &ldquo;permissionless&ldquo;
              programming. I followed a few tutorials and learned how write and
              deploy a smart contract onto a live blockchain.
            </p>
            <p>
              Since then, I have learned lots more and experimented by building
              various small apps based around concepts of Ethereum. I enjoy
              using a lot of the developer tools for the Ethereum, including,
              but most of all, Foundry.
            </p>
            <p>
              who jumpstarted their developer career by joining a coding
              bootcamp with the University of Toronto in February 2022. Prior to
              joining this program, I graduated from Laurentian University with
              my Bachelor of Physical Health Education and Bachelor of
              Education.
            </p>
            <p>
              I am pursuing a career in web development because of my passion
              for technology, programming, creativity and art. In my free time,
              you can find me flying my DJI drone on a hike somewhere,
              headscratching and pondering various app ideas or creating digital
              art.
            </p>
            <p>
              I am eagerly learning about Ethereum, blockchain technology, smart
              contracts, NFTs and cryptocurrencies in general.
            </p>
          </div>
        </motion.div>
      </div>
      {/* SKEW BG */}
      {/* <div className="w-full absolute top-[30%] bg-[#8fe821]/10 left-0 h-[500px] -skew-y-12" /> */}
    </div>
  );
}

// import React from "react";
// import Image from "next/image";
// import dai from "../assets/dai.jpg";
// import { motion } from "framer-motion";

// type Props = {};

// export default function About({}: Props) {
//   return (
//     <div className="vwrap flex flex-col md:flex-row items-center justify-center h-screen relative">
//       <h3 className="absolute ml-4 text-center uppercase tracking-[20px] text-sky-500/40 text-2xl md:text-4xl mt-24">
//         About
//       </h3>

//       {/* Left Side (Image) */}
// <motion.div
// initial={{ opacity: 0 }}
// whileInView={{ opacity: 1 }}
// transition={{ duration: 1.5 }}
// className="md:w-1/2"
// >
// <Image
//   src={dai}
//   alt="Matthew in Hokkaido"
//   className="object-cover w-full h-auto md:rounded-l-lg"
// />
// </motion.div>

//       {/* Right Side */}
//       <motion.div
//         initial={{ x: 0, opacity: 0 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1.2 }}
//         className="p-4 w-full md:w-1/2"
//       >
//         <div className="space-y-4 md:space-y-6">
//           <motion.div
//             initial={{
//               x: 0,
//               opacity: 0,
//             }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 1.2,
//             }}
//             className="p-4 flex z-20 absolute left-4 top-24 w-1/2 h-screen flex-col justify-start items-start overflow-auto overflow-x-hidden bg-black/60 backdrop-blur-lg"
//           >
//             <div className="space-y-4 md:space-y-6 px-4 h-full flex flex-col justify-start items-start overflow-x-hidden overflow-y-scroll bottom-0 left-0 pb-40 absolute">
//               <p>
//                 My name is Matthew. My interest to become a full-stack developer
//                 began in 2021 after I started creating mock app designs for fun
//                 using Figma. I started by learning to make simple views in
//                 SwiftUI, since all I had on my computer at the time was XCode.
//               </p>
//               <p>
//                 Then, I had a desire to learn a little about coding games and
//                 game design, so I scratched the surface of Godot and made a less
//                 than basic adventure game. Coding a game felt like a big
//                 challenge, so I left it alone and stumbled across Ethereum.
//               </p>
//               <p>
//                 The concept of a blockchain or distributed network of nodes
//                 working together to run an immutable database fascinated me. To
//                 add to this, there was this concept I saw many people talking
//                 about, which was this idea of &ldquo;permissionless&ldquo;
//                 programming. I followed a few tutorials and learned how write
//                 and deploy a smart contract onto a live blockchain.
//               </p>
//               <p>
//                 Since then, I have learned lots more and experimented by
//                 building various small apps based around concepts of Ethereum. I
//                 enjoy using a lot of the developer tools for the Ethereum,
//                 including, but most of all, Foundry.
//               </p>
//               <p>
//                 who jumpstarted their developer career by joining a coding
//                 bootcamp with the University of Toronto in February 2022. Prior
//                 to joining this program, I graduated from Laurentian University
//                 with my Bachelor of Physical Health Education and Bachelor of
//                 Education.
//               </p>
//               <p>
//                 I am pursuing a career in web development because of my passion
//                 for technology, programming, creativity and art. In my free
//                 time, you can find me flying my DJI drone on a hike somewhere,
//                 headscratching and pondering various app ideas or creating
//                 digital art.
//               </p>
//               <p>
//                 I am eagerly learning about Ethereum, blockchain technology,
//                 smart contracts, NFTs and cryptocurrencies in general.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
