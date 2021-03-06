import React, { useEffect, useState } from "react";
import UploadButton from "../components/UploadButton";
import Navbar from "./../components/Navbar";
import { Image, Video } from "cloudinary-react";
import { } from "./../EditLecture.css";
import { CourseInfo, Button } from "./CreateCourse";
import { } from "./../CreateCourse.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";


function InsertImage({ id, cloudName }) {
  return (
    <div class="image">
      <Image cloudName={cloudName} publicId={id} width="70%" />
    </div>
  );
}

function InsertPDF({ id, cloudName, name }) {
  return (
    <div class="pdfLinks">
      <a
        href={`http://res.cloudinary.com/${cloudName}/image/upload/${id}`}
        target="_blank"
      >
        {name}
      </a>
    </div>
  );
}

function InsertVideo({ id, cloudName }) {
  return (
    <div class="video">
      <Video width="95%" cloudName={cloudName} publicId={id} controls="true" />
    </div>
  );
}

export function InsertQuiz({ title, quizId, courseId, lectureId }) {
  let navigate = useNavigate();
  return (
    <div class="quizzes"
      onClick={
        () => {
          navigate(`/ViewQuiz/?lid=${lectureId}&cId=${courseId}&qId=${quizId}`)
        }
      }>
      {title}
    </div>
  );
}

export function InsertTextBox({ resources, setResources, lectureId }) {

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const textBox = {
    padding: "1% 0% 0% 2%",
  };

  const borderBox = {
    "border": "1px solid black",
    "margin-top": "5%",
    "margin-left": "5%",
    "padding-bottom": "3%",
    "width": "900px"
  }

  function SubmitButton({ title, note, resources, setResources, lectureId }) {
    const buttonStyle = {
      "padding-top": "0.35rem",
      "font-size": "15px",
      "margin-top": "3%",
      "margin-left": "4%"
    }

    return (
      <div class="style" style={buttonStyle}
        onClick={() => {
          let JSONobj = {
            id: { note },
            name: { title },
            type: "textBox"
          }
          // type: "text"}
          // setResources([...resources,JSONobj])

          let sendData = {
            title: title,
            filetype: "text",
            cld_reference: note,
            lectureId: lectureId
          }

          console.log("PRINTING LCTURE ID")
          console.log(sendData.lectureId)

          axios.put("api/lectures/add_lec_content", sendData, {
            headers: {
              'authorization': localStorage.authorization
            }
          })
            .then((resp) => {
              const lecture = resp.data
              // console.log(lecture)
            })
            .catch((err) => {
              console.log(err)
            })
          setResources([...resources, { id: sendData.cld_reference, name: sendData.title, type: sendData.filetype }]);


          console.log(resources)
        }}>
        Submit
      </div>
    )
  }


  return (
    <div style={borderBox}>

      <CourseInfo
        name="Title*"
        style={textBox}
        placeholderType="placeholderTitle"
        padding="5% 0% 0% 3%"
        // state = {title}
        setText={setTitle}
      />
      <CourseInfo
        name="Text*"
        style={textBox}
        placeholderType="placeholderDescription"
        padding="5% 0% 0% 3%"
        // state = {note}
        setText={setNote}
      />

      <SubmitButton
        title={title}
        note={note}
        resources={resources}
        setResources={setResources}
        lectureId={lectureId}
      />
    </div>
  )
}

export function DisplayQuizzes({ quizzes, lectureId, courseId }) {
  const textStyle = {
    "margin-left": "5%",
    "margin-top": "4%"
  }

  return (
    <div>
      {
        quizzes.map((value) => {
          return <InsertQuiz
          title = {"Quiz"}
          quizId = {value}
          courseId = {courseId}
          lectureId = {lectureId}
            />
        })
      }
    </div>
  )
}

export function DisplayContent({ resources, cloudName, setResources }) {

  const textStyle = {
    "margin-left": "5%",
    "margin-top": "4%"
  }

  return (
    <div>
      {
        resources.map((value) => {
          if (value.type === "image") {
            return <InsertImage
              id={value.id}
              cloudName={cloudName} />
          } else if (value.type === "pdf") {
            return <InsertPDF
              id={value.id}
              cloudName={cloudName}
              name={value.name} />
            // } else if (value.type == "textBox"){
          } else if (value.type === "text") {
            return (
              <div style={textStyle}>
                {/* <h1>{value.name.title}</h1>
                <h3>{value.id.note}</h3> */}
                <h1>{value.name}</h1>
                <h3>{value.id}</h3>
              </div>
            )
          } else if (value.type === "video") {
            return <InsertVideo
              id={value.id}
              cloudName={cloudName} />
          }
        })
      }
    </div>
  )
}

