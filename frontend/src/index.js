import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:8800/';
axios.defaults.baseURL = "https://talbaa-backend.herokuapp.com/";
=======
import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:8800/';
axios.defaults.baseURL = 'https://talbaa-backend.herokuapp.com/'
>>>>>>> 08fa049b854213e836482f9f28a1e3fd2f785578

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
