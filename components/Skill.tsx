import React from "react";
import { motion } from "framer-motion";
interface Props {
  directionLeft?: boolean;
  percentage: number;
  logo:string ;
}

const Skill = ({ directionLeft,percentage, logo }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={logo}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-22 md:h-22 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">{percentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
