import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress);
    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  return (
    <div className="fixed top-1/2 translate-[-50%] right-2 rounded-2xl h-[200px] w-1 z-50 bg-neutral-800">
      <div
        className="w-full bg-[#ff6500] rounded-2xl transition-all duration-100 ease-out"
        style={{ height: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
