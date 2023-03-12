import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const StudentRoutes = () => {

    let loggedIn = true;

    if(loggedIn) {
        return <Outlet/>
    }
    else {

        return <Navigate to= {"/select"}/>;
    }
}

export default StudentRoutes;