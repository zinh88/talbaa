import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { EnrolledBox, GlobalStyle, HomePage, Title, Plus } from "./styles/MyCourses.styled";

import samplepic from "../assets/mlpic.jpg"
import Navbar from "../components/Navbar";
const card = {
    title: "Machine Learning",
    desc: "Machine learning (ML) studies the design and development of algorithms that learn from the data and improve their performance through experience. ML refers to a set of methods and that help computers to learn, optimize and adapt on their own.",
    pic: samplepic,
    creator: "Hareem Raza",
    tags: ["ML", "CS", "AI"],
    rating: 4.3
}

const Home = () => {
    const [enrolled, setEnrolled] = useState([]);
    const [created, setCreated] = useState([]);
    
    return (
        <>
        <Navbar></Navbar>
        <HomePage>
            <Title>
                My Courses
            </Title>
            <div style={{ "padding-bottom": "10px", "font-size": "30px", "color": "#007E8E", "text-align": "center"}}>Enrolled</div>
            <EnrolledBox>
                <Card card={card}/>
                <Card card={card}/>
                <Card card={card}/>
            </EnrolledBox>
            <div style={{ "display": "flex", "align-items": "center", "justify-content":"center", "width": "100%"}}>
            <div style={{ "padding-bottom": "10px", "font-size": "30px", "color": "#007E8E", "text-align": "center"}}>Created</div>
            <Plus>+</Plus>
            </div>
            <EnrolledBox>
                <Card card={card}/>
                <Card card={card}/>
                <Card card={card}/>
            </EnrolledBox>
        </HomePage>
        </>
  )
}

export default Home;
