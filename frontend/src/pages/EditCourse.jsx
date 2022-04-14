import React, {useState} from "react";
import {} from "./../CreateCourse.css";
import Navbar from "../components/Navbar";
import { CourseInfo, Tag, Button } from "./CreateCourse";
import {Heading} from "./CreateLecture";

function EditCourse() {

  const textBox = {
    padding: "1% 0% 0% 2%",
  }

  return (
    <div>
      <Navbar/>
      <Heading courseName={"Machine Learning"}/>

      <CourseInfo name="Course Title*" style={textBox} 
                  placeholderType = "placeholderTitle" padding = "5% 0% 0% 3%" />
      <CourseInfo name="Course Description*" style={textBox} 
                  placeholderType = "placeholderDescription" padding = "3% 0% 0% 3%" />

      <Tag name="Tag 1*" style={textBox}/>
      <Tag name="Tag 2*" style={textBox}/>
      <Tag name="Tag 3*" style={textBox}/>

      <div class="titleBox" >
      <div class="titleBox"><Button text="Edit Lectures!"/></div>
      <div class="titleBox"><Button text="Save Changes!"/></div>
      </div>
      
    </div>
  )
}

export default EditCourse;
