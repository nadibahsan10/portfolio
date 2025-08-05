import React from "react";
import SectionHeader from "./SectionHeader";
const About = () => {
  return (
    <div className="container min-h-screen py-40">
      <SectionHeader title="About Me" />
      <div className="grid grid-cols-2">
        <div className="text-white">
          <h2 className="text-4xl">I'm Md Nadib Ahsan</h2>
          <p className="text-lg mt-5 leading-[36px] max-w-150">
            I’m a frontend developer with a strong eye for detail and a love for
            clean, efficient code. I specialize in building responsive,
            accessible, and performance-driven web applications using React,
            Tailwind CSS, and JavaScript. I enjoy transforming UI designs into
            smooth, functional user experiences and continuously learning new
            tools and technologies in the process.
          </p>
        </div>
        <div className=" text-white py-10 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6 divide-y md:divide-y-0 md:divide-x divide-white">
            <div>
              <h3 className="text-4xl font-bold">30+</h3>
              <p className="text-lg mt-1">LinkedIn Connections</p>
            </div>
            <div className="pt-6 md:pt-0 md:px-6">
              <h3 className="text-4xl font-bold">20+</h3>
              <p className="text-lg mt-1">GitHub Repos</p>
            </div>
            <div className="pt-6 md:pt-0 md:px-6">
              <h3 className="text-4xl font-bold">2</h3>
              <p className="text-lg mt-1">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
