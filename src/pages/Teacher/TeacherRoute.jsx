import React from 'react';
import { Outlet } from 'react-router-dom';

const TeacherRoute = () => {

    let loggedIn = false;

    if(loggedIn) {
        return <Outlet/>
    }
    else {

        return "User is not loggged in";
    }
}

export default TeacherRoute;