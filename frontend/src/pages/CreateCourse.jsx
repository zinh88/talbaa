import React, { useState } from "react";
import {} from "./../CreateCourse.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function PageTitle({ title }) {
  const style = {
    margin: "auto",
    padding: "3% 0% 0% 0%",
  };

  return (
    <h1 class="pageTitle" style={style}>
      {title}
    </h1>
  );
}

export function PageSubTitle({ subTitle, padding }) {
  const style = {
    margin: "auto",
    padding: padding,
  };

  return (
    <h1 class="pageSubTitle" style={style}>
      {subTitle}
    </h1>
  );
}

export function Tag({ name, style, option, setOption }) {
  
  const Tags = ['Maths',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'Machine Learning',
    'Data Science',
    'Philosophy',
    'Economics',
    'Econometrics',
    'Finance',
    'Business Administration',
    'Law',
    'Policy',
    'Behavioural Sciences',
    'Engineering',
    'Psychology',
    'Sociology',
    'Anthropology',
    'Astrology'];

  const [open, setOpen] = useState(false);
  return (
    <div>
      <PageSubTitle subTitle={name} padding="2% 0% 0% 3%" />
      <div style={style}>
        <h1
          class="dropdown"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {option}
        </h1>

        {open && <DropDown setOption={setOption} setOpen={setOpen} Tags = {Tags} />}
      </div>
    </div>
  );
}

export function DropDown({ setOption, setOpen, Tags }) {
  const itemStyle = {
    padding: "0.5rem",
  };

  function DropdownItem(props) {
    return (
      <a>
        <h1
          class="menu-item"
          style={itemStyle}
          onClick={() => {
            setOption(props.children);
            setOpen(false);
          }}
        >
          {props.children}
        </h1>
      </a>
    );
  }

  function GenerateDropdown({ Tags }) {
    return Tags.map((item) => {
      return <DropdownItem>{item}</DropdownItem>;
    });
  }

  return (
    <div>
      <GenerateDropdown Tags={Tags} />
    </div>
  );
}

export function CourseInfo({ name, style, placeholderType, padding, setText }) {
  return (
    <div>
      <PageSubTitle subTitle={name} padding={padding} />
      <div style={style}>
        <textarea
          placeholder="Placeholder..."
          class={placeholderType}
          onChange={(e) => {setText(e.target.value);}}
        ></textarea>
      </div>
    </div>
  );
}

export function Button({ text , event }) {
  const button = {
    padding: "1% 0% 2% 2%",
  };

  return (
    <div class="column" style={button}>
      <div onClick={event} style={{ "text-decoration": "none" }}>
        <h1 class="addButton">{text}</h1>
      </div>
    </div>
  );
}

function CreateCourse({setAuth}) {
  const textBox = {
    padding: "1% 0% 0% 2%",
  };
  const [title , setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [option1, setOption1] = useState("Dropdown");
  const [option2, setOption2] = useState("Dropdown");
  const [option3, setOption3] = useState("Dropdown");


  const navigate = useNavigate();
  const createCourse = () => {
    const data = {
        title: title,
        description: desc,
        tags: [option1, option2, option3]
    }
    console.log(data);
    axios.post('api/courses/create_course',data, {
        headers: {
            'authorization': localStorage.authorization
        }
    })
    .then((resp) => {
        const id = resp.data._id;
        console.log(resp.data._id);
        navigate(`/EditLecturePage?id=${id}`, { replace: true })
    })
    .catch((err) => {
        console.log(err);
    });


  }
  return (
    <div>
      <Navbar setAuth={setAuth}/>
      <PageTitle title="New Course" />

      <CourseInfo
        name="Course Title*"
        style={textBox}
        placeholderType="placeholderTitle"
        padding="5% 0% 0% 3%"
        setText={setTitle}
      />
      <CourseInfo
        name="Course Description*"
        style={textBox}
        placeholderType="placeholderDescription"
        padding="3% 0% 0% 3%"
        setText={setDesc}
      />

      <Tag
        name="Tag 1*"
        style={textBox}
        option={option1}
        setOption={setOption1}
      />
      <Tag
        name="Tag 2*"
        style={textBox}
        option={option2}
        setOption={setOption2}
      />
      <Tag
        name="Tag 3*"
        style={textBox}
        option={option3}
        setOption={setOption3}
      />

      <Button text="Add Lectures!" event={createCourse}/>
    </div>
  );
}

export default CreateCourse;