import React, {useEffect, useState} from "react";
import Sidebar from "../../../Components/Sidebar";

import {MdAdd} from "react-icons/md";
import axios from "axios";
import Attentiveness from "../../../Components/Charts/Attentiveness";
import Attendance from "../../../Components/Charts/Attendance";
import {ImCross} from "react-icons/im"
// import RxCross2 from "react-icons/rx";


const Dashboard = () => {

  
  const apiKey = process.env.REACT_APP_STUDYAI_API;
  
  const [modal, showModal] = useState(false);
  const [className, setClassName] = useState("");
  
  
  var teacherData = sessionStorage.getItem("teacher");
  const tdata = JSON.parse(teacherData);
  console.log("teacher toekm" , tdata.tokem);
  
  const addClassKey = `${apiKey}/teacher/${tdata.teacher._id}/add-new-classroom`;





  const handleAddClass = (event) => {
    event.preventDefault();

    const config = {
      headers: {
        'Authorization': `${tdata.tokem}`,
      }
    }
    const body = {

      clg_id: tdata.teacher.clg,
      classroom: className
    }
      axios
        .patch(addClassKey, body, config)
        .then((res) => {
          const data = res.data;
          console.log(data);

          if (data.success) {
            console.log(data);
            console.log("Class added successfully");

          } else {
            alert("Failed to add Class");
          }
          showModal(false);
        })
        .catch((err) => {
          console.log(err);
        });
    
  };

  return (

    <div>
    {modal ? (
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <form
        onSubmit={handleAddClass}
        className="w-1/3 mx-auto bg-gray-100 shadow-2xl p-5 rounded-md"
      >
        <div className="p-1 flex justify-end items-end">
          <button onClick={() => showModal(false)} className="p-2 rounded-lg bg-red-500 hover:bg-red-600"><ImCross className="text-white"/></button>
        </div>
        <div className="my-2 px-5 space-y-3">
          <label
            htmlFor="question"
            className="block text-gray-700 font-bold text-2xl mb-2"
          >
            Create New Classroom
          </label>
          <textarea
            id="question"
            className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={className}
            placeholder="Classroom name"
            onChange={(e) => setClassName(e.target.value)}
          />
        </div>
        <div className="my-4 ">
          <h3 className="text-red-500">{alert}</h3>
          
          
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-2/3 px-4 py-2  bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

    ): (null)}

    <div className="bg-purplebg  min-h-screen">
      <div className="grid grid-cols-11">
        <div className="block msm:hidden col-start-3 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-3 msm:col-start-1 col-end-12 min-w-full">
        </div>

          <button className="text-white text-2xl" onClick={()=> showModal(true)}><div className="absolute right-5 top-5 p-2 stroke-5 text-white bg-blue-600 rounded-full flex justify-center items-center  hover:top-4 transition-all"><MdAdd/></div></button>
        <div className="col-start-3 msm:col-start-1 col-end-12 w-full p-5 ">
          <div className="mt-14 grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2 gap-5 md:grid-cols-2 ">
            <div className=" rounded-lg bg-white shadow-lg">
              <Attentiveness/>
            </div>
            <div className=" rounded-lg bg-white shadow-lg">
              <Attendance/>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  );
};

export default Dashboard;
