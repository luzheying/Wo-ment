import React from "react";
import "./style.css";

const MentorCreateProfile = () => {
  return (
    <>
      {/* <div class="container"> */}
      <nav class="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#/about">About Us</a></li>
          <li><a href="/">Find a Mentor</a></li>
          <li><a href="/#/mentor/signup">Become a Mentor</a></li>
          <li><a href="/#/resource">Resource</a></li>
        </ul>
      </nav>
        <h1> Create Profile</h1>
        <img src="/avatar.png" alt="female profile" />
      {/* </div> */}
      <div class="container-right">
      <form>
        <label>
          First Name:
          <input type="text" name="name" />
        </label>
        <label>
          Last Name:
          <input type="text" name="name" />
        </label> 
        <div className='new-line'>
          <br />
        </div>
        <label>
          Last Name:
          <input type="text" name="name" />
        </label>
      
        <div className='new-line'>
          <br />
        </div>

        <label for="industry">Industry <br /></label>
        <select name="industry" id="industry">
          <option value="blank"></option>
          <option value="ad_and_marketing">Advertising and Marketing</option>
          <option value="space">Aerospace</option>
          <option value="agriculture">Agriculture</option>
          <option value="tech">Tech</option>
          <option value="education">Education</option>
          <option value="entertainment">Entertainment</option>
          <option value="energy">Energy</option>
          <option value="fashion">Fashion</option>
          <option value="finance">Finance</option>
          <option value="health">Health Care</option>
        </select>

        <div className='new-line'>
          <br />
        </div>
        <label for="position">Position <br /></label>
        <input type="text" id="position" name="position" />

        <div className='new-line'>
          <br />
        </div>

        <label for="company">Company <br /></label>
        <input type="text" id="company" name="company" />

        <div className='new-line'>
          <br />
        </div>

        <label for="email">Email <br /></label>
        <input type="text" id="email" name="email" />

        <div className='new-line'>
          <br />
        </div>
        <p>Help you would like to provide:</p>
        <input type="checkbox" id="resume" name="resume" value="Resume" />
        <label for="resume"> Resume Review</label><br />
        <input type="checkbox" id="career" name="career" value="Career" />
        <label for="resume"> Career Advice</label><br />
        <input type="checkbox" id="referral" name="referral" value="Referral" />
        <label for="referral"> Referral</label>
        <div className='new-line'>
          <br />
        </div>
        <p>
        <label for="introduction">Self Introduction</label>
        </p>
        <textarea
          id="introduction"
          name="introduction"
          rows="4"
          cols="50"
          placeholder="Write your introduction"
        ></textarea>

        <div className='new-line'>
          <br />
        </div>
        
        <a href="/#/mentor/loged">
        <button type="button">
            submit
        </button>
        </a>
      </form>
      </div>

    </>
  );
};

export default MentorCreateProfile;
