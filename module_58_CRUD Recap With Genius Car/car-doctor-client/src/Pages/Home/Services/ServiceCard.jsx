import React from "react";

const ServiceCard = ({ service }) => {
  // console.log(service)
  const { title, img, price } = service;
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
            <a
              href="#slide5"
              className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white -mt-2"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
