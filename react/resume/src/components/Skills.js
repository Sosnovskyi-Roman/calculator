import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section>
      <h2>
        <FontAwesomeIcon icon={faTools} /> Skills
      </h2>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React.js, Node.js, Bootstrap</li>
        <li>SQL</li>
        <li>Git</li>
        <li>Agile, Scrum</li>
      </ul>
    </section>
  );
};

export default Skills;
