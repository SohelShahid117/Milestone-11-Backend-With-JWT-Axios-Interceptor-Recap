import React from 'react';
import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"
import img6 from "../../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
    //   src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      src={img1}
      className="w-full rounded-xl" />
    <div className="absolute h-full justify-between bg-gradient-to-r from-[#000000] to-[rgb(10 10 10)] rounded-xl">
      <div className='text-white space-y-5 ml-10'>
        <h2 className='text-6xl font-semibold mt-32 mb-6'>Affordable <br></br> Price For Car
         <br></br> Servicing</h2>
        <p className='text-md mb-6'>There are many variations of passages of  available, but
            <br></br> the majority have suffered alteration in some form</p>
            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5">Discover More</button>
            <button className="btn btn-outline border-white text-white hover:bg-[#FF3811] hover:text-white">Latest Project</button>
      </div>
    </div>
    <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform justify-end">
      <a href="#slide6" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide6" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div> */}
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
    //   src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      src={img2}
      className="w-full rounded-xl" />
    <div className="absolute h-full justify-between bg-gradient-to-r from-[#000000] to-[rgb(10 10 10)] rounded-xl">
      <div className='text-white space-y-5 ml-10'>
        <h2 className='text-6xl font-semibold mt-32 mb-6'>Affordable <br></br> Price For Car
         <br></br> Servicing</h2>
        <p className='text-md mb-6'>There are many variations of passages of  available, but
            <br></br> the majority have suffered alteration in some form</p>
            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5">Discover More</button>
            <button className="btn btn-outline border-white text-white hover:bg-[#FF3811] hover:text-white">Latest Project</button>
      </div>
    </div>
    <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform justify-end">
      <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide6" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div> */}
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
    //   src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      src={img3}
      className="w-full rounded-xl" />
    <div className="absolute h-full justify-between bg-gradient-to-r from-[#000000] to-[rgb(10 10 10)] rounded-xl">
      <div className='text-white space-y-5 ml-10'>
        <h2 className='text-6xl font-semibold mt-32 mb-6'>Affordable <br></br> Price For Car
         <br></br> Servicing</h2>
        <p className='text-md mb-6'>There are many variations of passages of  available, but
            <br></br> the majority have suffered alteration in some form</p>
            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5">Discover More</button>
            <button className="btn btn-outline border-white text-white hover:bg-[#FF3811] hover:text-white">Latest Project</button>
      </div>
    </div>
    <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform justify-end">
      <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide6" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div> */}
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
    //   src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      src={img4}
      className="w-full rounded-xl" />
    <div className="absolute h-full justify-between bg-gradient-to-r from-[#000000] to-[rgb(10 10 10)] rounded-xl">
      <div className='text-white space-y-5 ml-10'>
        <h2 className='text-6xl font-semibold mt-32 mb-6'>Affordable <br></br> Price For Car
         <br></br> Servicing</h2>
        <p className='text-md mb-6'>There are many variations of passages of  available, but
            <br></br> the majority have suffered alteration in some form</p>
            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5">Discover More</button>
            <button className="btn btn-outline border-white text-white hover:bg-[#FF3811] hover:text-white">Latest Project</button>
      </div>
    </div>
    <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform justify-end">
      <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5">❮</a>
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide6" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div> */}
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img
    //   src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      src={img5}
      className="w-full rounded-xl" />
    <div className="absolute h-full justify-between bg-gradient-to-r from-[#000000] to-[rgb(10 10 10)] rounded-xl">
      <div className='text-white space-y-5 ml-10'>
        <h2 className='text-6xl font-semibold mt-32 mb-6'>Affordable <br></br> Price For Car
         <br></br> Servicing</h2>
        <p className='text-md mb-6'>There are many variations of passages of  available, but
            <br></br> the majority have suffered alteration in some form</p>
            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5">Discover More</button>
            <button className="btn btn-outline border-white text-white hover:bg-[#FF3811] hover:text-white">Latest Project</button>
      </div>
    </div>
    <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform justify-end">
      <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5">❮</a>
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide6" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div> */}
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img
    //   src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      src={img6}
      className="w-full rounded-xl" />
    <div className="absolute h-full justify-between bg-gradient-to-r from-[#000000] to-[rgb(10 10 10)] rounded-xl">
      <div className='text-white space-y-5 ml-10'>
        <h2 className='text-6xl font-semibold mt-32 mb-6'>Affordable <br></br> Price For Car
         <br></br> Servicing</h2>
        <p className='text-md mb-6'>There are many variations of passages of  available, but
            <br></br> the majority have suffered alteration in some form</p>
            <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5">Discover More</button>
            <button className="btn btn-outline border-white text-white hover:bg-[#FF3811] hover:text-white">Latest Project</button>
      </div>
    </div>
    <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform justify-end">
      <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide6" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div> */}
  </div>



</div>
    );
};

export default Banner;