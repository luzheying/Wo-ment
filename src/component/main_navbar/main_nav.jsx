import React from "react";
import "./style.css";

const nav = () => {
  return (
    <>
      <nav class="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#/about">About Us</a></li>
          <li><a href="#">Requests</a></li>
          <li><a href="#">Resource</a></li>
        </ul>
      </nav>
    </>
  );
};

export default nav;
