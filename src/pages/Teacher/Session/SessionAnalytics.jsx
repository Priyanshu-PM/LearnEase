import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../../Components/Sidebar";
import { useNavigate } from 'react-router-dom';

const SessionAnalytics = () => {


  const apiKey = process.env.REACT_APP_STUDYAI_API;

  var teacherData = sessionStorage.getItem("teacher");
  const tdata = (JSON.parse(teacherData));

  console.log(tdata.teacher._id);

  const key = `${apiKey}/teacher/${tdata.teacher._id}/rooms`;

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
      axios
      .get(key, {
        
      })
      .then((res) => {
        const data = res.data;
        console.log(data.success);
        setRooms(JSON.parse(data.data))
      })
      .catch((err) => {
        alert("invalid");
        console.log(err);
      });
  }, [key]);

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

          <div>
      {rooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-7 mt-8">
          {rooms.map((session, index) => (
            <div
              key={session._id}
              className={`bg-gradient-to-br h-[10rem] rounded-lg shadow-md p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${gradientColors[index % gradientColors.length]}`}
              onClick={() => handleSessionClick(session._id)}
            >
              <div className="flex justify-between mb-4">
                <div className="text-black font-bold text-xl">{session.title}</div>
                <div className="text-black text-sm pl-1">{new Date(session.createdAt).toLocaleDateString()}</div>
              </div>
              <div className="text-black">{session.id}</div>
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
