import React, { useState, useEffect } from "react";
import Sidebar from "../../../Components/Sidebar";
import { FaUserCircle } from "react-icons/fa";

import axios from "axios";

const students = [
  {
    id: 1,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 75,
  },
  {
    id: 2,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 95,
  },
  {
    id: 3,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 20,
  },
  {
    id: 4,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 40,
  },
  {
    id: 5,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 65,
  },
  {
    id: 6,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 70,
  },
  {
    id: 7,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 71,
  },
  {
    id: 8,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 72,
  },
  {
    id: 9,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 75,
  },
  {
    id: 10,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 95,
  },
  {
    id: 11,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 20,
  },
  {
    id: 12,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 40,
  },
  {
    id: 13,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 65,
  },
  {
    id: 14,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 70,
  },
  {
    id: 15,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 71,
  },
  {
    id: 16,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 72,
  },
  {
    id: 17,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 75,
  },
  {
    id: 18,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 95,
  },
  {
    id: 19,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 20,
  },
  {
    id: 20,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 40,
  },
  {
    id: 21,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 65,
  },
  {
    id: 22,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 70,
  },
  {
    id: 23,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 71,
  },
  {
    id: 24,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 72,
  },
];

const Session = () => {
  const apiKey = process.env.REACT_APP_STUDYAI_API;

  var teacherData = sessionStorage.getItem("teacher");
  const tdata = JSON.parse(teacherData);

  console.log(tdata.teacher._id);

  const key = `${apiKey}/teacher/${tdata.teacher._id}/rooms`;

  const joinedTime = new Date().toLocaleTimeString();

  return (
    <div className="bg-[#F3F8FF] min-h-screen ">
      <div className="grid grid-cols-11">
        <div
          className="block msm:hidden col-start-1 col-end-3 bg-white
text-[#9696a6] min-h-screen fixed w-[18%]"
        >
          <Sidebar />
        </div>

        <section className="col-start-3 col-end-12 min-h-screen px-8">
            <div className="px-10 py-5">
              <div className="flex flex-col justify-start items-start gap-10 ">
                <div>
                      <p
                        className="mt-4 px-6 py-6
rounded-md border-gray-700 bg-gray-200"
                      >
                        summary dalna hai
                      </p>
                </div>

                <div>
                {/* 
                  <button
                    className="bg-transparent hover:bg-blue-500
text-blue-700 font-semibold hover:text-white py-2 px-4 border
border-blue-500 hover:border-transparent rounded"
                    onClick={() => {}}
                  >
                    Quiz responses
                  </button>
                  */}

                  <div className="  grid grid-cols-5 gap-4 pt-10">
                    {students.map((student) => (
                      <div
                        className="flex flex-row justify-start
items-start gap-4 bg-white bg-opacity-20 rounded-lg shadow-md p-4"
                        key={student.email}
                      >
                        <FaUserCircle
                          className="text-gray-500 w-12
h-12 mb-4"
                        />
                        <div>
                          <h2 className="text-lg font-medium">
                            {student.name}
                          </h2>
                          <p className="text-gray-500 mb-2">{student.email}</p>
                          <p className="text-sm text-gray-400">
                            Joined at {joinedTime}
                          </p>
                          <div
                            className="flex items-center
justify-between mt-4"
                          >
                            <div
                              className="w-32 h-3 rounded-lg
overflow-hidden bg-gray-300"
                            >
                              <div
                                className={`h-full rounded-lg ${
                                  student.attentiveness >= 80
                                    ? "bg-green-400"
                                    : student.attentiveness >= 60
                                    ? "bg-yellow-400"
                                    : "bg-red-400"
                                }`}
                                style={{ width: `${student.attentiveness}%` }}
                              ></div>
                            </div>
                            <div className="text-sm text-gray-500 ml-4">
                              {student.attentiveness}%
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="absolute top-0 right-6 p-2 text-gray-500">
                      Class Started at {joinedTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Session;
