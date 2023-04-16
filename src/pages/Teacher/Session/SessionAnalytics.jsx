import React, {useCallback, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../../Components/Sidebar";
import { useNavigate } from 'react-router-dom';
import SessionCard from "./SessionCard";

const SessionAnalytics = () => {
  const sessionData = sessionStorage.getItem("teacher");
  const { tokem } = JSON.parse(sessionData);

  const apiKey = process.env.REACT_APP_STUDYAI_API;

  var teacherData = sessionStorage.getItem("teacher");
  const tdata = (JSON.parse(teacherData));

  console.log(tdata.teacher._id);

  const key = `${apiKey}/teacher/${tdata.teacher._id}/rooms`;

  const [rooms, setRooms] = useState([]);

  const getAllTeacherSessions = useCallback(async()=>{
    try {
      const {data} = await axios.get(key)
      const parsedData = JSON.parse(data.data)
      console.log("from sessionanalystics",parsedData)
      setRooms(parsedData)  
    } catch (error) {
      console.log("Error from session analyitcs", error.message)
    }
  },[])

  useEffect(() => {
      getAllTeacherSessions()
  }, [getAllTeacherSessions]);

  console.log(rooms);

  
  const navigate = useNavigate()
  
  const handleSessionClick = (sessionId) => {
    navigate(`/teacher/lecture/${sessionId}`);
    // navigate("/test");
  };


  const gradientColors = [
    'from-purple-500/10 to-indigo-500/10',
    'from-green-500/10 to-teal-500/10',
    'from-yellow-500/10 to-green-500/10',
    'from-pink-500/10 to-red-500/10',
    'from-blue-500/10 to-gray-500/10',
    'from-red-500/10 to-orange-500/10',
    'from-teal-500/10 to-green-500/10',
    'from-indigo-500/10 to-purple-500/10',
    'from-gray-500/10 to-blue-500/10',
    'from-red-500/10 to-pink-500/10',
    'from-blue-500/10 to-teal-500/10',
    'from-yellow-500/10 to-orange-500/10',
    'from-purple-500/10 to-red-500/10',
    'from-green-500/10 to-blueGray-500/10',
    'from-pink-500/10 to-purple-500/10',
    'from-gray-500/10 to-teal-500/10',
    'from-blue-500/10 to-yellow-500/10',
    'from-red-500/10 to-gray-500/10',
    'from-teal-500/10 to-orange-500/10',
    'from-indigo-500/10 to-blue-500/10',
    'from-blue-500/10 to-gray-500/10',
    'from-purple-500/10 to-red-500/10',
    'from-green-500/10 to-yellow-500/10',
    'from-teal-500/10 to-blue-500/10',
    'from-pink-500/10 to-orange-500/10',
    'from-yellow-500/10 to-red-500/10',
    'from-gray-500/10 to-blue-500/10',
    'from-purple-500/10 to-green-500/10',
    'from-blue-500/10 to-indigo-500/10',
    'from-red-500/10 to-pink-500/10',
    'from-teal-500/10 to-green-500/10',
    'from-orange-500/10 to-yellow-500/10',
    'from-gray-500/10 to-red-500/10',
    'from-blue-500/10 to-teal-500/10',
    'from-purple-500/10 to-gray-500/10',
    'from-green-500/10 to-blue-500/10',
    'from-pink-500/10 to-teal-500/10',
    'from-red-500/10 to-orange-500/10',
    'from-yellow-500/10 to-gray-500/10',
    'from-blue-500/10 to-purple-500/10',
    'from-green-500/10 to-red-500/10',
    'from-teal-500/10 to-blueGray-500'
    
  ];

  return (
    <div className="bg-gradient-to-b from-gray-200 to-white min-h-screen">
      <div className="grid grid-cols-11">
        <div className="block msm:hidden col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-3 msm:col-start-1 col-end-12 min-w-full p-6">
          <p className="text-2xl font-bold font-poppins text-center">All sessions</p>
          <div>
      {rooms.length > 0 ? (
        <div className="grid grid-cols-1 msm:grid-cols-2 mmd:grid-cols-2 mlg:grid-cols-2 mxl:grid-cols-3 m2xl:grid-cols-4 gap-6 mt-8 h-full">
          {rooms.map((session, index) => (
            <div
              key={session._id}
              className={`bg-gradient-to-br rounded-lg shadow-md px-6 py-10 flex flex-col justify-between hover:shadow-lg ${gradientColors[index % gradientColors.length]}`}
             
            >
             {console.log("session", session)}
              
              <SessionCard session={session} tokem={tokem}/>
              <button className="mt-4 bg-transparent hover:bg-babyPink text-pink-700 font-semibold hover:text-white py-2 px-4 border border-babyPink hover:border-transparent rounded" onClick={() => handleSessionClick(session._id)}>See session summary</button>
            </div>
          ))}
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
