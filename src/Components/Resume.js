import React, { Component } from "react";
import resume from "./Aboulaye_Tchakoura.pdf";
import resume_png from "./Aboulaye_Tchakoura.png";
import "./resume.css";

class Resume extends Component {
  render() {
    return (
      <div id="my-resume">
        <img id="resume" src={resume_png} alt="" />
        <a href={resume} rel="noopener noreferrer" target="_blank">
          {" "}
          Download
        </a>
      </div>
    );
  }
}

export default Resume;
