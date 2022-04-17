import React from "react";
import Navbar from "./../components/Navbar";
import {} from "./../CreateLecture.css"
import {CourseInfo, Button} from './CreateCourse'

export function Heading({courseName}){
  const style = {
    "display": "flex",
    "align-items": "center",
    "justify-content":"center",
    "padding": "3% 0% 0% 0%",
  }
  const nameStyle = {
    "color":"#007E8E"
  }
  return(
  <p style={style} class="pageTitle">
    <p>Course:</p>
    <p style={nameStyle}>{courseName}</p>
  </p>
  )
}

function CreateLecture() {

  const textBox = {
    padding: "1% 0% 0% 2%",
  }

  return (
    <div >
      <Navbar />
      <Heading courseName={"Machine Learning"}/>

      <CourseInfo name="Lecture Title*" style={textBox} 
                  placeholderType = "placeholderTitle" padding = "5% 0% 0% 3%" />

      <Button text="Add Resources!" link = "/editLecture"/>
    </div>
  )
}

export default CreateLecture;