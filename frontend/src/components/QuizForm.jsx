import React, { useState } from "react";

function QuizForm({ quiz, err }) {
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
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your question"
          onChange={(e) => {
            setQuestion({ ...question, question: e.target.value });
          }}
        ></input>
        <div>
          <input
            type="radio"
            value="option"
            name="option"
            style={{ display: "inline" }}
            onChange={(e) => {
              setQuestion({ ...question, correct: question.option1 });
              // console.log(question.correct);s
            }}
          />
          <input
            type="radiobox"
            onChange={(e) => {
              setQuestion({ ...question, option1: e.target.value });
              // console.log(question.option1);
            }}
          ></input>
        </div>
        <div>
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
            onChange={(e) => {
              setQuestion({ ...question, option2: e.target.value });
            }}
          ></input>
        </div>
        <div>
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
            onChange={(e) => {
              setQuestion({ ...question, option3: e.target.value });
            }}
          ></input>
        </div>
        <div>
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
            onChange={(e) => {
              setQuestion({ ...question, option4: e.target.value });
            }}
          ></input>
        </div>
        <input type="submit" value="Upload question" />
      </form>
    </div>
  );
}

export default QuizForm;
