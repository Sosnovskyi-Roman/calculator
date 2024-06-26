import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <section>
      <h2>
        <FontAwesomeIcon icon={faGraduationCap} /> Education
      </h2>
      <div className="education">
        <h3>Technical and Economic College, Lviv, Ukraine</h3>
        <p>Ventilation Systems Engineer, October 2015 – June 2018</p>
      </div>
    </section>
  );
};

export default Education;
