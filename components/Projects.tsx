"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
interface Props {}

const Projects = (props: Props) => {
  const technologies = {
    next: "https://cdn.sanity.io/images/ltuexkre/production/19a30950e8bb4ce1c2155bde79a02626202b173c-500x500.png",
    react:
      "https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png",
    tailwind:
      "https://cdn.sanity.io/images/ltuexkre/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png",
    ts: "https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png",
    js: "https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png",
    strapi: "",
    firebase:
      "https://cdn.sanity.io/images/ltuexkre/production/5ca925937ccd56e069dd6f7cf8c5c7853542603f-500x500.png",
    scss: "",
    html: "https://cdn.sanity.io/images/ltuexkre/production/df2fb90aec55dc3d8df7544efeb4a476508b0029-500x500.png",
    vs: "https://cdn.sanity.io/images/ltuexkre/production/19a30950e8bb4ce1c2155bde79a02626202b173c-500x500.png",
    github: "https://i.ibb.co/Jx9BH1v/pngegg.png",
    mongo: "https://i.ibb.co/SX0cmdX/pngwing-com.png",
    c: "https://i.ibb.co/2vtkhDh/pngwing-com-1.png",
    framer: "https://i.ibb.co/9pVxtN3/framer-motion-seeklogo-com.png",
  };
  const projects = [
    {
      img: "https://i.ibb.co/tPV7f7H/all-devices-white.png",
      name: "Netflix 2.0",
      link: "https://netflix-3-sandy.vercel.app/",
      desc: `A beautiful Netflix clone built using Next.js, React.js, and TypeScript! With the magic of the TMDB API, I've brought a vast collection of movies right to your fingertips. Feel the excitement as you log in and explore different movie sections, while Firebase takes care of the secure authentication process. But that's not all! Get ready to curate your own movie haven with the "My List" feature, where you can add and remove your favorite films. Join this thrilling adventure of movie magic and seamless browsing!`,
      techs: [
        technologies.next,
        technologies.react,
        technologies.ts,
        technologies.firebase,
        technologies.tailwind,
      ],
    },
    {
      img: "https://i.ibb.co/vzxrv0m/3-devices-black.png",
      name: "Full Stack Ecommerce App",
      link: "https://netflix-3-sandy.vercel.app/",
      desc: `Introducing my exciting full-stack project—an innovative e-commerce website crafted with React for the frontend, Strapi as the backend, and SCSS for captivating styles. Prepare for a seamless shopping experience! Users can explore a wide range of products, effortlessly search for items, and add them to their cart. With the flexibility to adjust quantities, they can fine-tune their order before proceeding to the secure checkout. To ensure a personalized touch, the website incorporates user-specific functionalities, including login and logout features facilitated by Firebase. Behind the scenes, PostgreSQL handles the database management, while Cloudinary serves as a reliable platform for storing images. For a smooth payment process, I've integrated the Stripe payment gateway. Join me on this e-commerce adventure and embrace the convenience of online shopping!`,
      techs: [technologies.react, technologies.js, technologies.firebase],
    },
    {
      img: "https://i.ibb.co/vzxrv0m/3-devices-black.png",
      link: "https://netflix-3-sandy.vercel.app/",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-20 ml-6 uppercase tracking-[20px] text-gray-500 text-2xl xl:top-10">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-9 md:p-44 h-screen z-50"
          >
            <Link href={project?.link} target="_blank">
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                src={project.img}
                alt=""
              />
            </Link>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center ">
                <span className="underline decoration-[#F7AB0A]/50">
                  {i + 1} of {projects.length}
                </span>{" "}
                {project?.name}
              </h4>
              <div className="flex gap-6 justify-center">
                {project?.techs &&
                  project.techs.map((img, i) => (
                    <img
                      key={i}
                      className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-16 md:h-16 xl:w-16 xl:h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
                      src={img}
                    />
                  ))}
              </div>

              <p className="text-md text-center md:text-left">
                {project?.desc}
              </p>
            </div>
          </div>
        ))}
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
