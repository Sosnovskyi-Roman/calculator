// src/components/Skills.js
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";

const Skills = () => (
  <div className="skills">
    <h2>Skills</h2>
    <div className="skill">
      <FaHtml5 size={40} />
      <span>HTML</span>
    </div>
    <div className="skill">
      <FaCss3Alt size={40} />
      <span>CSS</span>
    </div>
    <div className="skill">
      <FaJs size={40} />
      <span>JavaScript</span>
    </div>
    <div className="skill">
      <FaReact size={40} />
      <span>React.js</span>
    </div>
    <div className="skill">
      <FaNode size={40} />
      <span>Node.js</span>
    </div>
    <div className="skill">
      <FaGitAlt size={40} />
      <span>Git</span>
    </div>
    {/* Add more skills as needed */}
  </div>
);

export default Skills;
