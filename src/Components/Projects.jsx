import React from "react";
import SectionHeader from "./SectionHeader";
import telecure from "/telecure.png";
import uiu from "/uiu.png";
const Projects = () => {
  return (
    <div className="container">
      <SectionHeader title="Projects" />
      <div className="grid grid-cols-3 gap-10">
        <div className="border-1 p-8 border-white rounded-1">
          <p className="text-white flex items-start gap-2 text-2xl">
            1 <span className="text-6xl">Telecure</span>
          </p>
          <p className="text-white items-center my-4 flex gap-3 text-2xl">
            Nextjs
            <span className="h-3 w-3 block bg-gray-600 rounded-full"></span>
            Mongodb
          </p>
          <img src={telecure} className="h-60" alt="" />
        </div>
        <div className="border-1 p-8 border-white rounded-1">
          <p className="text-white flex items-start gap-2 text-2xl">
            2 <span className="text-6xl">UIU+</span>
          </p>
          <p className="text-white items-center my-4 flex gap-3 text-2xl">
            ReactJs
            <span className="h-3 w-3 block bg-gray-600 rounded-full"></span>
            Expressjs
            <span className="h-3 w-3 block bg-gray-600 rounded-full"></span>
            MySQL
          </p>
          <img src={uiu} className="h-60" alt="" />
        </div>
        <div className="border-1 p-8 border-white rounded-1">
          <p className="text-white flex items-start gap-2 text-2xl">
            3 <span className="text-6xl">ReaderNeeds</span>
          </p>
          <p className="text-white items-center my-4 flex gap-3 text-2xl">
            HTML
            <span className="h-3 w-3 block bg-gray-600 rounded-full"></span>
            CSS
            <span className="h-3 w-3 block bg-gray-600 rounded-full"></span>
            PHP
            <span className="h-3 w-3 block bg-gray-600 rounded-full"></span>
            MySQL
          </p>
          <img src={telecure} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
