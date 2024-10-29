import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Providers/Authproviders";
import BookingsRow from "./BookingsRow";
import axios from "axios";

const BookingsOrder = () => {
  const { user } = useContext(authContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings)

  const url = `http://localhost:5000/bookingsOrder?email=${user?.email}`;
  // const url = `http://localhost:5000/bookingsOrder?email=gari@car.com`;
  useEffect(() => {
    axios.get(url,{withCredentials:true})
    // .then(data=>console.log(data))
    .then(res=>{
      console.log(res.data)
      setBookings(res.data)
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setBookings(data);
    //   });
  }, [url]);

  const handleDelete = (_id) =>{
    const proceed = confirm("are u sure want to delete ?");
    if(proceed){
      // console.log("_id",_id);
      fetch(`http://localhost:5000/bookingsOrder/${_id}`,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount){
          alert("data deleted successfully");
          const remainingData = bookings.filter(bk=>bk._id !==_id)
          console.log(remainingData)
          setBookings(remainingData)
        }
      })
    }
  }

  const handleUpdateConfirm = (id) =>{
    console.log("confirm",id);
    fetch(`http://localhost:5000/bookingsOrder/${id}`,{
      method:"PATCH",
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify({status:"confirm"})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
        alert("data updated successfully")
        const remainingData = bookings.filter(bk=>bk._id !==id)
        const updateData = bookings.find(bk=>bk._id ==id)
        updateData.status = "confirm"
        const newBookings = [updateData,...remainingData]
        setBookings(newBookings)
      }
    })
  }


  return (
    <div>
      <h2>hello:{bookings.length}</h2>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
        <tr className="flex justify-evenly">
          <td>iamge</td>
          <td>Service Title</td>
          <td>Email</td>
          <td>Price</td>
          <td>Date</td>
          <td>Status</td>
        </tr>
          </thead> 
          <tbody>
            {
                bookings.map(booking=><BookingsRow key={booking._id} booking={booking} handleDelete={handleDelete} handleUpdateConfirm={handleUpdateConfirm}></BookingsRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsOrder;
