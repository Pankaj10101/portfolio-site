"use client";
import React from "react";
import {motion} from 'framer-motion'
import ExperienceCard from "./ExperienceCard";
interface Props {}

const WordExperience = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex relative overflow-hidden flex-col text-center md:flex-row max-w-full px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full h-[75vh] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-y-hidden">
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
      </div>
    </motion.div>
  );
};

export default WordExperience;
