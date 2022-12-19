import React from "react";
import "./style.css";

const nav = () => {
  return (
    <>
      <nav class="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#/about">About Us</a></li>
          <li><a href="/#/mentor">Find a Mentor</a></li>
          <li><a href="/#/mentee">Become a Mentor</a></li>
          <li><a href="/#/resource">Resource</a></li>
        </ul>
      </nav>
    </>
  );
};

export default nav;
