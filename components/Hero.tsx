import React from "react";
import Link from "next/link";
import Image from "next/image";
import headshot from "../assets/matt-headshot-2023.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi!",
      "",
      "こんにちは",
      "",
      "Bonjour",
      "",
      "مرحبًا",
      "",
      "สวัสดี",
      "",
      "Ciao",
      "",
      "ہیلو",
      "",
      "Γειά σου",
      "",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col h-screen relative overflow-visible text-left md:flex-row w-full max-w-full justify-center items-center z-0;">
      <BackgroundCircles />
      <div className="relative h-[144px] w-[144px] border-2 border-lime-400/30 rounded-full overflow-clip">
        <Image
          src={headshot}
          alt="Picture of the author"
          className="object-cover"
        />
      </div>
      <div className="z-20 flex flex-col justify-between h-1/3 pt-8">
        <h2 className="text-sm text-center md:text-start uppercase text-gray-500 pb-2 tracking-[15px]">
          Full-Stack Developer
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center md:text-start lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#B2E342" />
        </h1>
        <div className="heroLinks">
          <Link href="#about">
            <button className="heroBtn lg:col-span-2">About</button>
          </Link>
          <Link href="#projects">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 bg-black/20 transition-all hover:border-amber-600 hover:text-amber-400/60 lg:col-span-2">
              Projects
            </button>
          </Link>
          <Link href="#skills">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 bg-black/20 transition-all hover:border-violet-600 hover:text-violet-400/60 lg:col-span-2">
              Skills
            </button>
          </Link>
          <Link href="#experience">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 bg-black/20 transition-all hover:border-pink-600 hover:text-pink-400/60 lg:col-span-2">
              Experience
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
