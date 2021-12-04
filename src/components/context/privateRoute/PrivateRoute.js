import { CircularProgress } from '@mui/material';
import React from 'react';

import { Navigate, Outlet, Route, useLocation } from 'react-router';
import UseAuth from '../../hook/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const location = useLocation();
    let { user, isLoading } = UseAuth()

    if (!isLoading && !user.email) {
        return <Navigate to='/login'
            state={{
                from: location
            }} />
    }
    else if (user.email) {
        return (<Outlet />)
    }
    else {
        return <CircularProgress></CircularProgress>
    }
};

export default PrivateRoute;