import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Btn2,
  HomePage,
  Title,
  Title2,
  Btn,
  Box,
  Text,
  Box2,
  Text2,
} from "./styles/CoursePage.styled";
import StarRating from "./styles/CoursePageRating";
// import pic1 from "../assets/paintbrush.PNG";

function CoursePage({ setAuth }) {
  const [title, setTitle] = useState('jk');
  const [description, setDescription] = useState('');

  return (
    <div>
      <Navbar setAuth={setAuth} />
      <HomePage style={{ "font-size": "40px", "max-width": "3000px" }}>
        <Box style={{ "align-items": "center", "justify-content": "center" }}>
          <Title style={{ color: "#656565" }}>Course :</Title>
          <Title style={{ color: "#007E8E" }}>{title}</Title>
        </Box>
        <Box
          style={{
            "align-items": "right",
            "justify-content": "right",
            "padding-right": "20px",
            height: "60px",
          }}
        >
          <Btn
            style={{
              height: "100%",
              width: "12.92%",
              "align-items": "center",
              "justify-content": "center",
              font: "Raleway",
              "font-size": "25px",
              "font-weight": "600",
            }}
          >
            Enroll
          </Btn>
        </Box>
        <Text
          style={{
            color: "#007E8E",
            "font-size": "62.5%",
            "background-color": "white",
            "padding-top": "25px",
            "padding-left": "40px",
            "align-items": "left",
            "justify-content": "left",
          }}
        >
          What is this course about?
        </Text>
        <Text
          style={{
            width: "900px",
            color: "#00000",
            "font-size": "50%",
            "background-color": "white",
            "padding-top": "10px",
            "padding-left": "40px",
            "align-items": "left",
            "justify-content": "left",
            "line-height": "40px",
          }}
        >
          {description}
        </Text>
        <Text
          style={{
            color: "#007E8E",
            "font-size": "62.5%",
            "background-color": "white",
            "padding-top": "25px",
            "padding-left": "40px",
            "align-items": "left",
            "justify-content": "left",
          }}
        >
          Course Lectures
        </Text>
        <Box
          style={{ "padding-top": "0px", width: "70%", margin: "10px 200px" }}
        >
          <Box2>
            <Text style={{ "font-size": "20px" }}>Title</Text>
            <Btn2 style={{ "padding-top": "10px" }}>Introduction</Btn2>
          </Box2>
          <Box2>
            <Text style={{ "font-size": "20px" }}>Videos</Text>
          </Box2>
          <Box2>
            <Text style={{ "font-size": "20px" }}>Notes</Text>
          </Box2>
          <Box2>
            <Text style={{ "font-size": "20px" }}>Quizzes</Text>
          </Box2>
        </Box>
        <Text
          style={{
            "font-size": "25px",
            "font-weight": "400",
            color: "#007E8E",
            "justify-content": "left",
            "padding-left": "40px",
            "padding-top": "50px",
          }}
        >
          Rate this course? UwU
        </Text>
        <Box style={{ "padding-left": "38px" }}>
          <StarRating />
        </Box>

        {/* <Text style={{}}>
        {egString}
      </Text> */}
        {/* <Box>
        <Btn>
          Enroll
        </Btn>
      </Box>
      <Box3>
        <Text>
          What is this course about?
        </Text>
      </Box3>
      <Box3>
        <Text2>
          {egString}
        </Text2>
      </Box3>
      <Box3>
        <Text>
          Course Lectures!
        </Text>
      </Box3>
      <Box4>
        Title
      </Box4> */}
      </HomePage>
    </div>
  );
}

export default CoursePage;
