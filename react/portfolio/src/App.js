// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
// import Skills from "./components/Skills";
// import Courses from "./components/Courses";
import Contact from "./components/Contact";
import "./App.css";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/skills" element={<Skills />} />
          <Route path="/courses" element={<Courses />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
