import React, { useState } from "react";
import "./LoginForm.css";
function SignUpForm({ SignUp, error }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    password2: ""
  });
  const submitHandler = (e) => {
    e.preventDefault();

    SignUp(details);
  };
  return (
    <div className="loginForm">
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h1>Signup</h1>
          {/*Error*/}
          <div>
            <p>Please enter the following details to set up an account</p>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              onChange={(e) => {
                setDetails({ ...details, name: e.target.value });
              }}
              value={details.name}
            />
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
              type="email"
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
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password2"
              placeholder="re-enter password"
              onChange={(e) => {
                setDetails({ ...details, password2: e.target.value });
              }}
              value={details.password2}
            />
          </div>
          {/* <div className="forgot">Forgot password?</div> */}
          <input type="submit" value="Sign Up" />
        </div>
        <div>
          <p className="notmember">
            Already a member?
            <a href="/signup">Login!</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
