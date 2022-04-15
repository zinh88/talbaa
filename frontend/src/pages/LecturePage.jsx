import React,{useState} from "react";
import Navbar from "./../components/Navbar";
import {Button, PageSubTitle, PageTitle} from "./CreateCourse"

function Lectures(){

  const style = {
    "padding": "3% 5% 0% 4%",
  }

  return(
    <div class="column" style={style}>
      <PageSubTitle subTitle = "Lectures" padding = "5% 0% 0% 5%"/>
    </div>
  )
}

function LectureComponenet({ name}){
  const style = {
    "font-weight":"400",
    "padding": "1% 5% 0% 5%",
    "text-decoration": "none",
  }

  return(
    <h1 style={style} href = "#" class="lectureText" >
      {name}
    </h1>
  )
}

function AddButton({event,text}){
  const style = {
    "width": "2rem",
    "height": "2rem",
    "border-radius": "1rem",
    "font-size": "2rem",
    "font-weight": "600",
    "text-decoration": "none",
  }

  const button = {
    "padding": "3% 80% 0% 2%",
  }

  return(
    <div class="column" style={button}>
      <h1 class="addButton" 
          style={style}
          onClick = {event} >
        {text}
      </h1> 
    </div>
  )
}

function LecturePage() {
    const lectureData = [
      {id: 0, name: "Lecture 1"},
      {id: 1, name: "Lecture 2"},
      {id: 2, name: "Lecture 3"}
    ]

  const [lectures, setLectures] = useState(lectureData);

  return (
    <div>
      <Navbar />

      <PageTitle title = "Add Lectures"/>

      <div class ="row" >
        <Lectures/>
        <AddButton 
        event = {
          () => {
            setLectures([...lectures,{id:3, name:"Lecture"}])
            console.log(lectures);
            {lectures.map((values) => {
              return <LectureComponenet name={values.name}/>
            })}
          }
        }
        lectures = {lectures} 
        setLectures={setLectures} 
        text="+"
        />
      </div> 

      <div >
          {lectures.map((values) => {
            return <LectureComponenet name={values.name}/>
          })}
      </div>
      
      <Button text="Create Course!"/>

    </div>
  );
}

export default LecturePage;