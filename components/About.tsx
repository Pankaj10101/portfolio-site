"use client";
import React from "react";
import { motion } from "framer-motion";
interface Props {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase ml-7 tracking-[20px] text-gray-500 text-2xl text-center">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="-mb-20 mt-10 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[450px]"
        src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=740"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hello there! I'm Pankaj, a proud Punjabi lad who recently conquered
          the world of Mechatronics at Chandigarh University. But my heart beats
          for frontend development, especially in the enchanting realm of React.
          With my trusty JavaScript and a dash of Next.js and TypeScript, I
          craft web experiences that leave people spellbound. Bugs fear my
          coding skills, and I've got a portfolio to prove it! Beyond my coding
          adventures, you'll find me grooving to the beats of music, strumming
          my beloved guitar, and enjoying the company of friends. Now, I'm
          seeking a frontend developer job where I can unleash my React wizardry
          and create digital marvels. Join me on this extraordinary journey, and
          let's weave some coding magic together!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
