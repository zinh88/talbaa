import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { Tag } from "./CreateCourse";
import { HomePage, Title } from "./styles/CourseCatalogue.styled";
import samplepic from "../assets/mlpic.jpg";
import { EnrolledBox } from "./styles/MyCourses.styled";
import axios from "axios";



const CourseCatalogue = () => {
    const [courses, setCourses] = useState([]);

    const card = {
        title: "Machine Learning",
        desc: "Machine learning (ML) studies the design and development of algorithms that learn from the data and improve their performance through experience. ML refers to a set of methods and that help computers to learn, optimize and adapt on their own.",
        pic: samplepic,
        creator: "Hareem Raza",
        tags: ["ML", "CS", "AI"],
        rating: 4.3
    }  

    useEffect(() => {
        axios.get('api/courses/get_all_courses', {
            headers: {
                'authorization': localStorage.authorization
            }
        })
        .then((resp) => {
            console.log(resp.data)
            setCourses([...resp.data])
        })
        .catch((err) => {
            console.log(err)
        })
    },[])


    return <div>
    <Navbar/>
    <HomePage>
        <Title style={{"height":"60px", "width":"350", "font-size":"40px", "line-height":"47px", "color":"#656565","font-weight":"400px", "padding-top":"4%"}}>
            Course Catalogue
        </Title>
        <EnrolledBox style={{"margin-top":"20px"}}>
            {
                courses.map((course, id) => 
                    <Card card={course} key={id} />
                )
            }
        </EnrolledBox>
    </HomePage>


    </div>;
}

export default CourseCatalogue;
