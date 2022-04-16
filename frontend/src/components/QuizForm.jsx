import React, { useState } from "react";
import "./QuizForm.css";
import {} from "./../CreateCourse.css";
function QuizForm({ quiz, err, quizno }) {
  let [question, setQuestion] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correct: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    quiz(question);
  };
  return (
    <div className="quiz-form">
      <div className="quizQuestion">Question {quizno + 1}</div>
      <form onSubmit={submitHandler}>
        <textarea
          type="text"
          placeholder="Enter your question"
          onChange={(e) => {
            setQuestion({ ...question, question: e.target.value });
          }}
          className="placeholderTitle"
        ></textarea>
        <div className="quizOption">
          <input
            type="radio"
            value="option"
            name="option"
            className="check_box"
            style={{ display: "inline" }}
            onChange={(e) => {
              setQuestion({ ...question, correct: question.option1 });
              // console.log(question.correct);s
            }}
          />
          <input
            type="radiobox"
            className="placeholderTitle"
            style={{ height: "3vh", width: "30vw" }}
            onChange={(e) => {
              setQuestion({ ...question, option1: e.target.value });
              // console.log(question.option1);
            }}
          ></input>
        </div>
        <div className="quizOption">
          <input
            type="radio"
            value="option"
            name="option"
            style={{ display: "inline" }}
            onChange={(e) => {
              setQuestion({ ...question, correct: question.option2 });
            }}
          />
          <input
            type="radiobox"
            className="placeholderTitle"
            style={{ height: "3vh", width: "30vw" }}
            onChange={(e) => {
              setQuestion({ ...question, option2: e.target.value });
            }}
          ></input>
        </div>
        <div className="quizOption">
          <input
            type="radio"
            value="option"
            name="option"
            style={{ display: "inline" }}
            onChange={(e) => {
              setQuestion({ ...question, correct: question.option3 });
            }}
          />
          <input
            type="radiobox"
            className="placeholderTitle"
            style={{ height: "3vh", width: "30vw" }}
            onChange={(e) => {
              setQuestion({ ...question, option3: e.target.value });
            }}
          ></input>
        </div>
        <div className="quizOption">
          <input
            type="radio"
            value="option"
            name="option"
            style={{ display: "inline" }}
            onChange={(e) => {
              setQuestion({ ...question, correct: question.option4 });
            }}
          />
          <input
            type="radiobox"
            className="placeholderTitle"
            style={{ height: "3vh", width: "30vw" }}
            onChange={(e) => {
              setQuestion({ ...question, option4: e.target.value });
            }}
          ></input>
        </div>
        <input
          className="addButton"
          style={{
            margin: "0.75rem 0.75rem 0.75rem 1.5rem",
            fontWeight: "400",
            fontSize: "small",
            textDecoration: "none",
            height: "auto",
            width: "8vw",
            padding: "0.5rem",
          }}
          type="submit"
          value="Upload question"
        />
      </form>
    </div>
  );
}

export default QuizForm;
