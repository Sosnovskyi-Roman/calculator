import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <section>
      <h2>
        <FontAwesomeIcon icon={faProjectDiagram} /> Projects
      </h2>
      <div className="project">
        <h3>Todo List Application</h3>
        <p>
          A simple application for managing a to-do list. Allows users to add,
          delete, and mark tasks as completed.
        </p>
      </div>
      <div className="project">
        <h3>Personal Blog</h3>
        <p>
          A personal blog for publishing articles and comments. Includes a user
          authentication system and an admin panel for managing content.
        </p>
      </div>
      <div className="project">
        <h3>Weather Dashboard</h3>
        <p>
          An interactive dashboard for displaying current weather conditions in
          a selected city. Uses an API to fetch weather data.
        </p>
      </div>
    </section>
  );
};

export default Projects;
