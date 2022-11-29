const DashBoardRaw = ({ booking, handleDelete, handleStatusUpdate }) => {
  const { title, email, img, phone, time, slot, _id, status } = booking;

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            X
          </button>
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
          </div>
        </div>
      </td>
      <td>
        <span className="font-semibold">{email}</span>
        <div className="text-sm opacity-50">{phone}</div>
      </td>
      <td>
        <div>{time}</div>
        <p>
          <small>{slot}</small>
        </p>
      </td>
      <td>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-xs btn-info"
        >
          {status ? status : "pending"}
        </button>
      </td>
    </tr>
  );
};

export default DashBoardRaw;
