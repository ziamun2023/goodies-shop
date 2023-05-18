import React, { useContext } from 'react';
import { AuthContext } from '../contextProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location =useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <p>loading</p>
    }
    if(user){
        return children
    }
    return <Navigate to='/signin' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;