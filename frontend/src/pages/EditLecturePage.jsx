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
  const [title, setTitle] = useState('Course');
  const courseId = searchParams.get('id');

  useEffect(() => {
    console.log(courseId);
    axios
      .get(`api/courses/get_course/${courseId}`, {
        headers: {
            'authorization': localStorage.authorization
        }
    })
    .then((resp) => {
        console.log(resp.data)
        setTitle(resp.data.course.title);
        const lecture_names = resp.data.course.lecture_names;
        const lecture_ids = resp.data.course.lectures;
        const newData = lecture_ids.map((lec_id, key) => addData(key, lecture_names[key], `/EditLecture?id=${lec_id}&course=${courseId}`, lec_id))
        console.log(newData);
        setData([...[...newData]]);
    })
    .catch((err) => {
        console.log(err);
    })
  },[])

  function lectureID(){
    let currID = id;
    return currID;
  }

  function lectureName(){
    setID(id + 1);
    let currName = "Lecture " + id;
    return currName;
  }


  function addData(currID,currName, link, lid) {
    let JSONobj = { id: currID, name: currName, link: link, lid: lid };
    return JSONobj;
  }


  return (
    <div>
      <Navbar setAuth={setAuth} />

      <Heading courseName={title} />

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

                    return response;
                    
                } catch (error) {
                  console.log(error)
                }
              }

              const resp = await putLecture();
              lecID = resp.data._id
              let link = `/EditLecture?id=${lecID}&course=${courseId}`

              let newLec = addData(ID, name, link, lecID);
              
              console.log(newLec);
              setData([...data, newLec]);
            }
          }
          lectures={data}
          setLectures={setData}
          text="+"
        />
      </div>
      <div>
        {data.map((values, key) => 
            <LectureComponenet
              name={values.name}
              id={values.id}
              setData={setData}
              data={data}
              link={values.link}
              key={key}
              cid={courseId}
              lid={values.lid}
            />
        )}
      </div>
      <Button text="Save Changes!" />
    </div>
  );
}

export default EditLecturePage;
