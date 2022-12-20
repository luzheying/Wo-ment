import React from "react";
import "./style.css";
import resource1 from './Resource1.jpg'

const Resource = () => {
  return (
    <div>
    <nav class="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#/about">About Us</a></li>
          <li><a href="/">Find a Mentor</a></li>
          <li><a href="/#/mentor/signup">Become a Mentor</a></li>
          <li><a href="/#/resource">Resource</a></li>
        </ul>
    </nav>
      <h1>Resources</h1>
        <div class="card" id="card1">
          <div class="container">
            {/* <h4>Offline v.s Online mentor</h4> */}
              <a href="https://www.mentorcloud.com/blog/2015-4-13-offline-vs-online-how-do-traditional-and-e-mentoring-compare"
                target="_blank" style={{ alignSelf: 'center' }}> Offline v.s Online mentor
              </a>
          </div>
        </div>

        <div class="card" id="card2">
          <div class="container">
            {/* <h4><b>Advice on Getting a Mentorship</b></h4> */}
            <a href="https://.org/resources-for-mentoring-programs/" target="_blank"> Advice on Getting a Mentorship

              </a>
          </div>
        </div>

        <div class="card" id="card3">
          <div class="container">
            {/* <h4><b>Career Fair</b></h4> */}
            <a
              href="https://www.careereducation.columbia.edu/event-type/career-fair"
              target="_blank">Career Fair
              {/* // ><img src="Resource3.jpg" alt="website image" ></img> */}
              </a>
          </div>
        </div>


    </div>
  );
};

export default Resource;
