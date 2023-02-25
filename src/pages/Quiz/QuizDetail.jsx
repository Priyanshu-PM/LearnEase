import React from "react";

import { useParams } from "react-router-dom";

import Sidebar from "../../Components/Sidebar";

const QuizDetail = () => {
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
  ];

  const params = useParams();
  const { quizid } = useParams();

  console.log("Quiz id is : ");
  console.log(params.quizid);

  return (
    <div className="bg-[#F3F8FF] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-1 sm:col-start-3 col-end-12 min-w-full">
          <div className="bg-blue-500 col-start-1 sm:col-start-3 col-end-12 min-w-full p-5 flex justify-center align-center fixed">
            <h1 className="text-2xl">Student Responses on quiz {quizid}</h1>
          </div>

          <div className="min-w-full bg-red-200 mt-10 pt-10 pb-10 pl-5 pr-5">
            {Responses.map((response, index) => (
                <div
                  key={index}
                  className=" mt-10 p-3 rounded-lg flex flex-row justify-between bg-green-200 hover:bg-blue-100"
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
