import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Frontend
import html from "/html.png";
import css from "/css.png";
import js from "/js.png";
import ReactIcon from "/React.png";
import redux from "/redux.svg";
import zustand from "/zustand.svg";
import nextjs from "/next.png";
import tailwind from "/tailwind.png";
import bootstrap from "/bootstrap.png";
import materialui from "/metarialui.png";
import styled from "/s.svg";
import sass from "/sass.png";
import router from "/react-router.svg";
import query from "/tan.png";

// Backend
import node from "/node.png";
import firebase from "/firebase.png";
import ex from "/ex.png";
import mongodb from "/mongodb.png";
import mysql from "/mysql.png";
import postgresql from "/postgresql.png";
import prisma from "/prisma.png";
import jwt from "/jwt.png";
import rest from "/rest.png";
import socketio from "/socket.png";
import vercel from "/vercel.png";

// Tools
import git from "/git.png";
import github from "/github.png";
import postman from "/postman.png";
import vscode from "/vscode.png";
import figma from "/figma.png";
import npm from "/npm.png";
import pixso from "/pixso.png";

const techStack = [
  html,
  css,
  js,
  ReactIcon,
  redux,
  zustand,
  nextjs,
  tailwind,
  bootstrap,
  materialui,
  styled,
  sass,
  router,
  query,
  node,
  ex,
  firebase,
  mongodb,
  mysql,
  postgresql,
  prisma,
  jwt,
  rest,
  socketio,
  vercel,
  git,
  github,
  postman,
  vscode,
  figma,
  npm,
];

const Carousel = () => {
  const settings = {
    infinite: true,

    speed: 1500,
    cssEase: "linear",
    slidesToShow: 10,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Tailwind's sm breakpoint
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 990, // Tailwind's sm breakpoint
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto mt-15 sm:mt-20 md:mt-40 xl:mt-24">
      <Slider {...settings}>
        {techStack.map((icon, index) => (
          <div key={index} className="   px-2 flex justify-center items-center">
            <img
              src={icon}
              alt="tech"
              className="h-18 md:h-20 lg:h-24 mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
