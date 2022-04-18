import React, { useEffect, useState } from "react";
import {LectureHeading, DisplayContent, InsertTextBox, ResButton} from "./EditLecture";
import {Button} from './CreateCourse';
import Navbar from "./../components/Navbar";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function ViewLecture() {

  // const id1 = "udzo4o03kwgwjl3d7zkj";
  // const id2 = "k17pkba5cddfcpcth1dj";
  // const id3 = "uxhqhj80uihwzkwm944t";
  // const id4 = "xr7qtsex5edb7dz9tvhl";

  // let initialRes = [
  //   {id: id1, name: "Edge Computing", type:"pdf"},
  //   {id: id3, name: "Stack of Books", type:"image"},
  //   {id: id2, name: "Unknown PDF", type:"pdf"},
  //   {id: id4, name: "Circuits Tutorial", type:"video"},
  // ]
  const [searchParams] = useSearchParams();
  const lectureId = searchParams.get('id');
  var initialRes = []
  const searchQuery = 'api/courses/get_lecture/' + lectureId
  useEffect( () => {
    axios.get(searchQuery, {
      headers: {
        'authorization' : localStorage.authorization
      }
    })
    .then((resp) => {
      console.log(resp.data)
      // initialRes = []
      resp.data.content.forEach( (content_piece) => {
        let dataPiece = { id: content_piece.cld_reference, name: content_piece.title, type: content_piece.filetype }

        initialRes.append(dataPiece)
      }
      )
    })
    .catch((err) => {
      console.log(err)
    })
  })

  const [resources, setResources] = useState(initialRes);

  const cloudName = "dv5ig0sry";

  const [textForm, setTextForm] = useState(false);

  return(
    <div>
      <Navbar />

      <LectureHeading lectureName="Introduction to Machine Learning"/>

      <DisplayContent resources = {resources} 
                      cloudName = {cloudName} 
                      setResources={setResources}/>    

      {textForm && <InsertTextBox  resources = {resources}
                      setResources = {setResources}/>}


      {/* <ResButton  resources = {resources}
                  setResources = {setResources}
                  textForm = {textForm}
                  setTextForm = {setTextForm}/> */}

      <Button text="Return" route="/editLecturePage"/>
    </div>
  )
}

export default ViewLecture;
