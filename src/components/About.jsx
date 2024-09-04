import React from "react";
import aboutMe from "../assets/technlogies_icons/aboutme.svg";
import { About_Text, About_Text_b } from "../Content/Hero_Content";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl"> about me</h1>
      <span className="text-neutral-500 "></span>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutMe} alt=""></img>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start mb-4">
            <p className="my-2 max-w-xl py-6 ">{About_Text}</p>
          </div>
          <p className="justify-center">{About_Text_b}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
