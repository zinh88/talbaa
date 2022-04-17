import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Button, PageSubTitle } from "./CreateCourse";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "./CreateLecture";
import deleteIcon from "./../icons/delete.png";
import {} from "./../Buttons.css";
import axios from "axios";

export function Lectures() {
  const style = {
    padding: "3% 5% 0% 4%",
  };

  return (
    <div class="LecturesText">
      <PageSubTitle subTitle="Lectures" padding="5% 0% 0% 5%" />
    </div>
  );
}

// function DeleteLecture({id, data, setData}){
//   console.log(id);
//   var newData = data.filter(function(data){
//     return data.id != id
//   })
//   return (
//     <div class="LecturesText">
//       <PageSubTitle subTitle="Lectures" padding="5% 0% 0% 5%" />
//     </div>
//   );
// }

function DeleteLecture({ id, data, setData }) {
  console.log(id);
  var newData = data.filter(function (data) {
    return data.id != id;
  });
  return setData(newData);
}

export function DeleteButton({ name, id, setData, data }) {
  const size = 15;

  return (
    <div class="Button">
      <img
        src={deleteIcon}
        width={size}
        height={size}
        onClick={() => {
          alert(name + " was deleted!");
          DeleteLecture({ id, data, setData });
        }}
      />
    </div>
  );
}

export function LectureComponenet({ name, id, setData, data }) {
  const fontstyle = {
    "font-weight": "400",
    "text-decoration": "none",
  };
  const style = {
    display: "flex",
    "align-items": "left",
    padding: "1% 0% 0% 0%",
  };
  return (
    <div class="row" style={style}>
      <p class="DeleteButton">
        <DeleteButton name={name} id={id} setData={setData} data={data} />
      </p>
      <h1 style={fontstyle} href="#" class="lectureText">
        {name}
      </h1>
    </div>
  );
}

export function AddButton({ event, text }) {
  const style = {
    width: "2rem",
    height: "2rem",
    "border-radius": "1rem",
    "font-size": "2rem",
    "font-weight": "600",
    "text-decoration": "none",
  };

  const button = {
    // "padding": "3% 80% 0% 2%",
    // "padding-left": "clamp(20px, 5%, 30px)",
  };

  return (
    <div class="AddButton" style={button}>
      <h1 class="AddButtonText" style={style} onClick={event}>
        {text}
      </h1>
    </div>
  );
}

function CreateLecturePage({ setAuth }) {
  const [id, setID] = useState(0);
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const course_id = searchParams.get("id"); // 'name'

  function addData() {
    let currID = id;
    setID(id + 1);
    let currName = "Lecture " + id;
    let JSONobj = { id: currID, name: currName };
    return JSONobj;
  }

  // let navigate = useNavigate();

  // const handleClick = (route) => {
  //   navigate(route);
  // };
  useEffect(() => {
    console.log(course_id);
    axios
      .get(`api/courses/get_course/${course_id}`, {
        headers: {
          authorization: localStorage.authorization,
        },
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar setAuth={setAuth} />

      {/* <PageTitle title = "Add Lectures"/> */}
      <Heading courseName={"Machine Learning"} />

      <div class="row">
        <Lectures />
        <AddButton
          event={() => {
            let newLec = addData();
            console.log(newLec);
            setData([...data, newLec]);
            {
              data.map((values) => {
                return (
                  <LectureComponenet
                    name={values.name}
                    id={values.id}
                    setData={setData}
                    data={data}
                  />
                );
              });
            }
            // handleClick("/createLecture")
          }}
          lectures={data}
          setLectures={setData}
          text="+"
        />
      </div>

      <div>
        {data.map((values) => {
          return (
            <LectureComponenet
              name={values.name}
              id={values.id}
              setData={setData}
              data={data}
            />
          );
        })}
      </div>

      <Button text="Create Course!" />
    </div>
  );
}

export default CreateLecturePage;
