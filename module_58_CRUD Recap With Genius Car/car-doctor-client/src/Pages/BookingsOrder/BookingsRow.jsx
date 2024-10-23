import React from "react";

const BookingsRow = ({ booking,handleDelete,handleUpdateConfirm }) => {
  console.log(booking);
  console.log(handleDelete)
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
    status
  } = booking;

  // const handleDelete = (_id) =>{
  //   const proceed = confirm("are u sure want to delete ?");
  //   if(proceed){
  //     // console.log("_id",_id);
  //     fetch(`http://localhost:5000/bookingsOrder/${_id}`,{
  //       method:"DELETE"
  //     })
  //     .then(res=>res.json())
  //     .then(data=>{
  //       console.log(data)
  //       if(data.deletedCount){
  //         alert("data deleted successfully");
  //       }
  //     })
  //   }
  // }


  // const handleUpdateConfirm = (id) =>{
  //   console.log("confirm",id);
  //   fetch(`http://localhost:5000/bookingsOrder/${id}`,{
  //     method:"PATCH",
  //     headers:{
  //       'content-type':"application/json"
  //     },
  //     body:JSON.stringify({status:"confirm"})
  //   })
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data)
  //     if(data.modifiedCount>0){
  //       alert("data updated successfully")
  //     }
  //   })
  // }

  return (
    <div>
      {/* row 1 */}
      <tr>
        <td>
          <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>
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
          {/* <button onClick={()=>handleUpdateConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button> */}

          {
            status ? <button onClick={()=>handleUpdateConfirm(_id)} className="btn btn-ghost btn-md text-green-600 font-bold text-xl">Confirmed</button> : <button onClick={()=>handleUpdateConfirm(_id)} className="btn btn-ghost btn-md">Confirm</button>
          }
        </th>
      </tr>
    </div>
  );
};

export default BookingsRow;
