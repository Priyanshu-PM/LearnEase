import React, { useState, useEffect } from "react";
import Sidebar from "../../../Components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const apiKey = process.env.REACT_APP_STUDYAI_API;

const CreateRoom = () => {
  var teacherData = sessionStorage.getItem("teacher");
  const tdata = JSON.parse(teacherData);

  console.log(tdata.teacher._id);
  console.log(tdata.tokem);


  const postKey = `${apiKey}/teacher/room`;


  // useEffect(() => {
  //   fetchRooms();
  // }, []);

  // const fetchRooms = () => {
  //   axios
  //     .get(key, {})
  //     .then((res) => {
  //       const data = res.data;
  //       console.log(data.success);
  //       setRooms(JSON.parse(data.data));
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       alert("load hi nahi hua hai");
  //       console.log(err);
  //     });
  // };

  const navigate = useNavigate();

  // const handleSessionClick = (sessionId) => {
  //   navigate(`/teacher/lecture/${sessionId}`);
  //   // navigate("/test");
  // };

  const [sessionName, setSessionName] = useState("");

  // const [sessions, setSessions] = useState([]);

  const handleSessionNameChange = (e) => {
    setSessionName(e.target.value);

    // console.log(sessionName);
  };

  // const title = sessionName;

  const handleCreateSession = (event) => {

    axios
      .post(
        postKey,
        {
          title: sessionName,
        },
        {
          headers: {
            Authorization: `${tdata.tokem}`,
          },
        }
      )
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.success) {
          console.log("Room Created successfully");
          navigate(`/teacher/current/${data.data._id}`);
          // console.log(data);
        } else {
          alert("Error in creating room");
        }
      })
      .catch((err) => {
        alert(err);
        console.log(sessionName);
        console.log(err);
      });
  };

  const steps = [
    "Click the 'Create Session' button and enter the name of the session in the provided field.",
    "The session ID will be generated automatically, which you should share with students so they can join the session",
    "To begin recording the lecture, click on the Start Recording button.",
    "The microphone will be turned on once you click the start recording",
    "When you are finished with the lecture, click on the End Session button to stop the recording.",
    "The Generate Quiz button will appear after you click the End Session button.",
    "Click on the Generate Quiz button to generate an automated quiz.",
    "You can also add custom questions in the quiz for better performance",
    "The generated quiz will then be shared with the students.",
    "The responses of the students will be displayed on the screen as they submit the quiz.",
  ];

  const isCreateSessionDisabled = !sessionName;

  return (
    <div className="bg-[#F3F8FF] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-1 sm:col-start-3 col-end-12">
          <div className="bg-gradient-to-b from-gray-200 to-white min-h-screen rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Create a new session
            </h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="session-name" className="text-lg font-medium">
                  Enter Session Name
                </label>
                <input
                  type="text"
                  id="session-name"
                  value={sessionName}
                  onChange={handleSessionNameChange}
                  placeholder="Enter session name"
                  className="p-2 border rounded-md"
                />
              </div>
              <button
                type="button"
                onClick={handleCreateSession}
                disabled={isCreateSessionDisabled}
                className={`px-4 py-2 rounded-md bg-green-500 text-white font-medium ${
                  isCreateSessionDisabled && "opacity-50 cursor-not-allowed"
                }`}
              >
                <FaPlus className="inline-block mr-2" />
                Create Session
              </button>
            </form>
            {/*============================================================================================================  */}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">Steps to follow :</h2>
              <div>
                <ul className="space-y-3">
                  {steps.map((step) => (
                    <li className="text-xl text-gray">{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
