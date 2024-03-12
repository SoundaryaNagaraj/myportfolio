import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        ab<span>out</span>
      </div>
      <div className="about-info">
        <div className="about-left">
        I am a dedicated and results-oriented software developer with proficiency in Python, C, HTML, CSS, JavaScript, ReactJS, MongoDB, and version control using GitHub. 
        </div>
        <div className="about-right">
          <p>
            I am Soundarya, a Software Developer with 1.5 years of professional experience. Throughout my journey in programming, I have honed my abilities to craft resilient and adaptable solutions for complex problems.
          </p>
          <p>
            My goal is to leverage my expertise to contribute meaningfully to projects that have a positive impact on businesses and society as a whole.
          </p>
          <p>
            With a passion for technology and a commitment to excellence, I am eager to tackle new challenges and drive innovation in the ever-evolving landscape of software development.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;