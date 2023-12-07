import SideBar from "./Components/SideBar"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import HeadsetsPage from "./pages/Headset"
import './App.css'
function App() {
  return (
    <div className="  w-screen h-screen bg-[#E9EBEE] overflow-x-hidden flex flex-row-reverse">
      <SideBar />
      <div className=" w-full h-full flex items-center justify-center">
        <div className=" w-[1000px] h-full">
        <Routes>
          <Route path="/" element={<HeadsetsPage />} />
          <Route path="/students"   element={<HeadsetsPage />}/>
          <Route path="/courses"  element={<HeadsetsPage />}/>
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
