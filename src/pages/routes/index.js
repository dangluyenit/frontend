import Admin from "../Admin/Admin";
import AddCourse from "../Course/AddCourse";
import Course from "../Course/Course";
import CourseDetails from "../Course/CourseDetails";
import Home from "../Homepage/Homepage";
import Info from "../Info/Info";
import Login from "../Login/Login";
import AddTest from "../Test/AddTest";
import Test from "../Test/Test";
import TestDetails from "../Test/TestDetails";
import LoginStudent from "../Student/Login/Login";
import LoginTeacher from "../Teacher/Login/Login";
import Result from "../Result/Result";
import LoginAdmin from "../Admin/components/Login";
import ModalEdit from "../Info/ModalEdit";
import AddLesson from "../Course/AddLesson";
import AddQuestion from "../Test/AddQuestion";
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/course",
    component: Course,
  },
  {
    path: "/info",
    component: Info,
  },
  {
    path: "/test",
    component: Test,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/login/student",
    component: LoginStudent,
  },
  {
    path: "/login/teacher",
    component: LoginTeacher,
  },
  {
    path: "/course/details",
    component: CourseDetails,
  },
  {
    path: "/course/add",
    component: AddCourse,
  },
  {
    path: "/test/details",
    component: TestDetails,
  },
  {
    path: "/test/add",
    component: AddTest,
  },
  {
    path: "/result",
    component: Result,
  },
  {
    path: "/info/edit",
    component: ModalEdit,
  },
  {
    path: "/course/addlesson",
    component: AddLesson,
  },
  {
    path: "/test/addquestion",
    component: AddQuestion,
  },
];
const privateRoutes = [
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/login/admin",
    component: LoginAdmin,
  },
];
export { publicRoutes, privateRoutes };
