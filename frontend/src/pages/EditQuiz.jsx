import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import QuizForm from "../components/QuizForm";
import "./EditQuiz.css";
function EditQuiz() {
  let [courseName, setCourseName] = useState("");
  let [quiz, setQuiz] = useState([]);
  let [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  let Quiz = (data) => {
    setQuestions((curr) => [...curr, data]);
  };
  return (
    <>
      <Navbar />
      <div className="edit-quiz">
        <div style={{ margin: "auto", width: "15%" }}>
          <h1>Create Quiz</h1>
        </div>
        <div style={{ margin: "auto", width: "15%" }}>
          <h1>Course: {courseName}</h1>
        </div>
        <div className="quiz-title">
          <h3>Quiz Title*</h3>
          <input type="text" placeholder="Enter Quiz Title"></input>
        </div>
        <div className="quiz-desc">
          <h3>Quiz Description</h3>
          <input type="text" placeholder="Enter Quiz Description"></input>
        </div>
        <div>{quiz}</div>
        <div>
          <button
            onClick={() =>
              setQuiz([...quiz, <QuizForm quiz={Quiz} error={error} />])
            }
          >
            Add question
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              // localStorage.setItem("quizSubmit", true);
              // console.log(quiz);
              console.log(questions);
            }}
          >
            submit
          </button>
        </div>
      </div>
    </>
  );
}

export default EditQuiz;
