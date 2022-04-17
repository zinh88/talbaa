import React, { useState } from "react";
import ViewQuizForm from "../components/ViewQuizForm";
import Navbar from "../components/Navbar";
import { PageTitle } from "./CreateCourse";
function ViewQuiz() {
  let [quiz, setQuiz] = useState([
    {
      question1: "haashim ka kitni dafa kata",
      option1: "0",
      option2: "1",
      option3: "2",
      option4: "3",
      correct: "3",
    },
    {
      question1: "haashim kya kar raha hai",
      option1: "nothing",
      option2: "nothing at all",
      option3: "entirely nothing",
      option4: "all of the above",
      correct: "all of the above",
    },
  ]);
  return (
    <>
      <Navbar />
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
