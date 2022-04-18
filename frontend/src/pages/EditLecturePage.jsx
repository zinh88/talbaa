import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { } from "./../CreateCourse.css";
import { Button } from "./CreateCourse";
import { Heading } from "./CreateLecture";
import { Lectures, LectureComponenet, AddButton } from "./CreateLecturePage";

function EditLecturePage({ setAuth }) {
  const [id, setID] = useState(0);
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('id')

  function lectureID(){
    let currID = id;
    return currID;
  }

  function lectureName(){
    setID(id + 1);
    let currName = "Lecture " + id;
    return currName;
  }


  function addData(currID,currName, link) {
    // let currID = id;
    // setID(id + 1);
    // let currName = "Lecture " + id;
    let JSONobj = { id: currID, name: currName, link: link };
    return JSONobj;
  }

  // const lectureData = [
  //   {id: 0, name: "Lecture 1"},
  //   {id: 1, name: "Lecture 2"},
  //   {id: 2, name: "Lecture 3"}
  // ]

  // const [lectures, setLectures] = useState(lectureData);


  return (
    <div>
      <Navbar setAuth={setAuth} />

      <Heading courseName={"Machine Learning"} />

      <div class="row">
        <Lectures />
        <AddButton
          event={
            async () => {
              let ID = lectureID();
              let name = lectureName();
              
              let lectureBody = { "title": name, "courseId": courseId }
              let apiQuery = "api/courses/add_lecture"
              var lecID;
              
              
              async function putLecture() {
                try {
                  console.log(lectureBody)
                  const response = await axios.put(apiQuery, lectureBody,
                    {
                      headers: { 'authorization': localStorage.authorization }
                    })
                    // .then((res) => {
                    //   lecID = res.data._id;
                    //   console.log(lecID);
                    // })
                    // .catch((err) => {
                    //   console.log(err)
                    // })
                    return response;
                    // lecID = response.data._id
                    // console.log(lecID);
                } catch (error) {
                  console.log(error)
                }
              }

              const resp = await putLecture();
              lecID = resp.data._id
              let link = `/EditLecture?id=${lecID}`

              let newLec = addData(ID, name, link);
              
              console.log(newLec);
              setData([...data, newLec]);
              {
                data.map((values) => {
                  return (
                    <a href= {values.link}>
                    <LectureComponenet
                      name={values.name}
                      id={values.id}
                      setData={setData}
                      data={data}
                    />
                    </a>
                  );
                });
              }
            }
          }
          lectures={data}
          setLectures={setData}
          text="+"
        />
      </div>
      <div>
        {data.map((values) => {
          return (
            <a href= {values.link}>
            <LectureComponenet
              name={values.name}
              id={values.id}
              setData={setData}
              data={data}
            />
            </a>
          );
        })}
      </div>

      <Button text="Save Changes!" />
    </div>
  );
}

export default EditLecturePage;
