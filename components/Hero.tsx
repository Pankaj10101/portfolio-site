"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Pankaj",
      "Guy-who-loves-Coffee.jsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const scrollToAbout = () => {
    const contactSection = document.getElementById("about");
    contactSection?.scrollIntoView({
      behavior: "smooth",
    });
  };
  // const scrollToExperience = () => {
  //   const contactSection = document.getElementById("experience");
  //   contactSection?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };
  const scrollToProjects = () => {
    const contactSection = document.getElementById("projects");
    contactSection?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToSkills = () => {
    const contactSection = document.getElementById("skills");
    contactSection?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=740"
        width={100}
        height={100}
        alt="img"
        priority={true}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[8px] xl:tracking-[15px] ">
          FrontEnd Developer
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-10 wrap">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <button className="heroButton" onClick={scrollToAbout}>
            About
          </button>

          {/* <button className="heroButton" onClick={scrollToExperience}>
            Experience  
          </button> */}

          <button className="heroButton" onClick={scrollToSkills}>
            Skills
          </button>

          <button className="heroButton" onClick={scrollToProjects}>
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
