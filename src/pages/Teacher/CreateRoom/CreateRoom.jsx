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

  const key = `${apiKey}/teacher/${tdata.teacher._id}/rooms`;

  const postKey = `${apiKey}/teacher/room`;

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = () => {
    axios
      .get(key, {})
      .then((res) => {
        const data = res.data;
        console.log(data.success);
        setRooms(JSON.parse(data.data));
        setLoading(false);
      })
      .catch((err) => {
        alert("invalid");
        console.log(err);
      });
  };

  const navigate = useNavigate();

  const handleSessionClick = (sessionId) => {

    alert("Session click successfull")
    navigate(`/teacher/lecture/${sessionId}`);
    // navigate("/test");
  };

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


  const isCreateSessionDisabled = !sessionName;

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

  if (loading) {
    return (
      <h1>Loading</h1>
    )
  }

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
                  Session Name
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
            <div>
              {rooms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-7 mt-8">
                  {rooms.map((session, index) => (
                    <div
                      key={session._id}
                      className={`bg-gradient-to-br h-[10rem] rounded-lg shadow-md p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                        gradientColors[index % gradientColors.length]
                      }`}
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
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
