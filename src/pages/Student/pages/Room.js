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
  const [Title, setTitle] = useState();
  const [creator, setCreator] = useState();
  console.log(sessionid);

  var getid = true;

  useEffect(() => {
    axios
      .get(key, {})
      .then((res) => {
        const data = (res.data);
        // console.log(res);
        setTitle(data.data[0].title)
        setCreator(data.data[0].creator.firstName);
        setRoomdetail(data.data[0].topics);
        setTeacherId(data.data[0].creator._id);
        setQuizID(data.data[0].quiz);
        // console.log(Title);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }, [key]);

  // console.log(roomdetail);
  // console.log("Teacher id is : "+teacherId);

  const navigate = useNavigate();

  const handleQuiz = () => {

    // alert("button kaam kar rahi hai");
    axios
      .get(key, {})
      .then((res) => {
        const data = res.data;
        // console.log(data);
        // setQuizID(data.data[0].quiz);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
    
    // console.log(quizID);  
    navigate(`/student/quiz/${quizID}`);
  };

  return (
    <div>
      <div className="bg-purplebg min-h-screen">
        <Navbar />
        <div className="px-[2rem] p-4 flex flex-col space-y-5 ">
              
              <div className="w-full p-4 flex sm:flex-col md:justify-start xl:flex-row justify-between bg-white rounded-lg shadow-lg">
 
              <div>
              <h1 className="text-5xl font-bold">{Title}</h1>
              <p className="text-gray-700 mt-2">
              Conducted by <span className="">{creator}</span> 
              </p>
              </div>

                
            </div>
            <div>
            
            <h4 className="ml-1 text-4xl font-bold text-navy-700 dark:text-white">
            Key Points
            </h4>
            </div>
            <div className="mt-10 space-y-5">
            {roomdetail.map((summary, index) => (
              <div key={index} className="bg-white p-4 rounded-lg drop-shadow-md">
              <p className="text-gray-700 text-lg">{summary}</p>
              </div>
  ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Room;
