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
import Teacher from "../Admin/page/Teacher/Teacher";
import Student from "../Admin/page/Student/Student";
import EditCourse from "../Course/EditCourse";
import EditTest from "../Test/EditTest";
import ResultDetails from "../Result/ResultDetails";
import Courses from "../Admin/page/Course/Course";
import Tests from "../Admin/page/Test/Test";
import BankQuestion from "../Admin/page/BankQuestion/BankQuestion";
import AddBankQuestion from "../Admin/page/BankQuestion/AddBankQuestion";
import EditLesson from "../Course/EditLesson";
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
    path: "/course/details/:id",
    component: CourseDetails,
  },
  {
    path: "/course/add",
    component: AddCourse,
  },
  {
    path: "/test/details/:id",
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
    path: "/course/addlesson/:id",
    component: AddLesson,
  },
  {
    path: "/test/addquestion",
    component: AddQuestion,
  },
  {
    path: "/login/admin",
    component: LoginAdmin,
  },
  {
    path: "/course/edit/:id",
    component: EditCourse,
  },
  {
    path: "/test/edit/:id",
    component: EditTest,
  },
  {
    path: "/result/details",
    component: ResultDetails,
  },
  {
    path: "/lesson/:id",
    component: EditLesson,
  },
];
const privateRoutes = [
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/teacher",
    component: Teacher,
  },
  {
    path: "/student",
    component: Student,
  },
  {
    path: "/courses",
    component: Courses,
  },
  {
    path: "/tests",
    component: Tests,
  },
  {
    path: "/bank-questions",
    component: BankQuestion,
  },
  {
    path: "/bank-questions/add",
    component: AddBankQuestion,
  },
];
export { publicRoutes, privateRoutes };
