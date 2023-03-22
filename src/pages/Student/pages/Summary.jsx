import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Summary = () => {
  const sessionid = useParams();

  // console.log(sessionid.roomId);

  const apiKey = process.env.REACT_APP_STUDYAI_API;
  const key = `${apiKey}/room/${sessionid.roomId}/topics`;

  const [roomdetail, setRoomdetail] = useState([]);
  const [teacherId, setTeacherId] = useState("");
  const [quizID, setQuizID] = useState("");

  var getid = true;

  useEffect(() => {
    axios
      .get(key, {})
      .then((res) => {
        const data = res.data;

        setRoomdetail(data.data[0].topics);
        setTeacherId(data.data[0].creator._id);
        setQuizID(data.data[0].quiz);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }, [key]);

  console.log(roomdetail);
  console.log("Teacher id is : "+teacherId);

  const navigate = useNavigate();

  const handleQuiz = () => {

    // alert("button kaam kar rahi hai");
    axios
      .get(key, {})
      .then((res) => {
        const data = res.data;
        setQuizID(data.data[0].quiz);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
    
    console.log(quizID);  
    navigate(`/student/quiz/${quizID}`);
  };

  console.log("Quiz id is : "+quizID);

  const lectureSummary = {
    title: "Introduction to React",
    duration: "1 hour",
    instructor: "John Doe"
  };

  let attentiveness = 90;

  return (
    <div>
      <div className="bg-gradient-to-b from-gray-300 to-white min-h-screen">
        <Navbar />
        <div className="px-[5rem]">
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div className="w-1/2">
                <h1 className="text-3xl font-bold">{lectureSummary.title}</h1>
                <p className="text-gray-700 mt-2">
                  {lectureSummary.duration} | {lectureSummary.instructor}
                </p>

                <p className="text-gray-700 mt-4">
                  {roomdetail.length > 0 ? (
                    roomdetail
                  ) : (
                    <div className="bg-gray-200 rounded-md p-4 mt-8">
                      <p className="text-gray-800 text-lg font-bold">
                        No data available.
                      </p>
                    </div>
                  )}
                </p>
              </div>

              <div className="flex flex-col items-start justify-end gap-4">
                <div className="flex items-center mt-4">
                  <span className="pr-4">Attentiveness </span>
                  <div className="w-32 h-3 rounded-lg overflow-hidden bg-gray-300">
                    <div
                      className={`h-full rounded-lg ${
                        attentiveness >= 80
                          ? "bg-green-400"
                          : attentiveness >= 60
                          ? "bg-yellow-400"
                          : "bg-red-400"
                      }`}
                      style={{ width: `${attentiveness}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500 ml-4">
                    {attentiveness}%
                  </div>
                </div>

                <div>
                  <span>Your Score - 00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
