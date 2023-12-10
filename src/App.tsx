import SideBar from "./Components/SideBar"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import HeadsetsPage from "./pages/Headset"
import './App.css'
import CoursesPage from "./pages/Courses"
import CoursePage from "./pages/CoursePage"
import StudentsPage from "./pages/Students"
function App() {
  return (
    <div className="  w-screen h-screen bg-[#E9EBEE] overflow-hidden flex flex-row-reverse">
      <SideBar />
      <div className=" w-full h-full flex items-center justify-center">
        <div className=" w-[1000px] h-full overflow-y-auto overflow-x-hidden scroll">
        <Routes>
          <Route path="/" element={<HeadsetsPage />} />
          
          <Route path="/courses"  element={<CoursesPage />}/>
          <Route path="/students"   element={<StudentsPage />}/>
          <Route path="/courses/:course"   element={<CoursePage />}/>
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
