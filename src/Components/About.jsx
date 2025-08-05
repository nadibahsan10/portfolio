import React from "react";
import SectionHeader from "./SectionHeader";
import FadingSection from "./FadingSection";
import cover from "/cover.jpg";
import { useScramble } from "use-scramble";
const About = () => {
  const { ref, replay } = useScramble({
    text: `I specialize in building full-stack web applications using Node.js and Express on the backend, paired with React and Next.js for crafting dynamic, responsive frontends. For data storage, I work with both MongoDB and PostgreSQL, giving me flexibility with SQL and NoSQL solutions. I'm also a fan of Tailwind CSS for rapidly styling modern UIs. I'm always eager to explore new technologies and continuously improve my skills—it's the journey of learning that keeps me hooked. Outside of coding, you'll often find me surfing YouTube, diving into videos about gaming, PC building, and system customization. I also enjoy solving Rubik’s cubes and occasionally challenge myself with a good Sudoku puzzle.`,
    speed: 0.8, // Slightly slower for clarity
    tick: 1, // Smooth animation
    scramble: 5, // Moderate scramble characters
    step: 5, // 3 characters per tick = smoother reveal
    overflow: true, // Allow animation beyond text length
    seed: 2, // Stable randomness
    chance: 1, // Slightly less than full scramble for readability
    overdrive: true, // Keep it smooth and linear
  });

  return (
    <FadingSection className="container py-40 ">
      <SectionHeader title="About Me" />

      <div className="text-gray-300 grid grid-cols-2 gap-10 items-center ">
        <div className="col-span-2 mx-auto lg:mx-0 lg:col-span-1">
          <img
            src={cover}
            className=" rounded-l-xs  max-h-[400px]  lg:max-h-full"
            alt=""
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h4 className="font-semibold text-2xl text-white! ">My Story</h4>

          <p
            className="text-lg  leading-[32px] text-justify"
            onClick={replay}
            ref={ref}
          ></p>
        </div>
      </div>
    </FadingSection>
  );
};

export default About;
