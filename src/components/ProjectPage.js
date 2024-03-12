import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <span>pro</span>jects
      </div>
      <div className="project-list">
        <div className="project">
          
          <p><h3>Tic-Tac-Toe</h3></p>
          <p>
            <span>2022</span>
            <a href="https://github.com/SoundaryaNagaraj/Tic-Tac-Toe">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          
          <p><h3>Todolistapp</h3> </p>
          <p>
            <span>2022</span>
            <a href="https://github.com/SoundaryaNagaraj/Todolistapp">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
        
          <p><h3>Password Generator</h3></p>
          <p>
            <span>2020</span>
            <a href="https://github.com/SoundaryaNagaraj/passwordgenerator">
              Tap to view
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;