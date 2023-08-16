import React from "react";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import javascriptIcon from "../assets/javascript.png";
import reactIcon from "../assets/react.png";
import expressIcon from "../assets/express.png";
import mongodbIcon from "../assets/mongo.png";
import nodeIcon from "../assets/node.png";
import githubIcon from "../assets/github.png";
import bootstrapIcon from "../assets/bootstrap.png";
import tailwindIcon from "../assets/tailwind.png";
import postmanIcon from "../assets/postman.png";

const Skills = () => {
  const skillsData = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "React", icon: reactIcon },
    { name: "Express", icon: expressIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "Node", icon: nodeIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Tailwind", icon: tailwindIcon },
    { name: "Postman", icon: postmanIcon },
  ];

  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            These are the technologies I have worked with.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="shadow-md shadow-[#040c16]">
              <img className="w-20 mx-auto" src={skill.icon} alt={`${skill.name} icon`} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
