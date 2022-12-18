import React from "react";
import "./style.css";

const Mentor_Login = () => {
  return (
    <>
    <h1>Log in</h1>

    <div class="create-account">
      <div class="form">
        <form class="create-form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Log in</button>
        </form>
      </div>
    </div>
    <a href="/">create new account</a>
    </>
  );
};

export default Mentor_Login;
