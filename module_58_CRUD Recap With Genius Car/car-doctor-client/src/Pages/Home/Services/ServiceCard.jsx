import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  // console.log(service)
  const { _id, title, img, price } = service;
  // console.log(_id);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className=" rounded-xl h-2/3 w-96 mt-5">
        <img src={img} alt="Shoes" className="h-3/4 rounded-xl mx-auto" />
      </div>
      <div className="card-body -mt-10">
        <div>
          <h2 className="card-title">{title}</h2>
          <div className="justify-between flex">
            <p className="text-xl font-semibold text-[#FF3811]">
              Price : ${price}
            </p>
            {/* <Link to="/login"> */}
            <Link
              to={`/checkout/${_id}`}
              className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white -mt-2"
            >
              ❯
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
