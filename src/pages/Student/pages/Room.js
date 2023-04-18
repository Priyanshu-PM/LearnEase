import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Room = () => {
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
    time: "11 march 2023",
    instructor: "John Doe"
  };

  const summary = [
    "skjfhkshfjisduvfbksdjbvkjsdbvzsdvujbvdsdjvlasssssssssssssssssssssssssssssssssssssssssssvsadjvblsjbdlvjbsdlvbldbvjzxmzxbvmkjbcvsdflaslfjbasljfblaskbfsahfksahflhlaskfhlashfmasckjsvmsdjghdajhgihusdghfsdghuigisggisdugsiduggjsdgisdghjsdghishdsdghuhsdgjhsdivsdjvbnsjdg9dgejfewgweogi",
    
    "skjfhkshfjisduvfbksdjbvkjsdbvzsdvujbvdsdjvlasssssssssssssssssssssssssssssssssssssssssssvsadjvblsjbdlvjbsdlvbldbvjzxmzxbvmkjbcvsdflaslfjbasljfblaskbfsahfksahflhlaskfhlashfmasckjsvmsdjghdajhgihusdghfsdghuigisggisdugsiduggjsdgisdghjsdghishdsdghuhsdgjhsdivsdjvbnsjdg9dgejfewgweogi",
    
    "skjfhkshfjisduvfbksdjbvkjsdbvzsdvujbvdsdjvlasssssssssssssssssssssssssssssssssssssssssssvsadjvblsjbdlvjbsdlvbldbvjzxmzxbvmkjbcvsdflaslfjbasljfblaskbfsahfksahflhlaskfhlashfmasckjsvmsdjghdajhgihusdghfsdghuigisggisdugsiduggjsdgisdghjsdghishdsdghuhsdgjhsdivsdjvbnsjdg9dgejfewgweogi",

    "skjfhkshfjisduvfbksdjbvkjsdbvzsdvujbvdsdjvlasssssssssssssssssssssssssssssssssssssssssssvsadjvblsjbdlvjbsdlvbldbvjzxmzxbvmkjbcvsdflaslfjbasljfblaskbfsahfksahflhlaskfhlashfmasckjsvmsdjghdajhgihusdghfsdghuigisggisdugsiduggjsdgisdghjsdghishdsdghuhsdgjhsdivsdjvbnsjdg9dgejfewgweogi"
  ]

  let attentiveness = 90;

  return (
    <div>
      <div className="bg-gradient-to-b from-gray-200 to-white min-h-screen">
        <Navbar />
        <div className="px-[2rem] p-4">
              
              <div className="w-full p-2 flex flex-row justify-between bg-white rounded-lg shadow-lg">
 
              <div>
              <h1 className="text-4xl font-bold">{lectureSummary.title}</h1>
              <p className="text-gray-700 mt-2">
                {lectureSummary.time} | {lectureSummary.instructor}
              </p>
              </div>

                <div className="flex flex-col items-start justify-end gap-2">
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


                <div className="p-3 w-full flex flex-row justify-between ">
                <div className="mt-1">
                  <span>Your Score - 00</span>
                </div>
                <div>
                  <button
                    onClick={handleQuiz}
                    className=" inline-flex items-center text-white bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base  md:mt-0"
                  >
                    Take a Quiz
                  </button>
                </div>
                </div>

              </div>
            </div>

            <div>
            {summary.map((topic, index) => {
              <div key={index}>
              {topic}
              </div>
            })}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Room;
