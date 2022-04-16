import React,{useState} from "react";
import Navbar from "../components/Navbar";
import {} from "./../CreateCourse.css";
import {Button} from "./CreateCourse";
import {Heading} from "./CreateLecture";
import {Lectures,LectureComponenet,AddButton} from "./CreateLecturePage"

function EditLecturePage() {

  const [id, setID] = useState(0);
  const [data, setData] =useState([]);

  function addData(){
    let currID = id;
    setID (id+1);
    let currName = "Lecture "+ id;
    let JSONobj = {id: currID, name: currName};
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
      <Navbar />

      {/* <PageTitle title = "Edit Lectures"/> */}
      <Heading courseName={"Machine Learning"}/>

      <div class ="row" >
        <Lectures/>
        <AddButton 
        event = {
          // () => {
          //   setLectures([...lectures,{id:3, name:"Lecture"}])
          //   console.log(lectures);
          //   {lectures.map((values) => {
          //     return <LectureComponenet name={values.name}/>
          //   })}
          // }
          () => {
            let newLec = addData();
            console.log(newLec);
            setData([...data,newLec]);
            {data.map((values) => {
              return <LectureComponenet 
                      name={values.name} 
                      id={values.id} 
                      setData = {setData} 
                      data={data}/>
            })}
          }
        }
        lectures = {data} 
        setLectures={setData} 
        text="+"
        />
      </div> 
      <div >
          {data.map((values) => {
            return <LectureComponenet 
                    name={values.name}
                    id={values.id} 
                    setData = {setData} 
                    data={data}/>
          })}
      </div>

      <Button text="Save Changes!"/>

    </div>
  )
}

export default EditLecturePage;
