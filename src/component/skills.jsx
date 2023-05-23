import React from "react";
import javascript from "../assets/javascript.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import mongodb from "../assets/mongo.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import express from "../assets/express.png";
import bootstrap from "../assets/bootstrap.png";
import postman from "../assets/postman.png";

const Skills = () => {
  return (
    <div name="Skills" className="bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
          These are the technologies i have worked with.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16]">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img className="w-20 mx-auto" src={css} alt="CSS icon" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img
              className="w-20 mx-auto"
              src={javascript}
              alt="JavaScript icon"
            />
            <p>JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img className="w-20 mx-auto" src={react} alt="React icon" />
            <p>React</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img className="w-20 mx-auto" src={express} alt="Express icon" />
            <p>Express</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img className="w-20 mx-auto" src={mongodb} alt="MongoDB icon" />
            <p>MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img className="w-20 mx-auto" src={node} alt="Node icon" />
            <p>Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img className="w-20 mx-auto" src={github} alt="GitHub icon" />
            <p>GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img
              className="w-20 mx-auto"
              src={bootstrap}
              alt="Bootstrap icon"
            />
            <p>Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img className="w-20 mx-auto" src={tailwind} alt="TailWind icon" />
            <p>TailWind</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img className="w-20 mx-auto" src={postman} alt="Postman icon" />
            <p>Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
