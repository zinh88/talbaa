import React, { useState } from "react";
import "./Navbar.css";
import { Tag } from "../pages/CreateCourse";

function Navbar() {
  let [signout, setSignout] = useState(false);
  return (
    <div className="header">
      <a href="/">
        <img src="/owlimage.png" height="60vw" alt="logo"></img>
      </a>
      <a href="/home">Home</a>
      <a href="/courseCatalogue">Course Catalogue</a>
      <a href="/myCourses">My Courses</a>
      <img
        src="/girlicon.png"
        height="60vw"
        alt="logo"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setSignout(!signout);
          console.log(signout);
        }}
      ></img>
      {signout ? <a href="/">Sign Out</a> : <></>}
    </div>
  );
}

export default Navbar;
