import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const signup = (data) => {
    console.log(data);
    //validate data give as input
  };
  // const logout = () => {
  //   console.log("logout");
  // };
  return (
    <>
      <div className="login">
        {user != "" ? (
          <div className="welcome">
            <h2>
              Welcome, <span>{user}</span>
            </h2>
          </div>
        ) : (
          <SignUpForm SignUp={signup} error={error} />
        )}
      </div>
    </>
  );
}

export default SignUp;
