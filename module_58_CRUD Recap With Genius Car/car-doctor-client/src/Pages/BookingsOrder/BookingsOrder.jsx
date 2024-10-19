import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Providers/Authproviders";
import BookingsRow from "./BookingsRow";

const BookingsOrder = () => {
  const { user } = useContext(authContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings)

  const url = `http://localhost:5000/bookingsOrder?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, []);
  return (
    <div>
      <h2>hello:{bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map(booking=><BookingsRow key={booking._id} booking={booking}></BookingsRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsOrder;
