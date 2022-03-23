import React, { Component } from "react";
import resume from "./Aboulaye_Tchakoura.pdf";

class Resume extends Component {
  render() {
    return (
      <div id="my-resume">
        <a href={resume} rel="noopener noreferrer" target="_blank">
          {" "}
          Download
        </a>
      </div>
    );
  }
}

export default Resume;
