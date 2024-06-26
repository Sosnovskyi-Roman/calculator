import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Courses = () => {
  return (
    <section>
      <h2>
        <FontAwesomeIcon icon={faCode} /> Courses
      </h2>
      <ul>
        <li>
          HTML5/CSS3/JavaScript Fundamentals, SoftServe, February 2023 – June
          2023
        </li>
        <li>
          The Complete 2023 Web Development Bootcamp, Udemy, June 2023 – October
          2023
        </li>
        <li>The Complete JavaScript Course 2024, ongoing</li>
        <li>React, January 2022 – June 2022</li>
      </ul>
    </section>
  );
};

export default Courses;
