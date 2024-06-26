import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const WorkExperience = () => {
  return (
    <section>
      <h2><FontAwesomeIcon icon={faBriefcase} /> Work Experience</h2>
      <div className="experience">
        <h3>Engineer at SIJNIA KONSTRUKTIE BV, Heteren, Netherlands</h3>
        <p>January 2022 – November 2023</p>
        <ul>
          <li>Manufacturing of industrial machines</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
