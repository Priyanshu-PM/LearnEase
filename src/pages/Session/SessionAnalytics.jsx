import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../Components/Sidebar";

const SessionAnalytics = () => {
  const Sessions = [
    {
      Sessionname: "Session 1",
      SessionID: "989746",
      date: "10/2/2023",
      Attendance: "10",
    },
    {
      Sessionname: "Session 2",
      SessionID: "6546546",
      date: "10/2/2023",
      Attendance: "10",
    },
    {
      Sessionname: "Session 3",
      SessionID: "6546546",
      date: "10/2/2023",
      Attendance: "10",
    },
    {
      Sessionname: "Session 4",
      SessionID: "6546546",
      date: "10/2/2023",
      Attendance: "8",
    },
    {
      Sessionname: "Session 5",
      SessionID: "6546546",
      date: "10/2/2023",
      Attendance: "10",
    },
    {
      Sessionname: "Session 6",
      SessionID: "6546546",
      date: "10/2/2023",
      Attendance: "8",
    },
  ];

  return (
    <div className="bg-[#F3F8FF] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-1 sm:col-start-3 col-end-12 min-w-full">
          <div className="bg-blue-500 col-start-1 sm:col-start-3 col-end-12 min-w-full p-5 flex justify-center align-center fixed">
            <h1 className="text-2xl">Quiz Details</h1>
          </div>

          <div className="min-w-full bg-red-200 mt-10 pt-10 pl-5 pr-5 ">
            {Sessions.map((Session, index) => (
              <div className=" mb-5 mt-10 rounded-lg flex flex-row justify-between bg-green-200">
                <Link
                  className="bg-green-400 w-full rounded-lg pl-5 pr-5 hover:bg-yellow-200 shadow-xl"
                  to="/"
                >
                  <span>
                    <div
                      key={index}
                      className=" p-5 rounded-lg flex flex-row justify-between"
                    >
                      <div className="flex justify-between">
                        <div>
                          <h2 className="text-xl flex flex-column">
                            {Session.Sessionname}
                          </h2>
                          <h2 className="text-l">{Session.date}</h2>
                        </div>
                        <div>
                          <h2 className="text-xl ml-5">{Session.SessionID}</h2>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-xl">{Session.Attendance}</h1>
                      </div>
                    </div>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionAnalytics;
