import React, { useState, useEffect, useCallback } from "react";

import Sidebar from "../../../Components/Sidebar";
import { FaUserCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getSessionSummary } from "../../../axios/apiCalls";
import Moment from "react-moment";

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
  const { id: sessionId } = useParams();
  const queryClient = useQueryClient();
  const sessionDetails = queryClient.getQueriesData(["room", sessionId]);

  const {
    isLoading: isSummaryLoading,
    error,
    data: summaryData,
  } = useQuery({
    queryKey: ["summary", sessionId],
    queryFn: getSessionSummary(sessionId),
  });

  if (!sessionDetails) return <h1>Loading...</h1>;

  if (isSummaryLoading) return <p className="text-2xl">loading...</p>;
  if (error) return <h1 className="text-center">{error.message}</h1>;
  // console.log("sessiondetails in session", sessionDetails[0][1]);

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
          
          <div className="px-5 py-2">
            <div className="flex flex-col justify-start items-start gap-10 ">
              <div>
                <p className="text-4xl font-poppins">
                  Session on:{"  "}
                  {sessionDetails[0][1].title}
                </p>
              </div>
              <div>
                <p className="text-2xl font-poppins">
                  Conducted by: {summaryData[0].creator.firstName}
                </p>{" "}
                <Link
                  to={`/teacher/quiz/${summaryData[0].quiz}`}
                  className="underline text-babyPink hover:text-pink-800 visited:text-pink-600"
                >
                  see generated quizes
                </Link>
              </div>
              <div className="border-b-2 py-5">
                <p className="text-xl font-semibold font-poppins">
                  Topics covered:
                </p>
                {summaryData[0].topics.map((topic, index) => (
                  <p
                    key={index}
                    className="mt-2 px-5 py-5
rounded-md border-gray-700 bg-gray-200"
                  >
                    {topic}
                  </p>
                ))}
              </div>

              <div>
                <div>
                  <p className="text-gray-500 text-xl font-serif">
                    Attented Students
                  </p>
                </div>
                <div>
                  {sessionDetails[0][1].members.map((member, index) => (
                    
                    <div key={index} className="flex flex-col">
                      <p>No: {index+1}</p>
                     <p> Email: {member.emailID}</p>
                     <p> Email: {member.firstName}</p>
                    </div>
                  ))}
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
