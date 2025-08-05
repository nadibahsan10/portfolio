import logo from "/logo.png";
import React from "react";
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/md-nadib-ahsan-377178179/",
    hoverColor: "#0077B5",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/nadibahsan10",
    hoverColor: "#181717",
  },
  {
    icon: <MdEmail />,
    url: "mailto:nadibahsan4@gmail.com",
    hoverColor: "#EA4335",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20 text-base text-white font-semibold bg-neutral-900 py-10 flex flex-col items-center gap-3">
      <div className="container">
        <img src={logo} alt="Footer Logo" className="h-20 mx-auto mb-5" />
        <div className="flex items-center text-md sm:text-[20px] md:text-[28px] text-white justify-center gap-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-primary transition-all duration-300 p-3 hover:bg-[${link.hoverColor}]`}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="mt-4 mb-2 text-center ">
          © 2025 MD Nadib Ahsan. All rights reserved.
        </p>
        <p className="text-center">
          Built with React.js, JavaScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
