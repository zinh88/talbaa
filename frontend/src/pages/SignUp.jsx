import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import axios from "axios";

function SignUp({setAuth}) {
    const [user, setUser] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const signup = (data) => {
        axios.post('api/users/register', data)
        .then((resp) => {
            console.log(resp);
            const token = resp.data.token;
            localStorage.setItem("authorization", token);
            setAuth(true);
        })
        .catch((err) => {
            console.log(err);
        })
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
