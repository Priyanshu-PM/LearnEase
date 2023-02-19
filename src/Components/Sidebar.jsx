import React, {useState} from "react";
import {FaBars, FaMeetup, FaPeopleCarry, FaQuestion, FaTh, FaUserAlt, FaUserTag} from 'react-icons/fa'
import { NavLink } from "react-router-dom";
const Sidebar = ({children}) => {

    const[isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(isOpen);

    const menuItem = [

        {
            path: "/",
            name: "dashboard",
            icon: <FaTh/>
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt/>
        },
        {
            path: "/createroom",
            name: "CreateRoom",
            icon: <FaMeetup/>
        },
        {
            path: "/session",
            name: "Session Details",
            icon: <FaPeopleCarry/>
        },
        {
            path: "/quiz",
            name: "Quiz",
            icon: <FaQuestion/>
        },
        {
            path: "/attendance",
            name: "Attendance",
            icon: <FaUserTag/>
        },

    ]

  return (
    <div className="container">
        <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1  style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                <div style={{marginLeft: isOpen ? "300px" : "0px"}} className="bars">
                    <FaBars onLoad={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div  style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  );
};

export default Sidebar;
