import React, { useState, useEffect } from "react";
import Sidebar from "../../../Components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Select from "react-select";



const apiKey = process.env.REACT_APP_STUDYAI_API;

const CreateRoom = () => {
  var teacherData = sessionStorage.getItem("teacher");
  const tdata = JSON.parse(teacherData);

  console.log(tdata.teacher.clg);
  console.log(tdata.tokem);

  const postKey = `${apiKey}/teacher/room`;
  console.log(tdata.teacher.clg);
  const getKey = `${apiKey}/common/get-classrooms-clg?clg_id=${tdata.teacher.clg}`;

  const navigate = useNavigate();

  const [sessionName, setSessionName] = useState("");
  const [meetURL, setMeetURL] = useState("");

  const handleSessionNameChange = (e) => {
    setSessionName(e.target.value);
  };

  const handleMeetChange = (e) => {

    setMeetURL(e.target.value);
  };

  const [classrooms, setClassrooms] = useState([]);
  const [selectedClassroom, setSelectedClassroom] = useState();

  useEffect(()=> {

    fetchClassrooms();

  }, []);
  
    const fetchClassrooms = () => {
  
      axios
        .get(
          getKey, {
            clg_id: tdata.teacher.clg
          }
        )
        .then((res) => {
          const data = res.data;
          console.log(data.success);
          console.log(data.data.classrooms);
  
          let options = [] ;
  
          data.data.classrooms.forEach((clg) => {

            options.push({
              value: clg,
              label: clg,

          });
          });
          
          console.log(options);
          setClassrooms(options);
  
          setSelectedClassroom();
        })
        .catch((err) => {
          // alert("invalid");
          console.log(err);
        });
    };
  
    // console.log(selectedClassroom.label);


  const handleCreateSession = (event) => {
    axios
      .post(
        postKey,
        {
          title: sessionName,
          clg: tdata.teacher.clg,
          classroom: selectedClassroom.label
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
          navigate(`/teacher/current/${data.data.quiz}`);
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

  const isCreateSessionDisabled = !sessionName || !selectedClassroom;

  return (
    <div className="bg-[#F3F8FF] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="block msm:hidden col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-3 msm:col-start-1 col-end-12">
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


              <div className=" w-full flex flex-row justify-between ">
                <div className="col-start-3 col-end-6 p-2  w-5/12">
                  <label htmlFor="session-name" className="mt-1 mb-1 text-lg font-medium">
                    Select the classroom
                  </label>
                  <Select
                  value={selectedClassroom}
                  onChange={(op) => setSelectedClassroom(op)}
                  options={classrooms}
                />
                </div>

                <div className="flex flex-col gap-1 col-start-7 col-end-12  w-5/12">
                  <label htmlFor="meet-name" className="text-lg font-medium">
                    Enter Meeting URL
                  </label>
                  <input
                    type="text"
                    id="meet-name"
                    value={meetURL}
                    onChange={handleMeetChange}
                    placeholder="Enter session name"
                    className="p-2 border rounded-md"
                  />
                </div>
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
