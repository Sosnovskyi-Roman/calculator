// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">
          <Logo />
        </Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about"> About</Link>
      </li>
      {/* <li>
        <Link to="/resume">Resume</Link>
      </li> */}
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      {/* <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li> */}
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
