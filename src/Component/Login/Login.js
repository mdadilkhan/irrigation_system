import React from "react";
import "./Style.css";
import "boxicons/css/boxicons.min.css";

const Login = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="header">
          <header>
            {" "}
            <img src="images/logo.png" alt="" />
          </header>
          <p>Log In to Control</p>
        </div>
        <form action="">
          <div className="input-box">
            <label>E-mail</label>
            <input type="email" className="input-field" required />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box">
            <label>Password</label>
            <input type="password" className="input-field" required />
            <i className="bx bx-lock"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="input-submit" value="SIGN IN" />
          </div>
          <div className="forgot">
            <span>Sign Up</span>
            <span>Forgot password?</span>
          </div>
        </form>
      </div>
      <div className="wrapper"></div>
    </div>
  );
};

export default Login;
