import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../../Components/Sidebar";
import { useNavigate } from "react-router-dom";
// import SessionCard from "./SessionCard";

import SessionCard from "../../../Components/SessionComponents/SessionCard";
import Pagination from "./Pagination";
import Banner1 from "../../../Components/SessionComponents/Banner";

import lecture1 from "../../../assets/classImages/lecture1.jpg";
import lecture2 from "../../../assets/classImages/lecture2.jpg";
import lecture3 from "../../../assets/classImages/lecture3.jpg";
import lecture4 from "../../../assets/classImages/lecture4.jpg";
import lecture5 from "../../../assets/classImages/lecture5.jpg";
import lecture6 from "../../../assets/classImages/lecture6.jpg";
import lecture7 from "../../../assets/classImages/lecture7.jpg";
import lecture8 from "../../../assets/classImages/lecture8.jpg";
import lecture9 from "../../../assets/classImages/lecture9.jpg";
import lecture10 from "../../../assets/classImages/lecture10.jpg";
import lecture11 from "../../../assets/classImages/lecture11.jpg";
import lecture12 from "../../../assets/classImages/lecture12.jpg";

const SessionAnalytics = () => {
  const sessionData = sessionStorage.getItem("teacher");
  const { tokem } = JSON.parse(sessionData);

  const apiKey = process.env.REACT_APP_STUDYAI_API;

  var teacherData = sessionStorage.getItem("teacher");
  const tdata = JSON.parse(teacherData);

  const [pageNumber, setPageNumber] = useState(1);
  const key = `${apiKey}/teacher/${tdata.teacher._id}/rooms?page=${pageNumber}`;
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true)

  const getAllTeacherSessions = useCallback(async (page) => {
    try {
      const { data } = await axios.get(`${apiKey}/teacher/${tdata.teacher._id}/rooms?page=${page}`);
      const parsedData = JSON.parse(data.data);
      console.log("from sessionanalystics", parsedData);
      setRooms(parsedData);
      setLoading(false)
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
    setPageNumber(nxt => nxt+1);
    getAllTeacherSessions()
  }

  useEffect(() => {
    getAllTeacherSessions(pageNumber);
  }, [getAllTeacherSessions, pageNumber, setPageNumber]);


  const images = [lecture1, lecture2, lecture3, lecture4, lecture5, lecture6, lecture7, lecture8, lecture9, lecture10, lecture11, lecture12];

  return (
    <div className="bg-purplebg min-h-full pb-5">
      <div className="grid grid-cols-11">
        <div className="block msm:hidden col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%] border-r-black">
          <Sidebar />
        </div>

        <div className="col-start-3 msm:col-start-1 col-end-12 min-w-full p-6">
          <Banner1 bannerName={"Get sessions summary and students' responses quickly"}/>
          <div className="mb-5 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-start">
          <h4 className="ml-1 text-3xl font-bold text-navy-700 dark:text-white">
            Recent Sessions
          </h4>
        </div>
          <div className="">
            {(rooms?.length > 0 && !loading) ? (
              <div className="grid grid-cols-1 msm:grid-cols-2 mmd:grid-cols-2 mlg:grid-cols-2 mxl:grid-cols-3 m2xl:grid-cols-4 gap-6 mt-8 h-full py-5">
                {rooms.map((session, index) => (
                    <SessionCard session={session} tokem={tokem} image = {images[index % rooms.length]} />
                ))}

                {/* Pagniation starts */}
                <div className="  flex gap-x-5 items-center">
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
              <div className="bg-gray-100 rounded-md p-4 mt-8">
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
