import SideBar from "./Components/SideBar"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import HeadsetsPage from "./pages/Headset"
function App() {
  return (
    <div className=" font-poppins w-screen h-screen bg-[#E9EBEE] overflow-x-hidden flex">
      <SideBar />
      <div className=" flex-1">
        <Routes>
          <Route path="/" element={<HeadsetsPage />} />
          <Route path="/students"   element={<HeadsetsPage />}/>
          <Route path="/courses"  element={<HeadsetsPage />}/>
        </Routes>
        </div>
    </div>
  )
}

export default App
