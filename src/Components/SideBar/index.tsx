import { Tabs, Tab, Image } from "@nextui-org/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useThemeStore } from "../../stores/ThemeStore";
import useTranslationStore from "../../stores/LanguageStore";
import {
  LogoImage,
  DarkLogo,
  SelectedHeadset,
  Headset,
  SelectedCourses,
  Courses,
  SelectedStudents,
  Students,
  SelectedLibrary,
  Library,
  SelectedReports,
  Reports,
  SelectedCertificates,
  Certificates,
  SelectedDashboard,
  Dashboard,
  SelectedLogs,
  Logs,
  SelectedSettings,
  Settings,
  SelectedSchoolIcon,
  SchoolIcon,
} from "../../assets/SideBar/Open";

const SideBar = () => {
  const { dark } = useThemeStore();
  const [active, setActive] = useState("/headsets");
  const navigate = useNavigate();
  const location = useLocation();
  const { language, getTranslation } = useTranslationStore();

  const handleNavigation = (path) => {
    setActive(getFirstWordFromPath(path));
    navigate(path);
  };

  const getFirstWordFromPath = (path) => `/${path.split("/")[1]}`;

  useEffect(() => {
    setActive(getFirstWordFromPath(location.pathname));
  }, []);

  const renderTab = (key, icon, text, route) =>
    localStorage.getItem("isAdmin") === "true" ||
    localStorage.getItem(key) === "true" ? (
      <Tab
        key={`/${route}`}
        title={
          <div className={`w-[159px] flex items-center justify-start  mt-3 font-medium 
            ${key === "isDevicesAccess" && language == "ar" || key === "isLibraryAccess" && language==="ar" ? "gap-x-3 text-xs" : " gap-x-4 text-sm"}
            ${language === "ar" ? "flex-row-reverse mr-4" : "flex-row ml-4"}
          `}>
            <img
              src={active === `/${key}` || dark ? icon.selected : icon.default}
              width={25}
              height={25}
            />
            <span>{getTranslation(text)}</span>
          </div>
        }
      />
    ) : null;

  return (
    <div className="fixed w-[213px] h-screen">
      <div
        className="h-full flex flex-col px-5 py-[53px] gap-y-6 bg-[#F7F9FC] dark:bg-[#252A33] overflow-hidden"
        style={{
          filter: "drop-shadow(0px 3.25px 21.125px rgba(0, 0, 0, 0.25))",
        }}
      >
        <div className="flex items-center justify-center font-medium text-[#42464B] overflow-hidden">
          <Image src={dark ? DarkLogo : LogoImage} width={153} height={49} />
        </div>

        <Tabs
          classNames={{
            base: "text-white overflow-x-hidden",
            tabList: "flex flex-col w-full h-full bg-transparent space-y-[22px] overflow-hidden",
            cursor: "h-[46px] flex items-center justify-center rounded-[6.5px]",
            tabContent: "text-xs",
          }}
          color="primary"
          selectedKey={getFirstWordFromPath(location.pathname)}
          onSelectionChange={(key) => handleNavigation(key)}
          aria-label="sidebar tabs"
        >
          {renderTab("isDevicesAccess", { selected: SelectedHeadset, default: Headset }, "sidebar-headset", "headsets")}
          {renderTab("isCoursesAccess", { selected: SelectedCourses, default: Courses }, "sidebar-course", "courses")}
          {renderTab("isStudentsAccess", { selected: SelectedStudents, default: Students }, "sidebar-students" , "students")}
          {renderTab("isSchoolAccess", { selected: SelectedSchoolIcon, default: SchoolIcon }, "sidebar-schools", "schools")}
          {renderTab("isLibraryAccess", { selected: SelectedLibrary, default: Library }, "sidebar-library" , "library")}
          {renderTab("isReportsAccess", { selected: SelectedReports, default: Reports }, "sidebar-reports" , "reports")}
          {renderTab("isCertificatesAccess",{ selected: SelectedCertificates, default: Certificates }, "sidebar-certificates" , "certificates")}
          {renderTab("isDashboardAccess", { selected: SelectedDashboard, default: Dashboard }, "sidebar-dashboard" , "dashboard")}
          {renderTab("isLogsAccess", { selected: SelectedLogs, default: Logs }, "sidebar-logs" , "logs")}
          {renderTab("isRolesAccess",{ selected: SelectedSettings, default: Settings }, "sidebar-settings" , "settings")}
          <Tab className="invisible" />
        </Tabs>
      </div>
    </div>
  );
};

export default SideBar;
