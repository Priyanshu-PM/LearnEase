import React from "react";
import ChartLine from "../../Components/ChartLine";
import Sidebar from "../../Components/Sidebar";

import LineChart from "./Charts/LineChart";

const Dashboard = () => {
  return (
    <div className="bg-[#F3F8FF] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>
        <div className="col-start-1 sm:col-start-3 col-end-12 min-w-full">
          <div className="mx-auto bg-purple-300 p-5">
          <h1>hello Dashboard</h1>
          </div>
        </div>

        <div className="p-5 col-start-3 mt-15 charts col-end-7 min-w-full">
        <ChartLine/>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
