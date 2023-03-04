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
          <div className="mx-auto bg-blue-500 p-5">
            <h1 className="text-center text-2xl">Quiz Details</h1>
          </div>

          <div className="min-w-full bg-red-200 pt-10 pl-5 pr-5 space-y-10">
            {Sessions.map((Session, index) => (
              <div className=" rounded-lg flex flex-row justify-between bg-green-200">
                <Link
                  className="bg-yellow-400 w-full rounded-lg pl-5 pr-5 hover:bg-yellow-200"
                  to={`/teacher/quiz/quiz-details/quizid:${Session.SessionID}`}
                >
                  <span>
                    <div
                      key={index}
                      className=" mb-5 mt-5  rounded-lg flex flex-row justify-between bg-green-200"
                    >
                      <div className="flex justify-between">
                        <h2 className="text-xl mr-5">{Session.Sessionname}</h2>
                        <h2 className="text-xl ml-5">{Session.SessionID}</h2>
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
