import React, {useState} from "react";
import {} from "./../CreateCourse.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export function PageTitle({title}){
  const style = {
    margin: "auto",
    padding: "3% 0% 0% 0%",
  }

  return(
    <h1 class="pageTitle" style = {style}>{title}</h1>
  )
}

export function PageSubTitle({subTitle, padding}){
  const style ={
    margin:"auto",
    padding: padding,
  }

  return(
    <h1 class="pageSubTitle" style = {style}>{subTitle}</h1>
  )
}

export function Tag({name ,style}){
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState("Dropdown");
  return(
    <div>
      <PageSubTitle subTitle = {name} padding = "2% 0% 0% 3%"/>
      <div style = {style}>
        <h1 class="dropdown" onClick = {() => {setOpen(!open)}}>
          {option}
        </h1>

        {open && <DropDown setOption = {setOption} setOpen = {setOpen}/>}

      </div>
    </div>
    
  )
}

function DropDown({setOption, setOpen}){
  
  const itemStyle = {
    padding: "0.5rem"
  }

  function DropdownItem(props){
    return(
      <a>
        <h1 class="menu-item" style={itemStyle} onClick={() => {setOption(props.children)
                                              setOpen(false)}}>
          {props.children}
        </h1>
      </a>
    )
  }

  return(
    <div >
      <DropdownItem>Machine Learning</DropdownItem>
      <DropdownItem>Biology</DropdownItem>
      <DropdownItem>Maths</DropdownItem>
    </div>
  )
}

export function CourseInfo({name, style, placeholderType, padding}){
  return(
    <div>
      <PageSubTitle subTitle = {name} padding = {padding}/>
        <div style = {style}>
          <input placeholder="Placeholder..." class={placeholderType}></input>
        </div>
    </div>
  )
}

export function Button({text,link="#"}){

  let navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  const button = {
    padding: "1% 10% 0% 0%",
    "text-decoration": "none"
  }

  return(
    <div>
          <a style={button} > 
            <h1 class="addButton" 
            onClick = {
              () => handleClick(link)
            }>
              {text}
            </h1>
          </a>
    </div>
  )
}


function CreateCourse() {

  const textBox = {
    padding: "1% 0% 0% 2%",
  }

  return (
    <div>
      <Navbar/>
      <PageTitle title = "New Course"/>

      <CourseInfo name="Course Title*" style={textBox} 
                  placeholderType = "placeholderTitle" padding = "5% 0% 0% 3%" />
      <CourseInfo name="Course Description*" style={textBox} 
                  placeholderType = "placeholderDescription" padding = "3% 0% 0% 3%" />

      <Tag name="Tag 1*" style={textBox}/>
      <Tag name="Tag 2*" style={textBox}/>
      <Tag name="Tag 3*" style={textBox}/>

      <Button text="Add Lectures!"/>

    </div>
  )
}

export default CreateCourse;
