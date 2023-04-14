import React, { useState, useEffect, useCallback } from "react";

import Sidebar from "../../../Components/Sidebar";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

const students = [
  {
    id: 1,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 75,
    // quizScore: 
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
  
  const [tdata, setTdata] = useState();
  const [sessionId, setSessionId] = useState("");
  const [summary, setSummary] = useState([]);
  const [token, setToken] = useState("");

  let Id = useParams();

  console.log("session id is : ",Id.id);
  
  useEffect(() => {
    
    var teacherData = sessionStorage.getItem("teacher");
    console.log(teacherData);
    setTdata(JSON.parse(teacherData));
    console.log("=======================");
    setToken(tdata);
    console.log(token);
    console.log("=======================");
    setSessionId(Id.id);
  }, [])
  
  const summaryKey = `${apiKey}/room/${sessionId}/topics`;
  // remove the demo key
  const summaryDemo = `${apiKey}/room/643581c5b3dd9c4d7bb098e4/topics`;

  const studentsFetchKey = `${apiKey}/room/${Id.id}}`;
  const studentFetchDemo = `${apiKey}/room/6419f7fbd1d6c3e6bec069`;



  const fetchSummary = useCallback(async () => {
    try {
      const response = await axios.get(summaryDemo);
      const { data } = response.data;
      console.log("inside the try block");
      console.log(data[0].topics);
      setSummary(data[0].topics);
      // console.log(summary[0]);
      // console.log("allquestions", allQuestions)
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchStudents = useCallback(async () => {

    const config = {

      headers: {
        Authorization: token
      }

    };
    try {
      const response = await axios.get(studentFetchDemo, {headers: {
        Authorization: `${tdata.tokem}`,
      }});
      const { data } = response.data;
      console.log("inside the try block");
      console.log(data);
      // setSummary(data[0].topics);
      console.log(summary);
      // console.log("allquestions", allQuestions)
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {

    // fetchStudents();
    fetchSummary();

  }, [])
  // const key = `${apiKey}/teacher/${tdata.teacher._id}/rooms`;
  
  // console.log(tdata.teacher._id);


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
            <div className="px-5 py-5">
              <div className="flex flex-col justify-start items-start gap-10 ">
                <div>
                      <p
                        className="mt-4 px-6 py-6
rounded-md border-gray-700 bg-gray-200"
                      >
                        {summary[0]}
                      </p>
                </div>

                <div>

                  <div className="grid grid-cols-1 msm:grid-cols-2 mmd:grid-cols-2 mlg:grid-cols-3 mxl:grid-cols-4 m2xl:grid-cols-5 gap-7 mt-5 pt-10">
                    {students.map((student, index) => (
                      <div
                        className="flex flex-row justify-start
items-start gap-4 bg-white bg-opacity-20 rounded-lg shadow-md p-4"
                        key={index + 1}
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
