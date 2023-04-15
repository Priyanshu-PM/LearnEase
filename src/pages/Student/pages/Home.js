import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getAllRoomsForStudent } from "../../../axios/apiCalls";

const Home = () => {
  var studentData = sessionStorage.getItem("student");
  const {student, tokem} = JSON.parse(studentData);

  const baseURL = process.env.REACT_APP_STUDYAI_API;
  const getAllSession = `${baseURL}/student/rooms`;

  console.log("student token", student.tokem);

  const [rooms, setRooms] = useState([]);

  const getStudentSessions = useCallback(async () => {
    const config = {
      headers: {
        Authorization: `${student.tokem}`,
      }
    };
    const newData ={
      classroom: `${student.classroom}`,
      clg:`${student.clg}`
    }
    
    try {
      console.log("inside trycatch student classroom",student.classroom)
      const response = await axios.get(getAllSession, {
        classroom: `${student.classroom}`,
        clg:`${student.clg}`
      } , {
        headers: {
          Authorization: `${tokem}`,
        }
      });
      if(!response){
        console.log("emtpy")
        return
      }
      console.log("after sending axios", response)
      // const { data } = response.data;
      // const parsedData = JSON.parse(data);
      // console.log("data of session", parsedData)

    } catch (error) {
      console.log("Error while fetching quiz data", error);
    }
  }, []);

  useEffect(() => {
    getStudentSessions()
  }, [getStudentSessions]);

  console.log(rooms);

  // const newData = {
  //   classroom: `${sdata.student.classroom}`,
  //   clg: `${sdata.student.clg}`,
  // };

  // const {
  //   isLoading,
  //   error,
  //   data: allRooms,
  // } = useQuery({
  //   queryKey: ["student-rooms"],
  //   queryFn: getAllRoomsForStudent(sdata.tokem, newData),
  // });


  // console.log("allrooms", allRooms);

  const navigate = useNavigate();

  const handleSessionClick = (sessionId) => {
    navigate(`/student/room/${sessionId}`);
  };

  return (
    <div className="bg-gradient-to-b from-gray-200 to-white min-h-screen">
      <Navbar />
      <div className="px-[5rem]">
        {rooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-8">
            {rooms.map((session, index) => (
              <div
                key={session._id}
                // className={`bg-gradient-to-br h-[10rem] rounded-lg shadow-md p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                //   gradientColors[index % gradientColors.length]
                // }`}
                onClick={() => handleSessionClick(session._id)}
              >
                <div className="flex justify-between mb-4">
                  <div className="text-black font-bold text-xl">
                    {session.title}
                  </div>
                  <div className="text-black text-sm pl-1">
                    {new Date(session.createdAt).toLocaleDateString()}
                  </div>
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
  );
};

export default Home;
