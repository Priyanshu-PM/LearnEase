import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import SessionCard from "./SessionCard";
import Pagination from "./Pagination";

const SessionAnalytics = () => {
  const sessionData = sessionStorage.getItem("teacher");
  const { tokem } = JSON.parse(sessionData);

  const apiKey = process.env.REACT_APP_STUDYAI_API;

  var teacherData = sessionStorage.getItem("teacher");
  const tdata = JSON.parse(teacherData);

  const [pageNumber, setPageNumber] = useState(1);
  const key = `${apiKey}/teacher/${tdata.teacher._id}/rooms?page=${pageNumber}`;
  const [rooms, setRooms] = useState([]);

  const getAllTeacherSessions = useCallback(async (page) => {
    try {
      const { data } = await axios.get(`${apiKey}/teacher/${tdata.teacher._id}/rooms?page=${page}`);
      const parsedData = JSON.parse(data.data);
      console.log("from sessionanalystics", parsedData);
      setRooms(parsedData);
    } catch (error) {
      console.log("Error from session analyitcs", error.message);
    }
  }, []);

  
  console.log(rooms.length);

  const navigate = useNavigate();

  const handleSessionClick = (sessionId) => {
    navigate(`/teacher/lecture/${sessionId}`);
    // navigate("/test");
  };

  const goToPreviousPage=()=>{

    console.log("previous", pageNumber)
    if(pageNumber<2){
      setPageNumber(1)
    }else{
      setPageNumber(prev => prev- 1)
    }
    getAllTeacherSessions()

  }
  const goToNextPage=()=>{
    console.log("next", pageNumber)
    setPageNumber(nxt => nxt+1);
    getAllTeacherSessions()
  }

  useEffect(() => {
    getAllTeacherSessions(pageNumber);
  }, [getAllTeacherSessions,pageNumber]);


  const gradientColors = [
    "from-purple-500/10 to-indigo-500/10",
    "from-green-500/10 to-teal-500/10",
    "from-yellow-500/10 to-green-500/10",
    "from-pink-500/10 to-red-500/10",
    "from-blue-500/10 to-gray-500/10",
    "from-red-500/10 to-orange-500/10",
    "from-teal-500/10 to-green-500/10",
    "from-indigo-500/10 to-purple-500/10",
    "from-gray-500/10 to-blue-500/10",
    "from-red-500/10 to-pink-500/10",
    "from-blue-500/10 to-teal-500/10",
    "from-yellow-500/10 to-orange-500/10",
    "from-purple-500/10 to-red-500/10",
    "from-green-500/10 to-blueGray-500/10",
    "from-pink-500/10 to-purple-500/10",
    "from-gray-500/10 to-teal-500/10",
    "from-blue-500/10 to-yellow-500/10",
    "from-red-500/10 to-gray-500/10",
    "from-teal-500/10 to-orange-500/10",
    "from-indigo-500/10 to-blue-500/10",
    "from-blue-500/10 to-gray-500/10",
    "from-purple-500/10 to-red-500/10",
    "from-green-500/10 to-yellow-500/10",
    "from-teal-500/10 to-blue-500/10",
    "from-pink-500/10 to-orange-500/10",
    "from-yellow-500/10 to-red-500/10",
    "from-gray-500/10 to-blue-500/10",
    "from-purple-500/10 to-green-500/10",
    "from-blue-500/10 to-indigo-500/10",
    "from-red-500/10 to-pink-500/10",
    "from-teal-500/10 to-green-500/10",
    "from-orange-500/10 to-yellow-500/10",
    "from-gray-500/10 to-red-500/10",
    "from-blue-500/10 to-teal-500/10",
    "from-purple-500/10 to-gray-500/10",
    "from-green-500/10 to-blue-500/10",
    "from-pink-500/10 to-teal-500/10",
    "from-red-500/10 to-orange-500/10",
    "from-yellow-500/10 to-gray-500/10",
    "from-blue-500/10 to-purple-500/10",
    "from-green-500/10 to-red-500/10",
    "from-teal-500/10 to-blueGray-500",
  ];

  return (
    <div className="bg-gradient-to-b from-gray-200 to-white min-h-screen">
      <div className="grid grid-cols-11">
        <div className="block msm:hidden col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-3 msm:col-start-1 col-end-12 min-w-full p-6">
          <p className="text-2xl font-bold font-poppins text-center">
            All sessions
          </p>
          <div>
            {rooms.length > 0 ? (
              <div className="grid grid-cols-1 msm:grid-cols-2 mmd:grid-cols-2 mlg:grid-cols-2 mxl:grid-cols-3 m2xl:grid-cols-4 gap-6 mt-8 h-full">
                {rooms.map((session, index) => (
                  <div
                    key={session._id}
                    className={`bg-gradient-to-br rounded-lg shadow-md px-6 py-10 flex flex-col justify-between hover:shadow-lg ${
                      gradientColors[index % gradientColors.length]
                    }`}
                  >
                    <SessionCard session={session} tokem={tokem} />
                    <button
                      className="mt-4 bg-transparent hover:bg-babyPink text-pink-700 font-semibold hover:text-white py-2 px-4 border border-babyPink hover:border-transparent rounded"
                      onClick={() => handleSessionClick(session._id)}
                    >
                      See session summary
                    </button>
                  </div>
                ))}
                {/* Pagniation starts */}
                <div className="flex flex-col items-center">
                  <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      1
                    </span>{" "}
                    to{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {rooms.length}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {pageNumber}
                    </span>{" "}
                    Entries
                  </span>
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button disabled={pageNumber===1} onClick={goToPreviousPage} className={`${pageNumber===1}? hover:cursor-disabled px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                      Prev
                    </button>
                    <button disabled={!rooms.length} onClick={goToNextPage} className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      Next
                    </button>
                  </div>
                </div>
                {/* Pagination ends */}
              </div>
            ) : (
              <div className="bg-gray-200 rounded-md p-4 mt-8">
                <p className="text-gray-800 text-lg font-bold">
                  No sessions available. Please create a new session.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionAnalytics;
