import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import QuizForm from "../components/QuizForm";
import "./EditQuiz.css";
import {} from "./../CreateCourse.css";
import { Heading } from "./CreateLecture";
import { PageTitle } from "./CreateCourse";


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
        
        <PageTitle title={"Create Quiz"} />
        <Heading courseName={"Machine Learning"} />
        
        <div style={{ padding: "0.5rem" }}>
          <h3 style={{ padding: "0.5rem 0.5rem 0.5rem 1.5rem" }}>
            Quiz Title*
          </h3>
          <input
            type="text"
            placeholder="Enter Quiz Title"
            className="placeholderTitle"
          ></input>
        </div>
        
        <div style={{ padding: "0.5rem" }}>
          <h3 style={{ padding: "0.5rem 0.5rem 0.5rem 1.5rem" }}>
            Quiz Description
          </h3>
          <textarea
            type="text"
            className="placeholderDescription"
            placeholder="Enter Quiz Description"
          ></textarea>
        </div>
        
        <div>
          {quiz}
        </div>
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "1.5rem",
          }}
        >
          Add question
          <button
            onClick={() =>
              setQuiz([
                ...quiz,
                <QuizForm quiz={Quiz} error={error} quizno={quiz.length} />,
              ])
            }
            className="addButton"
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "1rem",
              fontSize: "2rem",
              fontWeight: "600",
              textDecoration: "none",
              margin: "0rem 0rem 0rem 0.5rem ",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            +
          </button>
        </div>
        
        <div>
          <button
            className="addButton"
            onClick={() => {
              // console.log(quiz);
              console.log(questions);
              quiz.map((elem) => {
                elem.submitHandler();
              });
            }}
          >
            Publish Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default EditQuiz;
