import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { EnrolledBox, HomePage, Title, Plus } from "./styles/MyCourses.styled";

import samplepic from "../assets/mlpic.jpg"
import Navbar from "../components/Navbar";
import axios from "axios";
const card = {
    title: "Machine Learning",
    desc: "Machine learning (ML) studies the design and development of algorithms that learn from the data and improve their performance through experience. ML refers to a set of methods and that help computers to learn, optimize and adapt on their own.",
    pic: samplepic,
    creator: "Hareem Raza",
    tags: ["ML", "CS", "AI"],
    rating: 4.3
}

const MyCourses = ({setAuth}) => {
    const [enrolled, setEnrolled] = useState([]);
    const [created, setCreated] = useState([]);

    useEffect(() => {
        axios.get("api/courses/get_enrolled", {
            headers: {
                'authorization': localStorage.authorization
        }})
        .then((resp) => {
            setEnrolled([...resp.data.courses])
        })
        .catch((err) => {
            console.log(err)
        })
        axios.get("api/courses/get_created", {
            headers: {
                'authorization': localStorage.authorization
        }})
        .then((resp) => {
            console.log(resp.data.courses)
            setCreated([...resp.data.courses])
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);
    
    return (
        <>
        <Navbar setAuth={setAuth}></Navbar>
        <HomePage>
            <Title>
                My Courses
            </Title>
            <div style={{ "padding-bottom": "10px", "font-size": "30px", "color": "#007E8E", "text-align": "center"}}>Enrolled</div>
            <EnrolledBox>
                {
                    enrolled.map((course, key) => 
                        <Card card={course} key={key} />
                    )
                }
            </EnrolledBox>
            <div style={{ "display": "flex", "align-items": "center", "justify-content":"center", "width": "100%"}}>
            <div style={{ "padding-bottom": "10px", "font-size": "30px", "color": "#007E8E", "text-align": "center"}}>Created</div>
            <a style={{"text-decoration": "none"}} href="/CreateCourse"><Plus>+</Plus></a>
            </div>
            <EnrolledBox>
                {
                    created.map((course, key) => 
                        <Card card={course} key={key} />
                    )
                }
            </EnrolledBox>
        </HomePage>
        </>
    )
}

export default MyCourses;
