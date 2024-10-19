import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../Providers/Authproviders";

const Checkout = () => {
  const service = useLoaderData();
  console.log(service);
  const { _id, title, img, price } = service;

  const { user } = useContext(authContext);
  console.log(user);

  const handleServiceOrder = (e) => {
    e.preventDefault();
    console.log("hello");
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const price = form.price.value;
    const email = form.email.value;
    const message = form.message.value;
    // console.log(form,name,date,price,email,message)

    const order = {
      name,
      date,
      price,
      email,
      message,
      serviceTitle: title,
      serviceId: _id,
      img
    };
    console.log(order);
    fetch("http://localhost:5000/bookingOrders",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(order)
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log(data);
        if(data.insertedId){
            alert("order confirmed successfully")
        }
    });
  };
  return (
    <div>
      <h3 className="text-center text-3xl">service is : {title}</h3>

      <div className="card bg-base-100 w-full shadow-2xl">
        <form className="card-body" onSubmit={handleServiceOrder}>
          <div className="flex gap-5 w-full ">
            <div className="form-control w-1/2">
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="date"
                placeholder="Date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5 w-full">
            <div className="form-control w-1/2">
              <input
                type="text"
                placeholder="Due Amount"
                defaultValue={"$ " + price}
                name="price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <textarea
              placeholder="Your message"
              name="message"
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </div>
          <div className="form-control mt-6">
            {/* <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white">Order Confirm</button> */}
            <input
              type="submit"
              value="Order Confirm"
              className="btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
