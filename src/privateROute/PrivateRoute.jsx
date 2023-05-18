import React, { useContext } from 'react';
import { AuthContext } from '../contextProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext)
    if(user){
        return children
    }
    return <Navigate to='/signin' replace></Navigate>
};

export default PrivateRoute;