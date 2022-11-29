const DashBoardRaw = ({ booking }) => {
  const { title, email, img, phone, time, slot } = booking;

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
        <span className="font-semibold">{email}</span>
      </td>
      <td>
        <div>{time}</div>
        <p>
          <small>{slot}</small>
        </p>
      </td>
      <td>
        <button className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default DashBoardRaw;
