import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SideBar from "./Components/SideBar";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import ErrorPage from "./pages/error";
import LoginPage from "./pages/Login";
import Landing from "./pages/Landing";
import { Toaster } from "sonner";
import routes from "./routes";
import "./App.css";
import useTranslationStore from "./stores/LanguageStore";
function App() {
  const isLoginPage = useLocation().pathname === "/login";
  const { language } = useTranslationStore();
  return (
    <div style={{ fontFamily: 'Cairo'  }}>
      <Toaster position="top-right" richColors />
      <div className={`w-screen h-screen bg-[#E9EBEE] dark:bg-[#2E3643] overflow-y-auto overflow-hidden flex ${language === 'ar' && "flex-row-reverse"}`}>
         {!isLoginPage &&
        <div className=" w-[213px]">
          <SideBar />
          </div>
          
          } 
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[1000px] h-full">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/404" element={<ErrorPage />} />
              <Route path="/" element={<Landing />} />
              <Route element={<ProtectedRoutes />}>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
