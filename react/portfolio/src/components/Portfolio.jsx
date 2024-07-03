// src/components/Portfolio.js
import React from "react";

const Portfolio = () => (
  <div className="portfolio">
    <h2>Portfolio</h2>
    <div className="project">
      <h3>Project 1: Industrial Machine Design</h3>
      <p>
        Developed the design and production process for an industrial machine
        used in manufacturing.
      </p>
      <img src="project1.jpg" alt="Industrial Machine Design" />
    </div>
    <div className="project">
      <h3>Project 2: Ventilation System Optimization</h3>
      <p>
        Optimized the ventilation systems for a large commercial building,
        improving efficiency by 30%.
      </p>
      <img src="project2.jpg" alt="Ventilation System Optimization" />
    </div>
    {/* Add more projects as needed */}
  </div>
);

export default Portfolio;
