import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import DashBoardRaw from "./DashBoardRaw";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(
      `https://car-rent-server-two.vercel.app/bookings?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user?.email]);
  console.log(bookings);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are You Sure , You want to cancel this order"
    );
    if (proceed) {
      fetch(`https://car-rent-server-two.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remining = bookings.filter((bkg) => bkg._id !== id);
            setBookings(remining);
          }
        });
    }
  };
  const handleStatusUpdate = (id) => {
    fetch(`https://car-rent-server-two.vercel.app/bookings/${id}`, {
      method: "PATCH",
      header: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((odr) => odr._id !== id);
          const approving = bookings.find((odr) => odr._id === id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setBookings(newOrders);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Delete</th>
              <th>Name</th>
              <th>Email</th>
              <th>Time</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <DashBoardRaw
                key={booking._id}
                handleDelete={handleDelete}
                booking={booking}
                handleStatusUpdate={handleStatusUpdate}
              ></DashBoardRaw>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
