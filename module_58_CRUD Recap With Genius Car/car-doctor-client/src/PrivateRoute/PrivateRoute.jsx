import React, { useContext } from 'react';
import { authContext } from '../Providers/Authproviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authContext)
    const location = useLocation()
    console.log("location is:",location)

    if(loading){
        return <h1 className='text-5xl text-green-600'>Loading...</h1>
    }
    if(user?.email){
        return children
    }
    return (
            <Navigate state={location.pathname}  to="/login" replace></Navigate>
    );
};

export default PrivateRoute;