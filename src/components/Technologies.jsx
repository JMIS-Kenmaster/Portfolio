import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { FaNodeJs, FaDocker, FaJava, FaMicrosoft } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiRuby,
  SiDjango,
  SiRubyonrails,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const iconVariants = {
  hidden: { opacity: 0, x: "100vw" },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: index * 0.5,
      duration: 3,
    },
  }),
};

const iconLeftVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: index * 0.5,
      duration: 3,
    },
  }),
};

const Technologies = () => {
  const icons = [
    { Component: FaDocker, color: "text-blue-500", label: "Docker" },
    { Component: FaNodeJs, color: "text-[#6cc24a]", label: "NodeJs" },
    {
      Component: BiLogoPostgresql,
      color: "text-[#008bb9]",
      label: "PostgreSQL",
    },
    { Component: RiReactjsLine, color: "text-cyan-500", label: "ReactJS" },
    { Component: TbBrandNextjs, color: "text-[#2dce89]", label: "NextJS" },
  ];

  const languages = [
    { Component: FaJava, color: "text-[#5382a1]", label: "Java" },
    { Component: SiJavascript, color: "text-[#f0db4f]", label: "JavaScript" },
    { Component: SiPython, color: "text-[#3776ab]", label: "Python" },
    { Component: SiHtml5, color: "text-[#e34f26]", label: "HTML" },
    { Component: SiRuby, color: "text-[#cc342d]", label: "Ruby" },
  ];

  const frameworks = [
    { Component: SiDjango, color: "text-[#092e20]", label: "Django" },
    {
      Component: SiRubyonrails,
      color: "text-[#CC0000]",
      label: "Ruby on Rails",
    },
    {
      Component: BiLogoSpringBoot,
      color: "text-[#6DB33F]",
      label: "Spring Boot",
    },
    { Component: FaMicrosoft, color: "text-[#0078D4]", label: "ASP.NET" },
    { Component: TbApi, color: "text-[#ff7c00]", label: "APIs" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            custom={index}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
          >
            <icon.Component
              className={`text-7xl ${icon.color} justify-center content-center`}
            />
            <h5 className="justify-center text-center">{icon.label}</h5>
          </motion.div>
        ))}
      </div>
      <h2 className="my-20 text-center text-4xl">Languages</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {languages.map((icon, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            custom={index}
            variants={iconLeftVariants}
            initial="hidden"
            animate="visible"
          >
            <icon.Component
              className={`text-7xl ${icon.color} justify-center content-center`}
            />
            <h5 className="justify-center text-center">{icon.label}</h5>
          </motion.div>
        ))}
      </div>
      <h2 className="my-20 text-center text-4xl">Frameworks</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {frameworks.map((icon, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            custom={index}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
          >
            <icon.Component
              className={`text-7xl ${icon.color} justify-center content-center`}
            />
            <h5 className="justify-center text-center">{icon.label}</h5>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
