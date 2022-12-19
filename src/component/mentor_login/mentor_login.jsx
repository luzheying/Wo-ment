import React from "react";
import "./style.css";

const MentorLogin = () => {
  return (
    <>
    <h1>Log in</h1>

    <div class="create-account">
      <div class="form">
        <form class="create-form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="/" class="button">Log in</a>
          <a href="/" >create new account</a>
        </form>
      </div>
    </div>

    </>
  );
};

export default MentorLogin;
