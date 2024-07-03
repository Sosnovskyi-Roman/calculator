import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import myCV from "../assets/my-cv.pdf"; // Import your CV file (replace with your actual CV file)

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleDownload = () => {
    // Function to handle the download
    const link = document.createElement("a");
    link.href = myCV;
    link.download = "Roman_Sosnovskyi_CV.pdf"; // Specify filename for the download
    link.click();
  };

  const handleContact = () => {
    navigate("/contact"); // Navigate to the /contact route
  };

  return (
    <div className="home-container">
      <h6>Hi There</h6>
      <h1>
        I’m <span className="firstname">Roman </span>
        <span className="lastname">Sosnovskyi</span>
      </h1>
      <p>I am a Web Developer</p>

      <div className="button-container">
        <button className="cv-button" onClick={handleDownload}>
          Download CV
        </button>
        <button className="contact-button" onClick={handleContact}>
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Home;
