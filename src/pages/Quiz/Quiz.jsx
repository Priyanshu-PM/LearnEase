import React from "react";

import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";

const Quiz = () => {
  const quizes = [
    {
      sessionname: "Quiz 1",
      sessionid: "989746",
      average: "10",
    },
    {
      sessionname: "Quiz 2",
      sessionid: "6546546",
      average: "10",
    },
    {
      sessionname: "Quiz 3",
      sessionid: "6546546",
      average: "10",
    },
    {
      sessionname: "Quiz 4",
      sessionid: "6546546",
      average: "8",
    },
    {
      sessionname: "Quiz 5",
      sessionid: "6546546",
      average: "10",
    },
    {
      sessionname: "Quiz 6",
      sessionid: "6546546",
      average: "8",
    },
  ];

  return (
    <div className="bg-[#F3F8FF] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-1 sm:col-start-3 col-end-12 min-w-full">
          <div className="bg-blue-500 col-start-1 sm:col-start-3 col-end-12 min-w-full p-5 flex justify-center align-center fixed">
            <h1 className="text-2xl">Quiz Details</h1>
          </div>

          <div className="min-w-full bg-red-200 mt-10 pt-10 pl-5 pr-5 ">
            {quizes.map((quiz, index) => (
              <div className=" mb-5 mt-10 rounded-lg flex flex-row justify-between bg-green-200">
                <Link
                  className="bg-yellow-400 w-full rounded-lg pl-5 pr-5 hover:bg-yellow-200"
                  to={`/teacher/quiz/quiz-details/quizid:${quiz.sessionid}`}
                >
                  <span>
                    <div
                      key={index}
                      className=" mb-5 mt-5 p-5 rounded-lg flex flex-row justify-between bg-green-200"
                    >
                      <div className="flex justify-between">
                        <h2 className="text-xl mr-5">{quiz.sessionname}</h2>
                        <h2 className="text-xl ml-5">{quiz.sessionid}</h2>
                      </div>
                      <div>
                        <h1 className="text-xl">{quiz.average}</h1>
                      </div>
                    </div>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
