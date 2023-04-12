import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { IoLibraryOutline } from "react-icons/io5";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { FiHeart, FiUser, FiLogOut } from "react-icons/fi";
import Spinner from "react-spinkit";

import { useLocation } from "react-router-dom";

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
    <div className="p-0 sm:block z-30  relative">
      <div className="px-5 py-3">
        <Link
          className="flex items-center justify-between text-[#0dd6b8]"
          to="/teacher/home"
        >

          <div className="flex justify-center items-center w-full h-[7rem]">
            <h1 className="text-xl font-bold">{ teacher.teacher.emailID.length < 15 ? teacher.teacher.emailID: `${teacher.teacher.emailID.substring(0, 15)}...`}</h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-col text-[16px] gap-4 px-5">
        <Link
          className={
            path === "/teacher/home"
              ? `py-3 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-3 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/teacher/home"
        >
          <AiOutlineHome />
          <span>Home</span>
        </Link>
        <Link
          className={
            path === "/teacher/create-room"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/teacher/create-room"
        >
          <BiCategory />
          <span>Create Room</span>
        </Link>

        <Link
          className={
            path === "/teacher/session"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/teacher/session"
        >
          <MdOutlineLibraryAddCheck />
          <span>Session Analytics</span>
        </Link>

        <button
          className="py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]"
          onClick={() => {
            sessionStorage.setItem("teacher", null);
            navigate("/");
          }}
        >
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
