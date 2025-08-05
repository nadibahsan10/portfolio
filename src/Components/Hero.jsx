import React from "react";
import profile from "/profile.jpg";
import { useEffect } from "react";
import { GoDownload } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import AutoPlay from "./AutoPlay";
import { useScramble } from "use-scramble";

import logo from "/logo.png";
const Hero = () => {
  const { ref: fullStackRef, replay } = useScramble({
    text: "Full_Stack",
    speed: 0.3, // slower speed for smoothness
    tick: 3, // how often the animation updates (frames)
    scramble: 8, // how many random chars to show during scramble
    step: 2, // how many chars changed per tick (smaller = smoother)
    overflow: true,
    seed: 5, // randomization seed (just pick any number)
    chance: 0.85, // chance a char is scrambled each tick, less than 1 for subtlety
    overdrive: false,
  });
  const { ref: devRef, replay: devReply } = useScramble({
    text: "Developer",
    speed: 0.3, // slower speed for smoothness
    tick: 3, // how often the animation updates (frames)
    scramble: 8, // how many random chars to show during scramble
    step: 2, // how many chars changed per tick (smaller = smoother)
    overflow: true,
    seed: 5, // randomization seed (just pick any number)
    chance: 0.85, // chance a char is scrambled each tick, less than 1 for subtlety
    overdrive: false,
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      replay();
      devReply();
    }, 3000); // every 2 seconds

    return () => clearInterval(intervalId); // cleanup on unmount
  }, [replay, devReply]);

  return (
    <section className="pt-40 pb-20 lg:pt-30  xl:pt-20" id="home">
      <div className="container ">
        <div className="mt-10">
          <div className="flex gap-4 justify-center items-center">
            <img
              src={profile}
              className="h-15 w-15 md:w-20 md:h-20 lg:w-25 lg:h-25 rounded-full hover:scale-110 transition-all duration-150  bg-amber-100 ring-2 ring-primary"
              alt=""
            />
            <div>
              <h2 className="text-lg  font-bold uppercase  text-white">
                MD Nadib Ahsan
              </h2>
              <p className="text-white inline-flex items-center gap-1">
                <img
                  src="/bd.svg"
                  alt="bg Flag"
                  className="h-[18px] w-[20px]"
                />
                Lives in <span className="font-semibold">Bangladesh</span>
              </p>
            </div>
          </div>
          <h1
            ref={fullStackRef}
            className="text-[50px] md:text-[72px]  lg:text-[100px]  text-center uppercase font-bold tracking-wider leading-15 md:leading-20 lg:leading-25 text-primary my-5"
          ></h1>
          <h1
            ref={devRef}
            className="text-[50px] md:text-[72px]  lg:text-[100px]  text-center uppercase font-bold tracking-wider leading-15 md:leading-20 lg:leading-25 text-primary my-5"
          ></h1>
          <p className="text-lg  text-center max-w-[500px] mx-auto text-gray-300">
            Passionate Full-Stack developer focused on crafting smooth user
            experiences. Always learning, always building.
          </p>
          <div className=" flex my-5  justify-center">
            <a
              href="https://drive.google.com/uc?export=download&id=1ja7Fl4VI2N6AI9TJ3VR_HYG1qtHC_5o8"
              className="super-button "
            >
              Resume <GoDownload />
            </a>
          </div>
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
    </section>
  );
};

export default Hero;
