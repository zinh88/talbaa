import React, { useState } from "react";
import UploadButton from "../components/UploadButton";
import Navbar from "./../components/Navbar";
import { Image, Video} from "cloudinary-react";
import {} from './../EditLecture.css'
import { CourseInfo, Button } from "./CreateCourse";
import {} from "./../CreateCourse.css";
import { useNavigate } from "react-router-dom";

function InsertImage({id, cloudName}){
  return(
    <div class = "image">
      <Image
        cloudName={cloudName}
        publicId={id}
        width="70%"
      />
    </div>
  )
}

function InsertPDF({id, cloudName, name}){
  return(
    <div class = "pdfLinks">
      <a
        href={`http://res.cloudinary.com/${cloudName}/image/upload/${id}`}
        target="_blank"
      >
        {name}
      </a>
    </div>
  )
}

function InsertVideo({id, cloudName}){
  return(
    <div class="video">
      <Video width= "95%" cloudName={cloudName} publicId={id} controls="true"/>
    </div>
  )
}

export function InsertTextBox({resources,setResources}){

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const textBox = {
    padding: "1% 0% 0% 2%",
  };

  const borderBox = {
    "border" : "1px solid black",
    "margin-top":"5%",
    "margin-left":"5%",
    "padding-bottom":"3%",
    "width": "900px"
  }

  function SubmitButton({title, note, resources, setResources}){
    const buttonStyle = {
      "padding-top":"0.35rem",
      "font-size":"15px",
      "margin-top":"3%",
      "margin-left":"4%"
    }
    
    return(
      <div  class = "style" style = {buttonStyle}
            onClick = {() => {
              let JSONobj = { id: {note},
                              name: {title},
                              type: "textBox"}
              setResources([...resources,JSONobj])
            }}>
        Submit
      </div>
    )
  }


  return(
    <div style = {borderBox}>

      <CourseInfo  
      name = "Title*"
      style = {textBox}
      placeholderType = "placeholderTitle"
      padding = "5% 0% 0% 3%"
      state = {title}
      setState = {setTitle}
      />
      <CourseInfo  
      name = "Text*"
      style = {textBox}
      placeholderType = "placeholderDescription"
      padding = "5% 0% 0% 3%"
      state = {note}
      setState = {setNote}
      />

      <SubmitButton
        title = {title}
        note = {note}
        resources = {resources}
        setResources = {setResources}
      />
    </div>
  )
}

export function DisplayContent({resources, cloudName, setResources}){
  
  const textStyle = {
    "margin-left":"5%",
    "margin-top":"4%"
  }
  
  return(
    <div>
      {
        resources.map((value) => {
          if (value.type == "image"){
            return <InsertImage 
                    id={value.id} 
                    cloudName={cloudName}/>
          } else if (value.type == "pdf"){
            return <InsertPDF 
                    id={value.id} 
                    cloudName={cloudName} 
                    name={value.name}/>
          } else if (value.type == "textBox"){
            return (
              <div style = {textStyle}>
                <h1>{value.name.title}</h1>
                <h3>{value.id.note}</h3>
              </div>
            )
          } else if (value.type == "video"){
            return <InsertVideo 
                    id={value.id} 
                    cloudName={cloudName}/>
          } 
        })
      }
    </div>
  )
}

function DropDown({resources,setResources, textForm, setTextForm}) {
  const itemStyle = {
    "font-size" : "13px",
    "padding-top": "0.5rem"
  };

  let navigate = useNavigate();

    const handleClick = (route) => {
      navigate(route);
    };

  const textEvent = () => {
    // console.log("Enter Event here")
    return(
      setTextForm(!textForm)
    )
  }

  const quizEvent = () => {

    // console.log("Enter Event here")
    handleClick("/createQuiz")
  }
  

  function AddResourceButton({text,event}){
    return(
      <div>
        <p  class = "style" 
            style = {itemStyle}
            onClick = {event}>
          {text}
        </p>
      </div>
    )
  }

  function GenerateDropdown(){
    return(
      <div>
        <UploadButton/>
        <AddResourceButton 
          text = "Add Text Box" event = {textEvent} />
        <AddResourceButton 
          text = "Add Quiz" event = {quizEvent} />
      </div>
    )
  }

  return (
    <div>
      <GenerateDropdown/>
    </div>
  );
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

  return(
    <div class="clickButton" >
      <h1 class="clickText" 
          style={style}
          onClick = {event} >
          {text}
      </h1> 
    </div>
  )
}

export function ResButton({resources,setResources,textForm, setTextForm}){

  const textStyle = {
    "padding-top": "clamp(4%,4%,4%)",
    "font-size" : "100%",
    "padding-left": "clamp(20px, 20px, 30px)",
    "padding-right": "clamp(20%, 20%, 50%%)",
  }

  const buttonStyle = {
    "padding-left": "clamp(10%, 30%, 50%)",
    "padding-top": "clamp(3%,3%,3%)",
  }

  const [open, setOpen] = useState(false);

  return(
    <div class="insertBox">
        <div class = "clickButton">
          <div class = "row">
            <div style = {buttonStyle}>
              <AddButton 
              event = {
                () => {setOpen(!open);}
              }
              text = "+"
              />
            </div>
            <div style = {textStyle}>
              Add Resources
            </div>
          </div>
          <div class = "shiftDropdown">
            {open && <DropDown
                      resources = {resources}
                      setResources = {setResources}
                      textForm = {textForm}
                      setTextForm = {setTextForm}/>}
          </div>
        </div>
    </div>  
  )
}

export function LectureHeading({lectureName}){
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
    <p>Lecture:</p>
    <p style={nameStyle}>{lectureName}</p>
  </p>
  )
}


function EditLecture() {
  const id1 = "udzo4o03kwgwjl3d7zkj";
  const id2 = "k17pkba5cddfcpcth1dj";
  const id3 = "uxhqhj80uihwzkwm944t";
  const id4 = "xr7qtsex5edb7dz9tvhl";

  let initialRes = [
    {id: id1, name: "Edge Computing", type:"pdf"},
    {id: id3, name: "Stack of Books", type:"image"},
    {id: id2, name: "Unknown PDF", type:"pdf"},
    {id: id4, name: "Circuits Tutorial", type:"video"},
  ]

  const [resources, setResources] = useState(initialRes);

  const cloudName = "dv5ig0sry";

  const [textForm, setTextForm] = useState(false);

  return (
    <div>
      <Navbar />

      <LectureHeading lectureName="Introduction to Machine Learning"/>

      <DisplayContent resources = {resources} 
                      cloudName = {cloudName} 
                      setResources={setResources}/>    

      {textForm && <InsertTextBox  resources = {resources}
                      setResources = {setResources}/>}


      <ResButton  resources = {resources}
                  setResources = {setResources}
                  textForm = {textForm}
                  setTextForm = {setTextForm}/>

      <Button text="Return" route="/editLecturePage"/>
    </div>

  );
}

export default EditLecture;