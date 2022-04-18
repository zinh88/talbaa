import React, { useState } from "react";
import ViewQuizForm from "../components/ViewQuizForm";
import Navbar from "../components/Navbar";
import { PageTitle } from "./CreateCourse";
function ViewQuiz({ setAuth }) {
  let [quiz, setQuiz] = useState([
    {
      question1: "How many chromosomes are there in a human cell",
      option1: "0",
      option2: "1",
      option3: "2",
      option4: "46",
      correct: "46",
    },
    {
      question1: "Which language was this application built on",
      option1: "python",
      option2: "javascript",
      option3: "c++",
      option4: "ruby",
      correct: "javascript",
    },
  ]);
  return (
    <>
      <Navbar setAuth={setAuth} />
      <PageTitle title={"View Quiz"} />
      {quiz.map((question, ind) => {
        return (
          <ViewQuizForm questionNumber={ind + 1} questionData={question} />
        );
      })}
    </>
  );
}

export default ViewQuiz;
