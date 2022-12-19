import React from "react";
import "./style.css";

const MentorSignup = () => {
  return (
    <>
    <h1>Sign up</h1>

    <div class="create-account">
      <div class="form">
        <form class="create-form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign up</button>
        </form>
      </div>
    </div>
    <a href="/">create new account</a>
    </>
  );
};

export default MentorSignup;
