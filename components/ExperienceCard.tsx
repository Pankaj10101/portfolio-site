import React from "react";
import { motion } from "framer-motion";
interface Props {}

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex h-[75vh] flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=740"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">CEO</h4>
        <p className="font-bold text-1xl mt-1">CEROO</p>
        <div className="flex space-x-2 my-2 justify-center">
          <img
            className="h-10 w-10 rounded-full"
            src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=740"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=740"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=740"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work...- Ended</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
