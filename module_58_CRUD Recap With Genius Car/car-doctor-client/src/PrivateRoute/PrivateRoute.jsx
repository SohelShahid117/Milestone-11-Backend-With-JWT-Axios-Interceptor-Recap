import React, { useContext } from 'react';
import { authContext } from '../Providers/Authproviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authContext)

    if(loading){
        return <h1 className='text-5xl text-green-600'>Loading...</h1>
    }
    if(user?.email){
        return children
    }
    return (
            <Navigate to="/login" replace></Navigate>
    );
};

export default PrivateRoute;