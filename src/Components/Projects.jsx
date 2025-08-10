import React from "react";
import SectionHeader from "./SectionHeader";
import FadingSection from "./FadingSection";
import { LiaAwardSolid } from "react-icons/lia";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Telecure",
    stack: ["Nextjs", "Mongodb"],
    des: "Telecure is a telemedicine platform connecting patients with doctors remotely. It supports authentication, appointment booking, real-time chat, and doctor management, built with Next.js, MongoDB, and Tailwind CSS for a responsive, user-friendly experience.",
    url: "https://github.com/nadibahsan10/telecure",
  },
  {
    id: 2,
    title: "UIU+",
    stack: ["ReactJs", "Expressjs", "MySQL"],
    des: "UIU+ is a university companion app for United International University students. It streamlines course management, routines, assignments, and faculty connections using React.js, Express.js, and MySQL.",
    url: "https://github.com/nadibahsan10/frontend",
  },
  {
    id: 3,
    title: "UrbanEase",
    stack: ["HTML", "Bootstrap", "PHP", "MySQL"],
    des: "UrbanEase helps citizens report city issues like potholes or outages and track resolutions. It features user roles, image uploads, and location tagging, optimized for mobile responsiveness.",
  },
  {
    id: 4,
    title: "ReaderNeeds",
    stack: ["HTML", "CSS", "PHP", "MySQL"],
    awards: true,
    des: "ReaderNeeds is a book sharing and community platform where users can browse, review, and request books, with blog content and interactive features to connect readers.",
  },
  {
    id: 5,
    title: "Bytepost",
    stack: ["React.js", "Node.js", "MySQL"],
    des: "Bytepost is a content-sharing platform with secure authentication, post creation, image uploads, likes, and comments. Built with Next.js, Node.js, and MongoDB, it focuses on performance and user experience.",
    url: "https://github.com/nadibahsan10/bytepost",
  },
];

const Projects = () => {
  return (
    <FadingSection className="container py-20" id="projects">
      <SectionHeader title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={project.id} className=" project-card ">
            <div className="back">
              <a
                className="super-button"
                href={project.url ? project.url : "#"}
              >
                Go To Link <FiExternalLink />
              </a>
            </div>
            <h5 className="text-white flex items-center gap-2 text-2xl">
              {project.title}
              {project.awards && (
                <span className="text-primary ">
                  <LiaAwardSolid />
                </span>
              )}
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
            <p className="text-gray-300 text-base leading-[32px]">
              {project.des}
            </p>
          </div>
        ))}
      </div>
    </FadingSection>
  );
};

export default Projects;
