import React from "react";
import "./style.css";

const MentorRequestDetail = () => {
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
    <h2>Janet Figueroa</h2>
        <div class="InfoBox">

        </div>
        <span class="TextInfo"
          >Education: Columbia University, BS, Finance<br /><br />
          Industry: Finance<br /><br />
          Service: Resume Review<br /><br />
          Self-Introduction: I am a senior at Columbia University looking for
          guidance on how to apply for an internship at Google.
        </span>
        <div class="container">
          <a href="/#/mentor/loged/approve" class="button">Approve Request</a>
        </div>
    </div>
  );
};

export default MentorRequestDetail;
