
import React from "react";
import { motion } from "framer-motion";
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import Link from "next/link";

interface Props {}

const Header = (props: Props) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({
      behavior:'smooth'
    })
  };
  return (
    <div className="sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <div>
          <Link href="https://www.linkedin.com/in/pankaj10101/" >
            <AiFillLinkedin className="w-8 h-8 opacity-50 hover:opacity-80 mr-5" />
          </Link>
        </div>
        <div>
          <Link href="https://github.com/Pankaj10101/">
            <AiFillGithub className="w-8 h-8 opacity-50 hover:opacity-80"  />
          </Link>
        </div>
      </motion.div>
      <div onClick={scrollToContact}>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
        <div>
            <AiOutlineMail className="w-8 h-8 opacity-50 hover:opacity-80 mr-3"  />
        </div>
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
