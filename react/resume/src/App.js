import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProfessionalObjective from "./components/ProfessionalObjective"; // Check this import statement
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Courses from "./components/Courses";
import Languages from "./components/Languages";
import AdditionalInformation from "./components/AdditionalInformation";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProfessionalObjective /> {/* Ensure the component name matches */}
        <WorkExperience />
        <Education />
        <Skills />
        <Courses />
        <Languages />
        <AdditionalInformation />
        <Projects />
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Roman Sosnovskyi. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
