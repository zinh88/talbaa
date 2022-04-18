import React, { useEffect, useState } from "react";
import {LectureHeading, DisplayContent, InsertTextBox, ResButton, InsertQuiz, DisplayQuizzes} from "./EditLecture";
import {Button} from './CreateCourse';
import Navbar from "./../components/Navbar";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

function ViewLecture({setAuth}) {

  const [searchParams] = useSearchParams();
  const lectureId = searchParams.get('id');
  const courseId = searchParams.get('course');
  const [resources, setResources] = useState([]);
  const [title, setTitle] = useState('');
  const [quizzes, setQuizzes] = useState([]);
  var initialRes = []
  const searchQuery = 'api/lectures/get_lecture/' + lectureId
  let quiz_list = []

  useEffect( () => {
    axios.get(searchQuery, {
      headers: {
        'authorization' : localStorage.authorization
      }
    })
    .then((resp) => {
      // console.log(resp.data)
      setTitle(resp.data.title);
      // initialRes = []
      quiz_list = resp.data.quiz
      // console.log(quizzes)
      resp.data.content.forEach( (content_piece) => {
        let dataPiece = { id: content_piece.cld_reference, name: content_piece.title, type: content_piece.filetype }
        initialRes.push(dataPiece)
      }
      )
      setResources(initialRes);
      setQuizzes(quiz_list)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  const navigate = useNavigate();

  const cloudName = "dv5ig0sry";

  const [textForm, setTextForm] = useState(false);

  return(
    <div>
      <Navbar setAuth={setAuth}/>

      <LectureHeading lectureName={title}/>

      <DisplayContent resources = {resources} 
                      cloudName = {cloudName} 
                      setResources={setResources}/>    

      <DisplayQuizzes quizzes = {quizzes}
                      lectureId = {lectureId}
                      courseId = {courseId} />
                 
      {textForm && <InsertTextBox  resources = {resources}
                      setResources = {setResources}/>}


      {/* <ResButton  resources = {resources}
                  setResources = {setResources}
                  textForm = {textForm}
                  setTextForm = {setTextForm}/> */}

      <Button text="Return" event={() => navigate(`/coursePage/${courseId}`, { replace: true })} />
    </div>
  )
}

export default ViewLecture;
