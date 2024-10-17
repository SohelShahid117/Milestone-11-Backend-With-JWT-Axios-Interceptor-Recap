import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices] =useState([]);
    useEffect(()=>{
        // fetch('services.json')
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data=>setServices(data))

    },[])
    return (
        <div className='py-5'>
           <div className='mx-auto w-1/2 space-y-5'>
                <h4 className='text-2xl font-semibold text-center text-[#FF3811]'>Service</h4>
                <h2 className='text-4xl font-semibold text-center'>Our Service Area</h2>
                <p className='pb-5 text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)}
           </div>
           <div></div>
        </div>
    );
};

export default Services;