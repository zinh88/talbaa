import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <a href="/">
        <img src="/owlimage.png" height="60vw" alt="logo"></img>
      </a>
      <a href="/home">Home</a>
      <a href="/courseCatalogue">Course Catalogue</a>
      <a href="/myCourses">My Courses</a>
      <img src="/girlicon.png" height="60vw" alt="logo"></img>
    </div>
  );
}

export default Navbar;
