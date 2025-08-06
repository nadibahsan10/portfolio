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
          className={`absolute top-[-10px] right-[-10px] rounded-sm  h-80 w-60 px-10  flex justify-center bg-primary overflow-hidden  shadow-xl transition-all duration-600 origin-top z-9 ${
            isOpen ? "opacity-100! scale-100!" : " h-0! w-0! opacity-0 "
          }`}
        >
          {showContent && (
            <ul className="mt-15 flex flex-col gap-4 text-gray-800 font-semibold">
              {[
                { label: "Home", id: "home" },
                { label: "About Me", id: "about" },
                { label: "My Stack", id: "stack" },
                { label: "Projects", id: "projects" },
                { label: "Contact", id: "contact" },
              ].map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer text-lg opacity-0 translate-y-4 animate-fadeInUp animation-delay-[${
                    index * 150
                  }ms] hover:scale-110 hover:text-black transition-all duration-200`}
                  style={{
                    animation: `fadeInUp 0.5s ease forwards`,
                    animationDelay: `${index * 150}ms`,
                  }}
                  onClick={() => {
                    const section = document.getElementById(item.id);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
