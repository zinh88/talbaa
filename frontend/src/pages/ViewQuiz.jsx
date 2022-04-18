import React, { useEffect, useState } from "react";
import ViewQuizForm from "../components/ViewQuizForm";
import Navbar from "../components/Navbar";
import { PageTitle } from "./CreateCourse";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
function ViewQuiz({ setAuth }) {

  const [searchParams] = useSearchParams();
  const lectureId = searchParams.get('lId');
  const courseId = searchParams.get('cId');
  const quizId = searchParams.get('qId');
  const searchQuery = 'api/lectures/get_quiz/' + quizId;

  let [quiz, setQuiz] = useState([]);
  let [title, setTitle] = useState([]);
  let [desc, setDesc] = useState([]);
  // let [quiz, setQuiz] = useState([
  //   {
  //     question1: "How many chromosomes are there in a human cell",
  //     option1: "0",
  //     option2: "1",
  //     option3: "2",
  //     option4: "46",
  //     correct: "46",
  //   },
  //   {
  //     question1: "Which language was this application built on",
  //     option1: "python",
  //     option2: "javascript",
  //     option3: "c++",
  //     option4: "ruby",
  //     correct: "javascript",
  //   },
  // ]);


  useEffect(() => {
    axios.get(searchQuery, {
      headers: {
        'authorization': localStorage.authorization
      }
    })
    .then((resp) => {
      console.log(resp)
      setQuiz(resp.data.questions)
      setTitle(resp.data.title)
      setDesc(resp.data.description)
    })
  })

  return (
    <>
      <Navbar setAuth={setAuth} />
      <PageTitle title={title} />
      {quiz.map((question, ind) => {
        return (
          <ViewQuizForm questionNumber={ind + 1} questionData={question} />
        );
      })}
    </>
  );
}

export default ViewQuiz;
