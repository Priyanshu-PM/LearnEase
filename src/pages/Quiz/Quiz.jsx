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
    {
      sessionname: "Quiz 7",
      sessionid: "6546546",
      average: "9.5",
    },
    {
      sessionname: "Quiz 8",
      sessionid: "6546546",
      average: "8.5",
    },
  ];

  return (
    <div className="bg-[#F3F8FF] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-1 sm:col-start-3 col-end-12 min-w-full">
          <div className="mx-auto bg-blue-500 p-5">
            <h1 className="text-center text-2xl">Quiz Details</h1>
          </div>

          <div className="min-w-full bg-blue-100 pt-10 pl-5 pr-5 space-y-10">
            {quizes.map((quiz, index) => (
              <div className="w-full rounded-lg flex flex-row justify-between bg-red-200 pl-5 pr-5 shadow-xl">
                <Link
                  className=" w-full "
                  to={`/teacher/quiz/quiz-details/quizid:${quiz.sessionid}`}
                >
                  <span>
                    <div
                      key={index}
                      className=" mb-5 mt-5  rounded-lg flex flex-row justify-between bg-green-200"
                    >
                      <div className="flex justify-between">
                        <h2 className="text-xl mr-5">{quiz.sessionname}</h2>
                        <h2 className="text-xl ml-5">{quiz.sessionid}</h2>
                      </div>
                      <div className="flex flex-row space-x-10">
                        <h1 className="text-xl">{quiz.average}</h1>
                        <button>View Details</button>
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
