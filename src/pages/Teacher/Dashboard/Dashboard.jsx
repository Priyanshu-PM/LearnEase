import React, {useEffect, useState} from "react";
import Sidebar from "../../../Components/Sidebar";

import ChartLine from "../../../Components/Charts/ChartLine";
import ChartBar from "../../../Components/Charts/ChartBar";



const Dashboard = () => {

  return (
    <div className="bg-gradient-to-b from-gray-200 to-white  min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-1 sm:col-start-3 col-end-12 min-w-full">
        </div>

        <div className="col-start-1 sm:col-start-3 col-end-12 min-w-full ">
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
  );
};

export default Dashboard;
