import DashBoardLayout from "../../../Layout/DashBoardLayout";
import Main from "../../../Layout/Main";

import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import SignUp from "../../Login/SignUp/Signup";
import Products from "../../Products/Products";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyBookings from "../../DashBoard/MyBookings";
import MyAppointment from "../../DashBoard/MyAppointment/MyAppointment";
import Allusers from "../../DashBoard/Allusers/Allusers";
import AdminRoute from "../AdminRoute/AdminRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/mybookings",
        element: <MyBookings></MyBookings>,
      },

      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            {" "}
            <Allusers></Allusers>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
