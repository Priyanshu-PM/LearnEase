import React from "react";
import Sidebar from "../../Components/Sidebar";

import ChartLine from "../../Components/Charts/ChartLine";
import ChartBar from "../../Components/Charts/ChartBar";

const Dashboard = () => {
  return (
    <div className="bg-[#F3F8FF] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>
        <div className="col-start-1 sm:col-start-3 col-end-12 min-w-full">
          <div className="mx-auto bg-blue-500 p-5">
            <h1 className="text-center text-xl">Hello Dashboard</h1>
          </div>
        </div>

        <div className="p-5 col-start-3 mt-15  col-end-12 min-w-full ">
          <div>
            <ChartLine />
          </div>
          <div>
            <ChartBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
