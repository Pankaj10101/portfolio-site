"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
interface Props {}

const Projects = (props: Props) => {
  const technologies = {
    next: "https://cdn.sanity.io/images/ltuexkre/production/19a30950e8bb4ce1c2155bde79a02626202b173c-500x500.png",
    strapi:'https://i.ibb.co/3zR2SZK/strapi.png',
    postgres:'https://i.ibb.co/TrC4zdM/postgresql-icon.png',
    react:
      "https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png",
    tailwind:
      "https://cdn.sanity.io/images/ltuexkre/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png",
    ts: "https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png",
    js: "https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png",
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
      img: "https://i.ibb.co/hfrTrqK/ecommerce-removebg-preview.png",
      name: "Full Stack Ecommerce Web App",
      link: "https://ecommercestoree.netlify.app/",
      desc: `A full-stack website built with React, Strapi, and SCSS. Explore, search, and add products to your cart effortlessly. Customize your order, securely checkout, and enjoy personalized user features powered by Firebase. With PostgreSQL managing the database and Cloudinary storing images, the website offers a seamless shopping experience. Integrated with Stripe, payments are smooth and hassle-free. Join the e-commerce adventure now and enjoy the convenience of online shopping!`,
      techs: [technologies.react, technologies.js, technologies.firebase, technologies.strapi, technologies.postgres],
    },
    {
      img: "https://i.ibb.co/qNvtFr1/netflix-removebg-preview.png",
      name: "Netflix 2.0",
      link: "https://netflix-3-0.vercel.app/",
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
      img: "https://i.ibb.co/SNdDgzd/Fire-Shot-Capture-001-Multi-Device-Website-Mockup-Generator-techsini-com-removebg-preview.png",
      name: "Expense Tracker",
      link: "https://expensesstrackerr.netlify.app/",
      desc: `Behold, the remarkable expense tracker website I've crafted using React! Dive into a world of financial management where users can effortlessly add, delete, and update their expenses. With the power of Firebase, authentication is secure and seamless. All expenses are stored efficiently in the Firestore database, ensuring smooth data management. But wait, there's more! Users can also update their profile details and even download their expense records for a comprehensive overview.  `,
      techs: [technologies.react, technologies.js, technologies.firebase],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-16 ml-6 uppercase tracking-[20px] text-gray-500 text-2xl xl:top-10">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center p-2 xl:p-8 md:p-44 h-screen z-50"
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
            <div className="space-y-3 xl:space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl xl:text-3xl font-semibold text-center ">
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
                      className="rounded-full border border-gray-500 object-cover w-8 h-8 md:w-12 md:h-12 xl:w-12 xl:h-12 filter group-hover:grayscale transition duration-300 ease-in-out"
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
