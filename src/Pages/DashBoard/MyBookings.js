import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import DashBoardRaw from "./DashBoardRaw";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user?.email]);
  console.log(bookings);
  return (
    <div>
      <h2 className="text-5xl">You have {bookings.length} Orders</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>{}</th>
              <th>Name</th>
              <th>Email</th>
              <th>Time</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <DashBoardRaw key={booking._id} booking={booking}></DashBoardRaw>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
