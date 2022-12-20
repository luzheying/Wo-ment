import React from "react";
import "./style.css";
import avatar from './avatar.png'
const MentorRequest = () => {
  return (
    <div>
      <nav class="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#/about">About Us</a></li>
            <li><a href="/#/mentor/loged/request">Requests</a></li>
            <li><a href="/#/resource">Resource</a></li>
          </ul>
      </nav>
      <h1> Requests</h1>
      {/* <img src={avatar} id="img1" /> */}
      <div class="card" id="card1">
        <div class="container">
          <h4><b>Janet Figueroa</b></h4>
          <p>
            I am a senior at Columbia University looking for guidance in how to
            apply for an internship for Google.
          </p>
        </div>
      </div>
      <a href="/#/mentor/loged/request-detail">
        <button
          class="signup1"
        >
          See Request
        </button>
      </a>
      {/* <img src={avatar} id="img2" /> */}
      <div class="card" id="card2">
        <div class="container">
          <h4><b>Janet Figueroa</b></h4>
          <p>
            I am a senior at Columbia University looking for guidance in how to
            apply for an internship for google. i would love to receive help in...
          </p>
        </div>
      </div>
      <a href="/#/mentor/loged/request-detail">
        <button
          class="signup2"
        >
          See Request
        </button>
      </a>
      {/* <img src={avatar} id="img3" /> */}
      <div class="card" id="card3">
        <div class="container">
          <h4><b>Janet Figueroa</b></h4>
          <p>
            I am a senior at Columbia University looking for guidance in how to
            apply for an internship for google. i would love to receive help in...
          </p>
        </div>
      </div>
      <a href="/#/mentor/loged/request-detail">
        <button
          class="signup3"
        >
          See Request
        </button>
      </a>

      {/* <img src={avatar} id="img4" /> */}
      {/* <div class="card" id="card4">
        <div class="container">
          <h4><b>Janet Figueroa</b></h4>
          <p>
            I am a senior at Columbia University looking for guidance in how to
            apply for an internship for google. i would love to receive help in...
          </p>
        </div>
      </div>
      <a href="/#/mentor/loged/request-detail">
        <button
          class="signup4"
        >
          See Request
        </button>
      </a> */}
    </div>
  );
};

export default MentorRequest;
