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
import errorImage from "../../../assets/images/errorImage.jpg";

import Blogs from "../../Blogs/Blogs";
import DashboardPage from "../../DashboardPage/DashboardPage";
import AddProducts from "../../DashBoard/AddProducts";

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
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-rent-server-two.vercel.app/categories/${params.id}`
          ),
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
        element: <DashboardPage></DashboardPage>,
      },
      {
        path: "/dashboard/mybookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/dashboard/allbuyers",
        element: <Allusers></Allusers>,
      },
      {
        path: "/dashboard/addAproduct",
        element: <AddProducts></AddProducts>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <img src={errorImage} alt="" />
      </div>
    ),
  },
]);

export default router;
