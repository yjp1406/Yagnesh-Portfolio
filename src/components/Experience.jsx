import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      nameobj: "HTML",
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      nameobj: "CSS",
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      nameobj: "JavaScript",
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImage,
      nameobj: "React",
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: graphql,
      nameobj: "GraphQL",
      style: 'shadow-pink-400'
    },
    {
      id: 6,
      src: github,
      nameobj: "Github",
      style: 'shadow-gray-400'
    },
    {
      id: 7,
      src: tailwind,
      nameobj: "Tailwind",
      style: 'shadow-sky-400'
    },
    {
      id: 8,
      src: nextjs,
      nameobj: "NextJs",
      style: 'shadow-white'
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src ,nameobj, style}) => (
            // eslint-disable-next-line no-useless-concat
            <div key={id} className={"shadow-md hover:scale-105 duration 500 py-2 rounded-lg" + " " + style}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{nameobj}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
