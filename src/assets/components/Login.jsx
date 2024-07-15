import React from "react";
import { User } from "./icons";

const Login = () => {
  return (
    <div className="login">
      <h2 className="heading">Welcome</h2>
      <p className="subheading">We are glad to see you back with us</p>
      <div className="form">
        <div className="inputs-wrapper">
          <div className="input-icon user-icon">
            <User />
          </div>
          <input type="text" name="name" placeholder="Username" />
        </div>
        <div className="inputs-wrapper">
          <div className="input-icon user-icon">
            <User />
          </div>
          <input type="text" name="pwd" placeholder="Password" />
        </div>
      </div>
    </div>
  );
};

export default Login;
