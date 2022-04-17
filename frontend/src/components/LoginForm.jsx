import React, { useState } from "react";
import "./LoginForm.css";
function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    
    Login(details);
  };
  return (
    <div className="loginForm">
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h1>Login</h1>
          {/*Error*/}
          <div>
            <p>Please enter you Email and your Password</p>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              onChange={(e) => {
                setDetails({ ...details, email: e.target.value });
              }}
              value={details.email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={(e) => {
                setDetails({ ...details, password: e.target.value });
              }}
              value={details.password}
            />
          </div>
          <div className="forgot">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              Forgot password?
            </a>
          </div>
          <input type="submit" value="Login" />
        </div>
        <div>
          <p className="notmember">
            Not a member yet?
            <a href="/signup">Register!</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
