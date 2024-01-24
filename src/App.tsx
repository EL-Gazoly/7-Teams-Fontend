import SideBar from "./Components/SideBar"
import { HashRouter as Router, Routes, Route, useLocation, useNavigate} from "react-router-dom"
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
import CreateAdmin from "./pages/CreateAdmin"
import RolesPage from "./pages/Roles"
import LoginPage from "./pages/Login"
import { Toaster } from "sonner"
import ProtectedRoutes from './utils/ProtectedRoutes'
import HeadsetPage from "./pages/HeadsetPage"
import UpadteAdmin from "./pages/UpdateAdmin"
import Landing from "./pages/Landing"
import ErrorPage from "./pages/error"
import CreateRolePage from "./pages/CreateRole"
import UpdateRolePage from "./pages/UpdateRole"
import Dashboard from "./pages/Dashboard"
import ReportsPage from "./pages/ReportsPage"
function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';


  return (
    <div style={{
      fontFamily: 'Cairo'
    }}>
     <Toaster position="top-right" richColors   />
      <div className="  w-screen h-screen bg-[#E9EBEE] overflow-hidden flex flex-row-reverse">
        {!isLoginPage &&  <SideBar />}
        <div className=" w-full h-full flex items-center justify-center">
          <div className=" w-[1000px] h-full overflow-y-auto overflow-x-hidden scroll">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/$.0" element={<ErrorPage />} />
            <Route path="/" element={<Landing />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/headsets" element={<HeadsetsPage />} /> 
                <Route path="/headsets/:mac"  element={<HeadsetPage />}/>
                <Route path="/courses"  element={<CoursesPage />}/>
                <Route path="/students"   element={<StudentsPage />}/>
                <Route path="/courses/:course"   element={<CoursePage />}/>
                <Route path="/students/create" element={<CreateStudent />} />
                <Route path="/library" element={<Library />} />
                <Route path="/certificates" element={<CertificatesPage />} />
                <Route path="/settings" element={<GeneralSettingsPage />} />
                <Route path="/settings/admins" element={<AdminsPage />} />
                <Route path="/settings/admins/create" element={<CreateAdmin />} />
                <Route path="/settings/admins/update/:id" element={<UpadteAdmin />} />
                <Route path="/settings/roles" element={<RolesPage />} />
                <Route path="/settings/roles/create" element={<CreateRolePage />} />
                <Route path="/settings/roles/update/:id" element={<UpdateRolePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path='/reports' element={<ReportsPage/>} />
            </Route>
          </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
