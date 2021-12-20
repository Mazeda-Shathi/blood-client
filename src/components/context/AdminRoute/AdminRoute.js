import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UseAuth from '../../hook/UseAuth';

const AdminRoute = () => {

    const { user } = UseAuth();
    console.log(user.email);
    if (user?.email) {

    }
    else
        return <CircularProgress />
};

export default AdminRoute;