import React, {useEffect, useState} from "react";
import Sidebar from "../../../Components/Sidebar";

import ChartLine from "../../../Components/Charts/ChartLine";
import ChartBar from "../../../Components/Charts/ChartBar";
import { FaCartPlus, FaPlusCircle } from "react-icons/fa";



const Dashboard = () => {

  const [modal, showModal] = useState(false);
  const [className, setClassName] = useState("");

  return (

    <div>
    {modal ? (
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <form
        onSubmit={()=> {}}
        className="max-w-md mx-auto bg-gray-100 shadow-2xl p-5 rounded-md"
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
            className="w-50 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
            className="w-2/3 px-4 py-2  bg-pink-500 hover:bg-babyPink text-white font-medium rounded-full transition-colors duration-300"
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

        <div className="col-start-3 msm:col-start-1 col-end-12 min-w-full ">
          <div className="absolute right-5 top-5 w-15 h-15 w-50 h-50"><button onClick={()=> showModal(true)}><FaPlusCircle/></button></div>
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
