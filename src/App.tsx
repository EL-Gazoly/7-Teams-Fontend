import SideBar from "./Components/SideBar"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import HeadsetsPage from "./pages/Headset"
import './App.css'
import CoursesPage from "./pages/Courses"
import CoursePage from "./pages/CoursePage"
import StudentsPage from "./pages/Students"
import CreateStudent from "./pages/CreateStudent"
import Library from "./pages/LibraryPage"
import CertificatesPage from "./pages/Certificates"
import GeneralSettingsPage from "./pages/Settings"
import AdminsPage from "./pages/Admins"
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
          <Route path="/students/create" element={<CreateStudent />} />
          <Route path="/library" element={<Library />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/settings" element={<GeneralSettingsPage />} />
          <Route path="/settings/admins" element={<AdminsPage />} />
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
