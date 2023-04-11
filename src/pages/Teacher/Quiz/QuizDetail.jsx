import React, {useEffect, useState} from "react";


import { useParams } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar";
import axios from "axios";

const QuizDetail = () => {
  
  
  const [quizID, setQuizID] = useState("");
  const params = useParams();
  
  useEffect(() => {
    console.log(params.quizID)
    setQuizID(params.quizid);

  }, [])


  const apiKey = process.env.REACT_APP_STUDYAI_API;
  const responseKey = `${apiKey}/quiz/${quizID}/response`;
  const responseDemo = `${apiKey}/quiz/63fa0605fdc6720b99be9c69/response`;
  
  const [responses, setResponses] = useState([]);

  const Responses = [
    {
      studentname: "Student 1",
      studentemail: "989746",
      score: "10",
    },
    {
        studentname: "Student 2",
        studentemail: "6546546",
        score: "10",
    },
    {
        studentname: "Student 3",
        studentemail: "6546546",
        score: "10",
    },
    {
        studentname: "Student 4",
        studentemail: "6546546",
        score: "8",
    },
    {
        studentname: "Student 5",
        studentemail: "6546546",
        score: "10",
    },
    {
        studentname: "Student 6",
        studentemail: "6546546",
        score: "8",
    },
    {
        studentname: "Student 7",
        studentemail: "6546546",
        score: "8",
    },
    {
        studentname: "Student 8",
        studentemail: "6546546",
        score: "8",
    },
    {
        studentname: "Student 9",
        studentemail: "6546546",
        score: "8",
    },
  ];

  useEffect(() => {
    fetchResponses();
  }, []);

  const fetchResponses = () => {

    axios
      .get(responseDemo, {})
      .then((res) => {
        const data = res.data;
        console.log(data.success);
        setResponses(JSON.parse(data.data));
      })
      .catch((err) => {
        alert("load hi nahi hua hai");
        console.log(err);
      });
  };

  console.log(responses);

  return (
    <div className="bg-gradient-to-b from-gray-200 to-white  min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-1 sm:col-start-3 col-end-12 min-w-full">
          <div className="mx-auto bg-blue-500 p-5">
            <h1 className="text-center text-2xl">{params.quizid}  Responses</h1>
          </div>

          <div className="min-w-full pt-10 pb-10 pl-5 pr-5 space-y-10">
            {Responses.map((response, index) => (
                <div
                  key={index}
                  className="shadow-xl  p-3 rounded-lg flex flex-row justify-between bg-white hover:bg-blue-100"
                >
                  <div className="flex justify-between">
                    <h2 className="text-xl mr-5">{response.studentname}</h2>
                    <h2 className="text-xl ml-5">{response.studentemail}</h2>
                  </div>
                  <div>
                    <h1 className="text-xl">Score : {response.score}</h1>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetail;
