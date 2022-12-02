import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [savedUser, setSavedUser] = useState(null);
  const email = user.email;
  useEffect(() => {
    fetch(`http://localhost:5000/users/${email}`)
      .then((res) => res.json())
      .then((data) => setSavedUser(data));
  }, [email]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col  ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {savedUser?.role === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyers">All Sellers</Link>
                </li>
              </>
            )}
            {savedUser?.role === "Buyer" && (
              <>
                <li>
                  <Link to="/dashboard/mybookings">My Bookings</Link>
                </li>
              </>
            )}
            {savedUser?.role === "Seller" && (
              <>
                <li>
                  <Link to="/dashboard/addAproduct">Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/mybookings">My Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
