import React from "react";
import profile from "/profile.jpg";
import { GoDownload } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import AutoPlay from "./AutoPlay";
import logo from "/logo.png";
const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="mt-10">
          <img
            src={profile}
            className="h-40 w-40 rounded-full mx-auto bg-amber-100"
            alt=""
          />
          <h1 className="text-6xl bg-gradient-to-r text-center mt-10 from-white to-primary bg-clip-text text-transparent">
            Hey, I am MD Nadib Ahsan
          </h1>
          <h2 className="text-4xl text-center text-white my-5">
            Full-Stack Developer
          </h2>
          <p className="text-lg text-center w-150 mx-auto text-white">
            Passionate Full-Stack developer focused on crafting smooth user
            experiences. Always learning, always building.
          </p>
          <button className="px-5 py-3 bg-primary flex items-center gap-2 font-semibold text-lg hover:bg-primary/70 mx-auto my-5">
            Resume <GoDownload />
          </button>

          <div className="flex items-center text-[40px] text-white justify-center gap-5">
            <div className="bg-gray-800 p-4">
              <FaLinkedin />
            </div>
            <div className="bg-gray-800 p-4">
              <FaGithub />
            </div>
            <div className="bg-gray-800 p-4">
              <FaInstagram />
            </div>
            <div className="bg-gray-800 p-4">
              <SiLeetcode />
            </div>
            <div className="bg-gray-800 p-4">
              <img src={logo} alt="" className="h-10" />
            </div>
          </div>
        </div>
      </div>
      <AutoPlay />
    </>
  );
};

export default Hero;
