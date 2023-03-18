import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const StudentRoutes = () => {

    const student = sessionStorage.getItem('student');
    if(student !== null)
        return <Outlet/>
    else
        return <Navigate to= {"/select"}/>;
}

export default StudentRoutes;