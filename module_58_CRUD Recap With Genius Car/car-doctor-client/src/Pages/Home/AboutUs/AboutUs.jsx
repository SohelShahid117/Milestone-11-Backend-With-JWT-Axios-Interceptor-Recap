import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative h-[400px]">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="absolute w-1/2 top-1/2 right-5 rounded-lg shadow-2xl  border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h5 className="text-xl font-semibold text-[#FF3811] py-5">
            About Us
          </h5>
          <h1 className="text-5xl font-semibold">
            We are qualified <br></br> & of Experience <br></br> in this field
          </h1>
          <p className="pt-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
