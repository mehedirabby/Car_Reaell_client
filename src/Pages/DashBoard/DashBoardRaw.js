import React, { useEffect, useState } from "react";

const DashBoardRaw = ({ booking }) => {
  const { title, price, email, img, time, phone } = booking;

  return (
    <tr>
      <th>
        <label>
          <button className="btn btn-ghost">X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {" "}
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>{email}</td>
      <td>{time}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Pending</button>
      </th>
    </tr>
  );
};

export default DashBoardRaw;
