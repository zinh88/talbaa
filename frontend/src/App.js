import "./App.css";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Subscribe from "./pages/Subscribe";
import MyCourses from "./pages/MyCourses";
import CreateCourse from "./pages/CreateCourse";
import CreateLecture from "./pages/CreateLecture";
import CreateQuiz from "./pages/CreateLecture";
import EditCourse from "./pages/EditCourse";
import EditLecture from "./pages/EditLecture";
import EditLecturePage from "./pages/EditLecturePage";
import EditQuiz from "./pages/EditQuiz";
import CourseCatalogue from "./pages/CourseCatalogue";
import CoursePage from "./pages/CoursePage";
import ViewLecture from "./pages/ViewLecture";
import CreateLecturePage from "./pages/CreateLecturePage";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [isAuthenticated, setAuthenticated] = useState(localStorage.authorization);

    return (
        <div className="App">
        <BrowserRouter>
            <Routes>
            {/* <Route path="/" element={<LandingPage />}></Route> */}
            <Route path="/" element={!isAuthenticated? <LandingPage setAuth={setAuthenticated}/> : <Navigate replace to='/home'/>} />
            <Route path="/home" element={isAuthenticated? <Home setAuth={setAuthenticated}/> : <Navigate replace to='/'/>}></Route>
            <Route path="/login" element={!isAuthenticated? <Login setAuth={setAuthenticated} /> : <Navigate replace to='/home'/>} />
            <Route path="/signup" element={!isAuthenticated? <SignUp setAuth={setAuthenticated}/> : <Navigate replace to='/home'/>} />
            <Route path="/subscribe" element={isAuthenticated? <Subscribe setAuth={setAuthenticated}/> : <Navigate replace to='/' />} />
            <Route path="/myCourses" element={isAuthenticated? <MyCourses setAuth={setAuthenticated}/>: <Navigate replace to='/login' />} />
            <Route path="/createCourse" element={isAuthenticated? <CreateCourse setAuth={setAuthenticated} />: <Navigate replace to='/' />} />
            <Route path="/createLecture" element={isAuthenticated? <CreateLecture setAuth={setAuthenticated}/>:   <Navigate replace to='/' />} />
            <Route path="/editCourse" element={isAuthenticated? <EditCourse setAuth={setAuthenticated}/>: <Navigate replace to='/' />} />
            <Route path="/editLecture" element={isAuthenticated? <EditLecture setAuth={setAuthenticated}/>: <Navigate replace to='/' />} />
            <Route path="/createQuiz" element={isAuthenticated? <CreateQuiz setAuth={setAuthenticated}/>: <Navigate replace to='/' />} />
            <Route path="/editQuiz" element={isAuthenticated? <EditQuiz setAuth={setAuthenticated}/> : <Navigate replace to='/' />} />
            <Route path="/createLecturePage" element={isAuthenticated? <CreateLecturePage setAuth={setAuthenticated}/> : <Navigate replace to='/' />} />
            <Route path="/editLecturePage" element={isAuthenticated? <EditLecturePage setAuth={setAuthenticated}/>: <Navigate replace to='/' />} />
            <Route path="/courseCatalogue" element={isAuthenticated? <CourseCatalogue setAuth={setAuthenticated}/>: <Navigate replace to='/' />} />
            <Route path="/coursePage" element={isAuthenticated? <CoursePage setAuth={setAuthenticated}/> : <Navigate replace to='/' />} />
            <Route path="/viewLecture" element={isAuthenticated? <ViewLecture setAuth={setAuthenticated}/> : <Navigate replace to='/' />} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App;