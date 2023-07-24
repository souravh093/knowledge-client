import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Colleges from "../Pages/Colleges/Colleges";
import Profile from "../Pages/Profile/Profile";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import PrivateRoutes from "./PrivateRoutes";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import ResearchDetails from "../Pages/Home/RecommendedPapers/ResearchDetails/ResearchDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/collageDetails/:id",
        element: (
          <PrivateRoutes>
            <CollegeDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/collegeDetails/${params.id}`),
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/mycollage",
        element: <MyCollege />,
      },
      {
        path: "/researches/:id",
        element: <ResearchDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/researches/${params.id}`),
      },
    ],
  },
]);

export default router;
