import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import QuizForm from "../components/QuizForm";
import "./EditQuiz.css";
import {} from "./../CreateCourse.css";
import { Heading } from "./CreateLecture";
import { PageTitle } from "./CreateCourse";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

function EditQuiz({ setAuth }) {
  let [courseName, setCourseName] = useState("");
  let [quiz, setQuiz] = useState([]);
  let [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const lectureId = searchParams.get('id');
  const courseId = searchParams.get('course');
  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");

  let navigate = useNavigate();

  let Quiz = (data) => {
    setQuestions((curr) => [...curr, data]);
  };
  // let submitQuiz = (data) => {
  //   axios
  //     .post("api/lectures/add_quiz", data)
  //     .then((resp) => {
  //       console.log(resp.data);
  //       const token = resp.data.token;
  //       localStorage.setItem("authorization", token);
  //       setAuth(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  let finalQuiz = []
  const quizRes =  (data) => {  
    // console.log(data)
    finalQuiz = questions;
  }

  return (
    <>
      <Navbar setAuth={setAuth} />
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
            onChange = { (e) => {
              setTitle(e.target.value)
            }}
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
            onChange = { (e) => {
              setDesc(e.target.value)
            }}
          ></textarea>
        </div>

        <div>{quiz}</div>

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
                <QuizForm quiz={Quiz} error={error} quizno={quiz.length} callbackFunc={quizRes} />,
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
              // console.log(questions);
              // console.log(finalQuiz)
              let totalQuiz = {
                "title": title,
                "description": desc,
                "questions": questions,
                "lectureId": lectureId
              }
              
              console.log(totalQuiz)

              axios.put("api/lectures/add_quiz", totalQuiz, {
                headers: {
                  'authorization': localStorage.authorization
                }
              })
              .then((resp) => {
                console.log(resp)
                const lecture = resp.data;
              })
              .catch((err) => {
                console.log(err)
              })
           
              navigate(`/EditLecture/?id=${lectureId}&course=${courseId}`)
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
