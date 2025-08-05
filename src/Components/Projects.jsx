import React from "react";
import SectionHeader from "./SectionHeader";
import FadingSection from "./FadingSection";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Telecure",
    stack: ["Nextjs", "Mongodb"],
    des: "Telecure is a full-stack telemedicine platform designed to connect patients with doctors remotely. It includes features like user authentication, appointment booking, real-time chat, and doctor management. Built with Next.js, MongoDB, and Tailwind CSS, Telecure aims to modernize healthcare access through a responsive, intuitive user interface.",
  },
  {
    id: 2,
    title: "UIU+",
    stack: ["ReactJs", "Expressjs", "MySQL"],
    des: "UIU+ is a university companion web app built for students of United International University (UIU). It helps students manage courses, view routines, submit assignments, and connect with faculty. Developed using React.js, Express.js, and MySQL, UIU+ streamlines academic workflows into a centralized platform.",
  },
  {
    id: 3,
    title: "UrbanEase",
    stack: ["HTML", "Bootstrap", "PHP", "MySQL"],

    des: "UrbanEase is a city service management application that allows citizens to report urban issues (like potholes, waste, or streetlight outages) and track resolution status. Featuring user roles (admin/user), image uploads, and location tagging, it’s built with MERN stack (MongoDB, Express, React, Node.js) and optimized for mobile responsiveness.",
  },
  {
    id: 4,
    title: "ReaderNeeds",
    stack: ["HTML", "CSS", "PHP", "MySQL"],

    des: "ReaderNeeds is an online book sharing and community platform developed using PHP, MySQL, HTML, and CSS. It allows users to browse, review, and request books, promoting a knowledge-sharing environment. The platform also supports blog content and user interaction to foster a reader community.",
  },
];

const Projects = () => {
  return (
    <FadingSection className="container py-20" id="projects">
      <SectionHeader title="Projects" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div key={project.id} className=" project-card ">
            <div className="back">
              <a className="super-button">
                Go To Link <FiExternalLink />
              </a>
            </div>
            <h5 className="text-white flex items-start gap-2 text-2xl">
              {project.title}
            </h5>
            <h6 className="text-gray-400 items-center my-2 flex gap-3 text-sm flex-wrap">
              {project.stack.map((tech, i) => (
                <React.Fragment key={i}>
                  <span>{tech}</span>
                  {i < project.stack.length - 1 && (
                    <span className="h-2 w-2 block bg-gray-300 rounded-full"></span>
                  )}
                </React.Fragment>
              ))}
            </h6>
            <p className="text-gray-300 text-lg leading-[32px]">
              {project.des}
            </p>
          </div>
        ))}
      </div>
    </FadingSection>
  );
};

export default Projects;
