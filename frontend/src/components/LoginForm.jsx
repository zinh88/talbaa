import React, { useState } from "react";
import "./LoginForm.css";
function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ username: "", password: "" });
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
            <p>Please enter you Username and your Password</p>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={(e) => {
                setDetails({ ...details, username: e.target.value });
              }}
              value={details.username}
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
          <div className="forgot">Forgot password?</div>
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
