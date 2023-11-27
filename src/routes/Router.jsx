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
import AllPercels from "../pages/dashboard/admin/allPercels/AllPercels";
import AllUsers from "../pages/dashboard/admin/allUsers/AllUsers";
import AllDeleveryMen from "../pages/dashboard/admin/allDeleveryMen/AllDeleveryMen";
import Statistics from "../pages/dashboard/admin/statictics/Statistics";
import MyDeliveryList from "../pages/dashboard/deliveryMen/myDeliveryList/MyDeliveryList";
import MyReviews from "../pages/dashboard/deliveryMen/MyReviews/MyReviews";


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
            },

            // admin
            {
              path: 'allParcels',
              element: <AllPercels></AllPercels>
            },
            {
              path: 'allUsers',
              element: <AllUsers></AllUsers>
            },
            {
              path: 'allDeliveryMen',
              element: <AllDeleveryMen></AllDeleveryMen>
            },
            {
              path: 'statistics',
              element: <Statistics></Statistics>
            },
            
            // delivery men

            {
              path: 'deliveryList',
              element: <MyDeliveryList></MyDeliveryList>
            },
            {
              path: 'reviews',
              element: <MyReviews></MyReviews>
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