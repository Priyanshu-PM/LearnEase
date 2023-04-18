import React, {useEffect, useState} from "react";
import Sidebar from "../../../Components/Sidebar";

import ChartLine from "../../../Components/Charts/ChartLine";
import ChartBar from "../../../Components/Charts/ChartBar";
import {MdAdd} from "react-icons/md";
import axios from "axios";


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
        <div className="p-0 flex justify-end items-end">
          <button onClick={() => showModal(false)}>cross</button>
        </div>
        <div className="my-4">
          <label
            htmlFor="question"
            className="block text-gray-700 font-medium mb-2"
          >
            Create New Classroom
          </label>
          <textarea
            id="question"
            className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={className}
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

    <div className="bg-gradient-to-b from-gray-200 to-white  min-h-screen">
      <div className="grid grid-cols-11">
        <div className="block msm:hidden col-start-3 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-3 msm:col-start-1 col-end-12 min-w-full">
        </div>

          <button className="text-white text-2xl" onClick={()=> showModal(true)}><div className="absolute right-5 top-5 p-2 stroke-5 text-white bg-blue-600 rounded-full flex justify-center items-center  hover:top-4 transition-all"><MdAdd/></div></button>
        <div className="col-start-3 msm:col-start-1 col-end-12 min-w-full ">
          <div className="p-10 col-start-3 sm:col-start-3 mt-15 min-w-full   flex flex-row justify-between flex-grow flex-wrap  grid-flow-row gap-10 mx-autobg-gradient-to-b from-gray-200 to-white  min-h-screen">
            <div className="min-w-[45%] rounded-lg bg-white shadow-xl">
              <ChartLine />
            </div>
            <div className="min-w-[45%] rounded-lg bg-white shadow-xl">
              <ChartBar />
            </div>
            <div className="min-w-[45%] rounded-lg bg-white shadow-xl">
              <ChartLine />
            </div>
            <div className="min-w-[45%] rounded-lg bg-white shadow-xl">
              <ChartBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  );
};

export default Dashboard;
