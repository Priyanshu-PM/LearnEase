import React, { useState, useEffect } from "react";
import Sidebar from "../../../Components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import {MdAdd} from "react-icons/md";
import axios from "axios";

import Select from "react-select";

const apiKey = process.env.REACT_APP_STUDYAI_API;

const CreateRoom = () => {
  var teacherData = sessionStorage.getItem("teacher");
  const tdata = JSON.parse(teacherData);

  
  const [modal, showModal] = useState(false);
  const [className, setClassName] = useState("");

  
  const addClassKey = `${apiKey}/teacher/${tdata.teacher._id}/add-new-classroom`;

  const handleAddClass = (event) => {
    event.preventDefault();

    const config = {
      headers: {
        'Authorization': `${tdata.tokem}`,
      }
    }
    const body = {

      clg_id: tdata.teacher.clg,
      classroom: className
    }
      axios
        .patch(addClassKey, body, config)
        .then((res) => {
          const data = res.data;

          if (data.success) {
            console.log("Class added successfully");

          } else {
            alert("Failed to add Class");
          }
          showModal(false);
        })
        .catch((err) => {
          console.log(err);
        });
    
  };

  const postKey = `${apiKey}/teacher/room`;
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
  
          let options = [] ;
  
          data.data.classrooms.forEach((clg) => {
            options.push({
              value: clg,
              label: clg,
          });
          });
          setClassrooms(options);
  
          setSelectedClassroom();
        })
        .catch((err) => {
          // alert("invalid");
          console.log(err);
        });
    };
  
  const handleCreateSession = (event) => {
    axios
      .post(
        postKey,
        {
          title: sessionName,
          clg: tdata.teacher.clg,
          classroom: selectedClassroom.label,
          redirect_url:meetURL  
        },
        {
          headers: {
            Authorization: `${tdata.tokem}`,
          },
        }
      )
      .then((res) => {
        const data = res.data;
        console.log("data from createroom", data);
        if (data.success) {
          console.log("Room Created successfully");
          navigate(`/teacher/current/${data.data._id}?redirect_url=${data.redirect_url}`); 
        } else {
          alert("Error in creating room");
        }
      })
      .catch((err) => {
        alert(err);
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

  const isCreateSessionDisabled = !sessionName || !selectedClassroom || !meetURL;

  return (

    <div>
    {modal ? (
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <form
        onSubmit={handleAddClass}
        className="max-w-md mx-auto bg-gray-100 shadow-2xl p-5 rounded-md"
      >
        <div className="p-0 flex justify-end items-end">
          <button onClick={() => showModal(false)}>cross</button>
        </div>
        <div className="my-4">
          <label
            htmlFor="question"
            className="block text-gray-700 font-medium mb-2"
          >
            Create New Classroom
          </label>
          <textarea
            id="question"
            className="w-50 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </div>
        <div className="my-4 ">
          <h3 className="text-red-500">{alert}</h3>
          
          
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-2/3 px-4 py-2  bg-pink-500 hover:bg-babyPink text-white font-medium rounded-full transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

    ): (null)}

    <div className="bg-[#F3F8FF] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="block msm:hidden col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        
        <button className="text-white text-2xl" onClick={()=> showModal(true)}><div className="absolute right-5 top-5 p-2 stroke-5 text-white bg-babyPink rounded-full flex justify-center items-center  hover:top-4 transition-all"><MdAdd/></div></button>

        <div className="font-serif col-start-3 msm:col-start-1 col-end-12 bg-gradient-to-b from-gray-200 to-white min-h-screen">
          <div className=" rounded-lg p-6">
          <div className="">
          <h2 className="px-2 text-3xl font-semibold mb-4">
              Create a new session
            </h2>
          </div>
            
            <form className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-1 px-2">
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


              <div className=" w-full flex flex-row justify-between px-2">
                <div className="col-start-3 col-end-6 py-2  w-5/12">
                  <label htmlFor="classname" className=" text-lg font-medium">
                    Select the classroom
                  </label>
                  <Select
                  id="classname"
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
                className={`mx-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium ${
                  isCreateSessionDisabled && "opacity-50 cursor-not-allowed"
                }`}
              >
                <FaPlus className="inline-block mr-2" />
                Create Session
              </button>
              
            </form>
            {/*============================================================================================================  */}
            <div className="mt-10 px-2">
              <h2 className="text-2xl font-semibold mb-4">Steps to follow :</h2>
              <div >
                <ul className="space-y-3">
                  {steps.map((step, index) => ( 
                    <li key={index} className="text-md text-gray border-b-2 block">{index+1}{")   "}{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default CreateRoom;
