import React, { Component } from "react";
import resume from "./Aboulaye_Tchakoura.pdf";
import resume_png from "./Aboulaye_Tchakoura.png";

class Resume extends Component {
  render() {
    return (
      <div id="my-resume">
        <img src={resume_png} alt="" />
        <a href={resume} rel="noopener noreferrer" target="_blank">
          {" "}
          Download
        </a>
      </div>
    );
  }
}

export default Resume;
