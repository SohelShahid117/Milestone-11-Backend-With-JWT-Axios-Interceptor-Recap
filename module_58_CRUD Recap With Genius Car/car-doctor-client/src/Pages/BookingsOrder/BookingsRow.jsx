import React from "react";

const BookingsRow = ({ booking }) => {
  console.log(booking);
  const {
    name,
    email,
    date,
    img,
    serviceTitle,
    price,
    _id,
    serviceId,
    message,
  } = booking;
  return (
    <div>
      {/* row 1 */}
      <tr>
        <td>
          <div className="rounded h-24 w-24">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
        </td>
        <td>
          <div className="font-bold">{serviceTitle}</div>
        </td>
        <td>{email}</td>
        <td> {price}</td>
        <td>{date}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
};

export default BookingsRow;
