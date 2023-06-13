"use client";

import Hero from "@/components/Hero";
import Header from "../components/Header";
import About from "@/components/About";
// import WordExperience from "@/components/WordExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import Eye from '../components/Eye'

export default function Home() {
  const scrollToMain = () => {
    const contactSection = document.getElementById("hero");
    contactSection?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* <section id="experience" className="snap-center">
        <WordExperience />
      </section> */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <section id="contact">
          <ContactMe />
        </section>
      </section>
      <Link href="/" onClick={scrollToMain}>
        <div className="sticky bottom-10 xl:bottom-5  w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Eye/>
          </div>
        </div>
      </Link>
    </div>
  );
}
