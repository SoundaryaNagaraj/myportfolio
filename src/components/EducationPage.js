import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>experience</p>
        <p>
          <span>&</span>education
        </p>
      </div>
      <div className="education-list">
        <div className="education">
         <p>Job</p>
         <p>Software Developer</p>
          <p>
            <span>Aug'8 - Present</span>
            <a href="/">
              <LocationOnIcon />
              Salem, Tamilnadu, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>Bachelors of Engineering</p>
          <p>Gynanamani college of technology</p>
          <p>
            <span>2018-2022</span>
            <a href="/">
              <LocationOnIcon />
              Salem, Tamilnadu, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>Higher Secondary Education</p>
          <p>Government Higher Secondary School</p>
          <p>
            <span>2018</span>
            <a href="/">
              <LocationOnIcon />
              Salem, Tamilnadu, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>10th education</p>
          <p>Government Higher Secondary School</p>
          <p>
            <span>2016</span>
            <a href="/">
              <LocationOnIcon />
              Salem, Tamilnadu, India
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;