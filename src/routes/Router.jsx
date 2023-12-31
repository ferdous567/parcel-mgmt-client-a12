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
import AdminRoutes from "./AdminRoutes";
import DeliveryMenRoutes from "./DeliveryMenRoutes";
import ManageAdmin from "../pages/dashboard/admin/ManageAdmin";
import UpdateMyPercel from "../pages/dashboard/user/UpdateMyParcel";
import ErrorPage from "../pages/errorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
          errorElement: <ErrorPage></ErrorPage>,
          children:[
            // {
            //   index: true,
            //   element: <Navigate to = '/dashboard/statistics'></Navigate>
            // },
            
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
            {
              path: 'updateMyParcel/:id',
              element: <UpdateMyPercel></UpdateMyPercel>
            },

            // admin
            {
              path: 'allParcels',
              element: <AdminRoutes>
                <AllPercels></AllPercels>
              </AdminRoutes>
            },
            {
              path: 'allUsers',
              element: <AdminRoutes>
                <AllUsers></AllUsers>
              </AdminRoutes>
            },
            {
              path: 'allDeliveryMen',
              element: <AdminRoutes><AllDeleveryMen></AllDeleveryMen></AdminRoutes>
            },
            {
              path: 'statistics',
              element: <AdminRoutes>
                <Statistics></Statistics>
              </AdminRoutes>
            },
            {
              path: 'manageAdmin/:id',
              element: <AdminRoutes>
                <ManageAdmin></ManageAdmin>
              </AdminRoutes>
              // loader: ({params}) => fetch(`https://parcel-mgmt-server.vercel.app/manageItems/${params.id}`)

            },
            
            // delivery men

            {
              path: 'deliveryList',
              element: <DeliveryMenRoutes>
                <MyDeliveryList></MyDeliveryList>
              </DeliveryMenRoutes>
            },
            {
              path: 'reviews',
              element: <DeliveryMenRoutes>
                <MyReviews></MyReviews>
              </DeliveryMenRoutes>
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