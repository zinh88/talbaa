import React from "react";
import Navbar from "./../components/Navbar";
import {Box2, Box, Btn, Text, BigCircBox, BigCirc, HomePage, Title, HorBox} from "./styles/Home.styled";
import pic1 from "../assets/Homepage2.png"
import pic2 from "../assets/Homepage1.png"


function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HomePage>
        <Title>
          Home
        </Title>
        <BigCircBox>
          <Box>
            <BigCirc pic={pic1}>
              {/* <Picture1 pic1={pict1}/> */}
            </BigCirc>
            <HorBox>
              <Box2>
                <a style={{"text-decoration": "none"}} href="/CreateCourse">
                <Btn>Create Courses</ Btn>
                </a>
              </Box2>
              <Text>
                Search for resources to help you clear your concepts
              </Text>
            </HorBox>
          </Box>
          
          <Box>
            <BigCirc pic={pic2}>
            </BigCirc>
            <HorBox>
              <Box2>
              <a style={{"text-decoration": "none"}} href="/CourseCatalogue">
                <Btn>Find Courses</ Btn>
              </a>
              </Box2>
              <Text>
                Contribute to our website by sharing lectures and notes
              </Text> 
            </HorBox>
          </Box>
        </BigCircBox>
      </HomePage>
    </>
  );
}

export default Home;
