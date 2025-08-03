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
      <div className="container pt-30">
        <div className="mt-10">
          <img
            src={profile}
            className="h-30 w-30 md:w-40 md:h-40  rounded-full mx-auto bg-amber-100"
            alt=""
          />
          <h1 className="text-5xl sm:text-6xl bg-gradient-to-r text-center  mt-4 leading-[80px] from-white  to-primary bg-clip-text text-transparent">
            Hey, I am <span className="block md:inline">MD Nadib Ahsan</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl text-center  text-white my-5">
            Full-Stack Developer
          </h2>
          <p className="text-lg text-center max-w-[400px] mx-auto text-gray-400">
            Passionate Full-Stack developer focused on crafting smooth user
            experiences. Always learning, always building.
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1ja7Fl4VI2N6AI9TJ3VR_HYG1qtHC_5o8"
            className="px-5 py-3 bg-primary flex items-center gap-2 max-w-min font-semibold text-lg hover:bg-primary/70 mx-auto my-5"
          >
            Resume <GoDownload />
          </a>

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
