import HeadsetsPage from "../pages/Headset";
import CoursesPage from "../pages/Courses";
import CoursePage from "../pages/CoursePage";
import StudentsPage from "../pages/Students";
import CreateStudent from "../pages/CreateStudent";
import LibraryPage from "../pages/LIbraryPage";
import UserLibaryPage from '../pages/UserLibraryPage'
import CertificatesPage from "../pages/Certificates";
import GeneralSettingsPage from "../pages/Settings";
import AdminsPage from "../pages/Admins";
import CreateAdmin from "../pages/CreateAdmin";
import RolesPage from "../pages/Roles";
import HeadsetPage from "../pages/HeadsetPage";
import UpdateAdmin from "../pages/UpdateAdmin";
import CreateRolePage from "../pages/CreateRole";
import UpdateRolePage from "../pages/UpdateRole";
import Dashboard from "../pages/Dashboard";
import ReportsPage from "../pages/ReportsPage";
import StudentsReports from "../pages/StudentsReports";
import StudentReportsPage from "../pages/StudentReportPage";
import StagesReportsPage from "../pages/StagesReportsPage";
import StageReportPage from "../pages/StageReportPage";
import ClassesReportsPage from "../pages/ClassesReportsPage";
import ClassReportPage from "../pages/ClassReportPage";
import LogsPage from "../pages/LogsPage";
import SchoolsPage from "../pages/SchoolsPage";
import CreateSchool from "../pages/CreateSchool";
import UpdateSchool from "../pages/UpdateSchool";
import SchoolReports from "../pages/SchoolReports";
import SchoolReport from "../pages/SchoolReport";
import UpdateStudent from "../pages/UpdateStudent";
import CraeteCourse from "../pages/CreateCourse";
import PicturePage from "../pages/StudentPicturesPage";
import VideosCard from '../pages/VideosCard'
const routes = [
  { path: "/headsets", component: HeadsetsPage },
  { path: "/headsets/:mac", component: HeadsetPage },
  { path: "/courses", component: CoursesPage },
  { path: "/courses/create", component: CraeteCourse },
  { path: "/courses/:course", component: CoursePage },
  { path: "/students", component: StudentsPage },
  { path: "/students/create", component: CreateStudent },
  { path: "/students/update/:id", component: UpdateStudent},
  { path: "/library", component: LibraryPage },
  { path: "/library/students/:id", component: UserLibaryPage },
  { path: "/library/students/:id/pictures", component: PicturePage },
  { path: "/library/students/:id/videos", component: VideosCard },
  { path: "/certificates", component: CertificatesPage },
  { path: "/settings", component: GeneralSettingsPage },
  { path: "/settings/admins", component: AdminsPage },
  { path: "/settings/admins/create", component: CreateAdmin },
  { path: "/settings/admins/update/:id", component: UpdateAdmin },
  { path: "/settings/roles", component: RolesPage },
  { path: "/settings/roles/create", component: CreateRolePage },
  { path: "/settings/roles/update/:id", component: UpdateRolePage },
  { path: "/dashboard", component: Dashboard },
  { path: "/reports", component: ReportsPage },
  { path: "/reports/students", component: StudentsReports },
  { path: "/reports/students/:id", component: StudentReportsPage },
  { path: "/reports/stages", component: StagesReportsPage },
  { path: "/reports/stages/:stage", component: StageReportPage },
  { path: "/reports/classes", component: ClassesReportsPage },
  { path: "/reports/classes/:stage/:class", component: ClassReportPage },
  { path: "/logs", component: LogsPage },
  { path: "/schools", component: SchoolsPage },
  { path: "/schools/create", component: CreateSchool },
  { path: "/schools/update/:id", component: UpdateSchool },
  { path: "/reports/schools", component: SchoolReports },
  { path: "/reports/schools/:id", component: SchoolReport }
];

export default routes;