function DropDown({ resources, setResources, textForm, setTextForm, lectureId, courseId }) {
  const itemStyle = {
    "font-size": "13px",
    "padding-top": "0.5rem",
  };

  let navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  const textEvent = () => {
    // console.log("Enter Event here")
    return setTextForm(!textForm);
  };

  const quizEvent = () => {
    // console.log("Enter Event here")
    navigate(`/createQuiz?id=${lectureId}&course:${courseId}`, { replace: true })
    // handleClick("/createQuiz");
  };

  function AddResourceButton({ text, event }) {
    return (
      <div>
        <p class="style" style={itemStyle} onClick={event}>
          {text}
        </p>
      </div>
    );
  }

  function GenerateDropdown() {
    const random_fun = (data) => {
      let public_id = data.info.public_id;
      // console.log(data.info)
      let extension = data.info.path.split(".")[1]

      console.log(extension)

      var type = ""
      if (extension === "pdf") {
        type = "pdf";
      } else if (extension === "png" || extension === "jpg" || extension === "jpeg") {
        type = "image"
      } else if (extension === "mp4") {
        type = "video"
      }

      let name = data.info.original_filename;

      let object = {
        "title": name,
        "cld_reference": public_id,
        "filetype": type,
        lectureId: lectureId
      }

      axios.put("api/lectures/add_lec_content", object, {
        headers: {
          'authorization': localStorage.authorization
        }
      })
        .then((resp) => {
          const lecture = resp.data
          console.log(lecture)
        })
        .catch((err) => {
          console.log(err)
        })
      setResources([...resources, { id: object.cld_reference, name: object.title, type: object.filetype }]);


      console.log(name)
    }
    return (
      <div>
        <UploadButton func={random_fun} />
        <AddResourceButton text="Add Text Box" event={textEvent} />
        <AddResourceButton text="Add Quiz" event={quizEvent} />
      </div>
    );
  }

  return (
    <div>
      <GenerateDropdown />
    </div>
  );
}

function AddButton({ event, text }) {
  const style = {
    width: "2rem",
    height: "2rem",
    "border-radius": "1rem",
    "font-size": "2rem",
    "font-weight": "600",
    "text-decoration": "none",
  };

  return (
    <div class="clickButton">
      <h1 class="clickText" style={style} onClick={event}>
        {text}
      </h1>
    </div>
  );
}

export function ResButton({ resources, setResources, textForm, setTextForm, lectureId, courseId }) {

  const textStyle = {
    "padding-top": "clamp(4%,4%,4%)",
    "font-size": "100%",
    "padding-left": "clamp(20px, 20px, 30px)",
    "padding-right": "clamp(20%, 20%, 50%%)",
  };

  const buttonStyle = {
    "padding-left": "clamp(10%, 30%, 50%)",
    "padding-top": "clamp(3%,3%,3%)",
  };

  const [open, setOpen] = useState(false);

  return (
    <div class="insertBox">
      <div class="clickButton">
        <div class="row">
          <div style={buttonStyle}>
            <AddButton
              event={() => {
                setOpen(!open);
              }}
              text="+"
            />
          </div>
          <div style={textStyle}>Add Resources</div>
        </div>
        <div class="shiftDropdown">
          {open && (
            <DropDown
              resources={resources}
              setResources={setResources}
              textForm={textForm}
              setTextForm={setTextForm}
              lectureId={lectureId}
              courseId={courseId}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function LectureHeading({ lectureName }) {
  const style = {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    padding: "3% 0% 0% 0%",
  };
  const nameStyle = {
    color: "#007E8E",
  };
  return (
    <p style={style} class="pageTitle">
      <p>Lecture:</p>
      <p style={nameStyle}>{lectureName}</p>
    </p>
  );
}

function EditLecture({ setAuth }) {
  
  const [searchParams] = useSearchParams();
  const lectureId = searchParams.get('id');
  const courseId = searchParams.get('course');
  const [title, setTitle] = useState('');
  const [resources, setResources] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  var initialRes = []
  const searchQuery = 'api/lectures/get_lecture/' + lectureId
  let quiz_list = []

  useEffect(() => {
    // console.log(searchQuery)
    axios.get(searchQuery, {
      headers: {
        'authorization': localStorage.authorization
      }
    })
      .then((resp) => {
        // console.log(resp.data.content)
        // initialRes = []
        setTitle(resp.data.title);
        quiz_list = resp.data.quiz
        resp.data.content.forEach((content_piece) => {
          let dataPiece = { id: content_piece.cld_reference, name: content_piece.title, type: content_piece.filetype }
          initialRes.push(dataPiece)
        }
        )
        setResources(initialRes);
        setQuizzes(quiz_list)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(initialRes)
  }, [])

  // const navigate = useNavigate();
  // console.log(initialRes)

  const cloudName = "dv5ig0sry";

  const [textForm, setTextForm] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/EditLecturePage?id=${courseId}`, { replace: true })
  }

  return (
    <div>
      <Navbar setAuth={setAuth} />

      <LectureHeading lectureName={title} />

      <DisplayContent
        resources={resources}
        cloudName={cloudName}
        setResources={setResources}
      />

      <DisplayQuizzes quizzes = {quizzes}
                      lectureId = {lectureId}
                      courseId = {courseId} />

      {textForm && (
        <InsertTextBox resources={resources} setResources={setResources} lectureId={lectureId} />
      )}
      {/* <button onClick={()  => console.log(resources)}>click</ button> */}
      <ResButton
        resources={resources}
        setResources={setResources}
        textForm={textForm}
        setTextForm={setTextForm}
        lectureId={lectureId}
        courseId={courseId}
      />

      <Button text="Return" event={goBack} />
    </div>
  );
}

export default EditLecture;
