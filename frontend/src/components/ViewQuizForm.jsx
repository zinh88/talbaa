import React, { useEffect, useState } from "react";
import "./QuizForm.css";
import {} from "./../CreateCourse.css";
function ViewQuizForm({ questionNumber, questionData }) {
  //   let [question, setQuestion] = useState({
  //     question1: questionData.question,
  //     option1: questionData.option1,
  //     option2: questionData.option2,
  //     option3: questionData.option3,
  //     option4: questionData.option4,
  //     correct: questionData.correct,
  //   });
  const submitHandler = (e) => {
    e.preventDefault();
    // quiz(question);
  };
  return (
    <div
      className="quiz-form"
      style={{ margin: "2rem", marginLeft: "1.75rem" }}
    >
      <div className="quizQuestion">Question {questionNumber}</div>
      <p className="placeholderTitle">{questionData.question1}</p>
      <div className="quizOption">
        <input
          type="radio"
          value={`option${questionNumber}`}
          name={`option${questionNumber}`}
          className="check_box"
          style={{ display: "inline" }}
          // onChange={(e) => {
          //   setQuestion({ ...question, correct: question.option1 });
          //   // console.log(question.correct);s
          // }}
        />
        <p
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.5rem 0.5rem 0rem 1rem",
          }}
        >
          {questionData.option1}
        </p>
      </div>
      <div className="quizOption">
        <input
          type="radio"
          value={`option${questionNumber}`}
          name={`option${questionNumber}`}
          style={{ display: "inline" }}
          // onChange={(e) => {
          //   setQuestion({ ...question, correct: question.option2 });
          // }}
        />
        <p
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.5rem 0.5rem 0rem 1rem",
            height: "auto",
          }}
        >
          {questionData.option2}
        </p>
      </div>
      <div className="quizOption">
        <input
          type="radio"
          value={`option${questionNumber}`}
          name={`option${questionNumber}`}
          style={{ display: "inline" }}
          // onChange={(e) => {
          //   setQuestion({ ...question, correct: question.option3 });
          // }}
        />
        <p
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.5rem 0.5rem 0rem 1rem",
          }}
        >
          {questionData.option3}
        </p>
      </div>
      <div className="quizOption">
        <input
          type="radio"
          value={`option${questionNumber}`}
          name={`option${questionNumber}`}
          style={{ display: "inline" }}
          // onChange={(e) => {
          //   setQuestion({ ...question, correct: question.option4 });
          // }}
        />
        <p
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.5rem 0.5rem 0rem 1rem",
          }}
        >
          {questionData.option4}
        </p>
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
        value="View Answer"
        onClick={() => {
          alert(`The correct answer is ${questionData.correct}`);
        }}
      />
    </div>
  );
}

export default ViewQuizForm;
