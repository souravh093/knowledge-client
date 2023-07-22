import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Colleges from "../Pages/Colleges/Colleges";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/colleges",
                element: <Colleges />
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    }
])

export default router;