import React, { useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { Tag } from "./CreateCourse";
import {HomePage, Title} from "./styles/CourseCatalogue.styled";
import samplepic from "../assets/mlpic.jpg"
import { EnrolledBox } from "./styles/MyCourses.styled";



function CourseCatalogue() {
  const textBox = {
    padding: "1% 0% 0% 20%",
    height: "clamp(10px, 50px, 70px)",
    width: "clamp(200px, 500px, 700px)",
  };
  const card = {
    title: "Machine Learning",
    desc: "Machine learning (ML) studies the design and development of algorithms that learn from the data and improve their performance through experience. ML refers to a set of methods and that help computers to learn, optimize and adapt on their own.",
    pic: samplepic,
    creator: "Hareem Raza",
    tags: ["ML", "CS", "AI"],
    rating: 4.3
}

  const [option1, setOption1] = useState("Search...");
  return <div>
    <Navbar/>
    <HomePage>
      <Title style={{"height":"60px", "width":"350", "font-size":"40px", "line-height":"47px", "color":"#656565","font-weight":"400px", "padding-top":"4%"}}>
        Course Catalogue
      </Title>
      <Tag name="" style={textBox} option = {option1} setOption={setOption1}></Tag>
      <EnrolledBox style={{"margin-top":"20px"}}>
        <Card card = {card}></Card>
      </EnrolledBox>
      
    </HomePage>


    </div>;
}

export default CourseCatalogue;
