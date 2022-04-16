import "./App.css";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      {/* <h1>hello</h1> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/myCourses" element={<MyCourses />} />
          <Route path="/createCourse" element={<CreateCourse />} />
          <Route path="/createLecture" element={<CreateLecture />} />
          <Route path="/editCourse" element={<EditCourse />} />
          <Route path="/editLecture" element={<EditLecture />} />
          <Route path="/createQuiz" element={<CreateQuiz />} />
          <Route path="/editQuiz" element={<EditQuiz />} />
          <Route path="/createLecturePage" element={<CreateLecturePage />} />
          <Route path="/editLecturePage" element={<EditLecturePage />} />
          <Route path="/courseCatalogue" element={<CourseCatalogue />} />
          <Route path="/coursePage" element={<CoursePage />} />
          <Route path="/viewLecture" element={<ViewLecture />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;