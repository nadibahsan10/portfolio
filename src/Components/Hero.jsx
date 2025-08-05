import React from "react";
import profile from "/profile.jpg";
import { GoDownload } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import AutoPlay from "./AutoPlay";
import logo from "/logo.png";
const Hero = () => {
  return (
    <div>
      <div className="container pt-15">
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

          <div className="flex items-center text-[20px] sm:text-[24px] md:text-[40px] text-white justify-center gap-5">
            <a
              href="https://www.linkedin.com/in/md-nadib-ahsan-377178179/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-[#0077B5] transition-all duration-300 p-4"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/nadibahsan10"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-[#181717] transition-all duration-300 p-4"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.behance.net/nadibahsan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-[#1769FF] transition-all duration-300 p-4"
            >
              <FaBehance />
            </a>
            <a
              href="https://leetcode.com/u/nadibahsan4/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-[#FFA116] transition-all duration-300 p-4"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://nadibahsan10-portfolio.vercel.app/"
              className="bg-gray-800 hover:bg-[#FF6500] transition-all duration-300 p-4"
            >
              <img
                src={logo}
                alt="Custom Logo"
                className="h-[20px] sm:h-[24px] md:h-[40px]"
              />
            </a>
          </div>
        </div>
      </div>
      <AutoPlay />
    </div>
  );
};

export default Hero;
