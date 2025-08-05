import React, { useState, useEffect } from "react";
import logo from "/logo2.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let timer;

    if (isOpen) {
      // Wait for the opening animation to finish before showing content
      timer = setTimeout(() => setShowContent(true), 600); // match animation duration
    } else {
      setShowContent(false); // instantly hide on close
    }

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div className="fixed w-full top-0 py-5 px-5 bg-gradient-to-b from-black to-transparent z-20">
      <header className="flex items-center justify-between relative">
        <img src={logo} className="h-12" alt="logo" />

        <button
          className={`menu z-10 cursor-pointer ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">{isOpen ? "Close" : "Menu"}</span>
        </button>

        {/* Animated Menu Panel */}
        <div
          className={`absolute top-[-10px] right-[-10px]   h-100 w-80 px-10 pt-6 bg-primary overflow-hidden  shadow-xl transition-all duration-600 origin-top z-9 ${
            isOpen ? "opacity-100! scale-100!" : " h-0! w-0! opacity-0 "
          }`}
        >
          {showContent && (
            <ul className="mt-15 flex flex-col gap-4 text-white">
              {["Home", "About Me", "My Stack", "Projects", "Contact"].map(
                (item, index) => (
                  <li
                    key={item}
                    className={` cursor-pointer
            text-4xl opacity-0 translate-y-4
            animate-fadeInUp
            animation-delay-[${
              index * 150
            }ms] hover:scale-110 hover:text-black transition-all duration-200
          `}
                    style={{
                      animation: `fadeInUp 0.5s ease forwards`,
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
