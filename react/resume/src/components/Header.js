import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profileImage from "../assets/images/profile.jpeg"; // Adjust path based on your project structure

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="profile">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <h1>Roman Sosnovskyi</h1>
        <p>Junior Web Developer</p>
        <address>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            Lwówek Śląski, 59-600, Poland
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +48 735 618 498
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:roman.sosnovskiy@interia.pl">
              roman.sosnovskiy@interia.pl
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faLinkedin} />{" "}
            <a
              href="https://linkedin.com/in/roman-sosnovskyi-86743229a"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/roman-sosnovskyi-86743229a
            </a>
          </p>
        </address>
      </div>
    </header>
  );
};

export default Header;
