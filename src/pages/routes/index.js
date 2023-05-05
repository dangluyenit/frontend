import Admin from "../Admin/Admin";
import Course from "../Course/Course";
import Home from "../Homepage/Homepage";
import Info from "../Info/Info";
import Test from "../Test/Test";
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
];
const privateRoutes = [
  {
    path: "/admin",
    component: Admin,
  },
];
export { publicRoutes, privateRoutes };
