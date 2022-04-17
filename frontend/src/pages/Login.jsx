import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import axios from "axios";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = (data) => {
    console.log(data);
    //validate data give as input
    axios.post('api/users/login', data)
        .then((resp) => {
            console.log(resp);
            const token = resp.data.token;
            localStorage.setItem("authorization", token);
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
          <LoginForm Login={login} error={error} />
        )}
      </div>
    </>
  );
}

export default Login;
