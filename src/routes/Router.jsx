import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import MyProfile from "../pages/dashboard/user/MyProfile";
import MyPercel from "../pages/dashboard/user/MyPercel";
import BookPercel from "../pages/dashboard/user/BookPercel";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <PrivateRoute><Contact></Contact></PrivateRoute>
        },
        {
          path: '/dashboard',
          element: <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>,
          children:[
            // user
            {
              path: 'myProfile',
              element: <MyProfile></MyProfile>
            },
            {
              path: 'myPercel',
              element: <MyPercel></MyPercel>
            },
            {
              path: 'bookPercel',
              element: <BookPercel></BookPercel>
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    }
  ]);

  export default router;