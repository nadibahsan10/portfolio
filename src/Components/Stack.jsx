import React from "react";
import html from "/html.png";
import css from "/css.png";
import js from "/js.png";
import react from "/React.png";
import redux from "/redux.svg";
import zustand from "/zustand.svg";
import nextjs from "/next.png";
import tailwind from "/tailwind.png";
import bootstrap from "/bootstrap.png";
import materialui from "/metarialui.png";
import SectionHeader from "./SectionHeader";
import styled from "/s.svg";
import sass from "/sass.png";

import router from "/react-router.svg";
import query from "/tan.png";

import node from "/node.png";
import firebase from "/firebase.png";
import express from "/ex.png";
import mongodb from "/mongodb.png";
import mysql from "/mysql.png";
import postgresql from "/postgresql.png";
import prisma from "/prisma.png";
import jwt from "/jwt.png";
import rest from "/rest.png";
import socketio from "/socket.png";
import vercel from "/vercel.png";

import git from "/git.png";
import github from "/github.png";
import postman from "/postman.png";
import vscode from "/vscode.png";
import figma from "/figma.png";
import npm from "/npm.png";
import pixso from "/pixso.png"; // Assuming you have one
import FadingSection from "./FadingSection";

const backendStack = [
  { name: "Node.js", icon: node },
  { name: "Express.js", icon: express },
  { name: "Firebase", icon: firebase },

  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Prisma", icon: prisma },
  { name: "JWT (Auth)", icon: jwt },
  { name: "REST API", icon: rest },
  { name: "Socket.IO", icon: socketio },
  { name: "Vercel", icon: vercel },
];
const frontendStack = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },

  { name: "React", icon: react },
  { name: "Redux", icon: redux },
  { name: "Zustand", icon: zustand },
  { name: "Next.js", icon: nextjs }, // Add Next.js icon
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap }, // Add Bootstrap icon
  { name: "Material UI", icon: materialui }, // Add Material UI icon

  { name: "Styled-Components", icon: styled },
  { name: "SASS/SCSS", icon: sass }, // Add SASS/SCSS icon

  { name: "React Router Dom", icon: router }, // Add React Router icon
  { name: "TanStack Query", icon: query }, // Add React Query icon
];

const toolsStack = [
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "Postman", icon: postman },
  { name: "VSCode", icon: vscode },
  { name: "Figma", icon: figma },
  { name: "NPM", icon: npm },
  { name: "Pixso", icon: pixso },
];

const Stack = () => {
  return (
    <FadingSection className="container py-20" id="stack">
      <SectionHeader title="My Stack" />
      <div className="bg-black   text-gray-300 space-y-30 font-sans">
        {/* FRONTEND */}
        <div className="Block lg:flex lg:gap-30 items-start">
          <h2 className="text-white! w-60  text-6xl font-semibold pb-10">
            FRONTEND
          </h2>
          <div className="flex flex-wrap gap-x-12 gap-y-10 text-lg">
            {frontendStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                <span className="text-2xl">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div className="Block lg:flex lg:gap-30 items-start">
          <h2 className="text-white! w-60  text-6xl font-semibold pb-10">
            BACKEND
          </h2>
          <div className="flex flex-wrap gap-x-12 gap-y-10 text-lg">
            {backendStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                <span className="text-2xl">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div className="Block lg:flex lg:gap-30 items-start">
          <h2 className="text-white! w-60  text-6xl font-semibold pb-10">
            TOOLS
          </h2>
          <div className="flex flex-wrap gap-x-12 gap-y-10 text-lg">
            {toolsStack.map((tool, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={tool.icon} alt={tool.name} className="w-6 h-6" />
                <span className="text-2xl">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadingSection>
  );
};

export default Stack;
