import React from "react";
import "./style.css";

const MentorLogin = () => {
  return (
    <>
    
    <nav class="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#/about">About Us</a></li>
          <li><a href="/">Find a Mentor</a></li>
          <li><a href="/#/mentor/signup">Become a Mentor</a></li>
          <li><a href="/#/resource">Resource</a></li>
        </ul>
      </nav>
    <div style={{display: 'flex',  justifyContent:'center', textAlign:'center', height: '100px', width:'100%'}} >
    <h1>Log in</h1>
    </div>

    <div class="create-account">
      <div class="form">
        <form class="create-form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="/#/mentor/loged/request" class="button">Log in</a>
          <a href="/#/mentor/signup" >create new account</a>
        </form>
      </div>
    </div>

    </>
  );
};

export default MentorLogin;
