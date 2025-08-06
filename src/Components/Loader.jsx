import React, { useEffect, useState } from "react";
import { useScramble } from "use-scramble";
const Loader = () => {
  const { ref, replay } = useScramble({
    text: "Nadib Ahsan",
    range: [65, 125],
    speed: 0.3,
    tick: 2,
    step: 1,
    scramble: 5,
    seed: 1,
    chance: 1,
    overdrive: false,
    overflow: false,
  });
  const [load, setLoad] = useState("");
  useEffect(() => {
    // Lock scroll immediately
    document.body.style.overflow = "hidden";

    // After 3 seconds, update state and unlock scroll
    const timer = setTimeout(() => {
      setLoad("top-[-120%]!");
      document.body.style.overflow = ""; // Unlock scroll
    }, 4000);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = ""; // Make sure to unlock on unmount
    };
  }, []);
  return (
    <div
      className={`absolute h-screen w-full bg-neutral-900 z-50 flex flex-col top-0 ${load}  transition-all duration-1000 items-center justify-center`}
    >
      <svg
        width="386"
        height="414"
        viewBox="0 0 386 414"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-40 sm:h-45 md:h-50 lg:h-55 xl:h-60 animate-pulse "
      >
        <g filter="url(#filter0_d_32_4)">
          <path
            d="M320.097 359.381L177.548 216.832L52.0713 342.31L35 359.381V46L52.0713 63.0713C52.1487 63.1487 52.2256 63.2265 52.3027 63.3037L52.7646 63.7656C52.8413 63.8423 52.9186 63.9186 52.9951 63.9951C53.0716 64.0716 53.1474 64.1484 53.2236 64.2246L53.4521 64.4531C53.5282 64.5292 53.6048 64.6048 53.6807 64.6807C53.7564 64.7564 53.8317 64.8326 53.9072 64.9082L54.1338 65.1348C54.2092 65.2101 54.2852 65.2852 54.3604 65.3604C54.4354 65.4354 54.5101 65.5111 54.585 65.5859C54.6598 65.6607 54.735 65.735 54.8096 65.8096C54.8843 65.8843 54.9587 65.9597 55.0332 66.0342C55.0379 66.0389 55.0431 66.0431 55.0479 66.0479V94.332C55.032 94.316 55.0159 94.3001 55 94.2842V311.097L170.478 195.62L303.025 63.0713L320.097 46V359.381ZM191.689 202.69L300.097 311.097L300.096 94.2842L191.689 202.69Z"
            fill="#FF6500"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_32_4"
            x="0"
            y="0"
            width="385.097"
            height="413.381"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="15" dy="4" />
            <feGaussianBlur stdDeviation="25" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0.396078 0 0 0 0 0 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_32_4"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_32_4"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <h2
        ref={ref}
        className=" text-gray-300 tracking-widest uppercase  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      ></h2>
    </div>
  );
};

export default Loader;
