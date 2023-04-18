import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { IoLibraryOutline } from "react-icons/io5";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { FiHeart, FiUser, FiLogOut } from "react-icons/fi";
import Spinner from "react-spinkit";

import { useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  let params = useLocation();
  const path = params.pathname;

  const [teacher, setTeacher] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // const teacherData = ReactSession.get("teacher");
    var teacherData = sessionStorage.getItem("teacher");
    setTeacher(JSON.parse(teacherData));
    setLoading(false);
    // console.log(JSON.parse(teacherData).teacher.emailID)
  }, []);



  const navigate = useNavigate();
  if (loading) {
    return (
      <div>
        <Spinner name="chasing-dots" style={{ width: 100, height: 100 }} />
      </div>
    );
  }
  
  return (
    <div className="p-0 sm:block z-30  relative border-r-black">
      <div className="px-5 py-3 border-r-black">
        <Link
          className="flex items-center justify-between text-gray-900  border-b-2"
          to="/teacher/home"
        >

          <div className="flex gap-4 justify-center items-center w-full h-[7rem]">
            <FaUserCircle className="text-gray-400 h-10 w-10"/>
            <h1 className="font-serif text-xl font-bold">{ teacher.teacher.emailID.length < 15 ? teacher.teacher.emailID: `${teacher.teacher.emailID.substring(0, 10)}...`}</h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-col text-[16px] gap-4 px-5">
        <Link
          className={
            path === "/teacher/home"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-blue-600 text-white transition-all`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all`
          }
          to="/teacher/home"
        >
          <AiOutlineHome />
          <span className="font-bold font-serif">Home</span>
        </Link>
        <Link
          className={
            path === "/teacher/create-room"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-blue-600 text-white transition-all`
              : `py-2 px-5 rounded-md  flex items-center gap-3  hover:bg-blue-600 hover:text-white transition-all`
          }
          to="/teacher/create-room"
        >
          <BiCategory />
          <span className="font-bold font-serif">Create Room</span>
        </Link>

        <Link
          className={
            path === "/teacher/session"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-blue-600 text-white transition-all`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all`
          }
          to="/teacher/session"
        >
          <MdOutlineLibraryAddCheck />
          <span className="font-bold font-serif">Session Analytics</span>
        </Link>

        <button
          className="py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all"
          onClick={() => {
            sessionStorage.setItem("teacher", null);
            navigate("/");
          }}
        >
          <FiLogOut />
          <span className="font-bold font-serif">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
