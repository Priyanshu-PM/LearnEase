import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getQuizResponses } from "../../../axios/apiCalls";

const QuizResponses = () => {
  
  let {quizid} = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const sessionDetails = queryClient.getQueriesData(["room", quizid]);


  // starting to fetch quiz response
  const {isLoading:isQuizResponseLoading, error, data:quizResponses} = useQuery({
    queryKey:["response", quizid, "response"],
    queryFn: getQuizResponses(quizid)
  })

  if(isQuizResponseLoading)return <p className="text-center text-2xl font-poppins">Loading...</p>
  if(error)return <p className="text-red-500 text-xl font-rubik">{error.message}</p>
  // end to fetch quiz response

  return (
    <div className="flex flex-row items-center justify-center mx-auto p-2">
      {
        !isQuizResponseLoading && 
        <div>
          {
            quizResponses.map((response, index)=>{
              return <div key={index} className="border-2 border-gray-500 p-4 w-56 flex items-center justify-between font-poppins">
                {console.log("student", response.student)}
                <p className="text-lg font-semibold">{response.student.firstName} {response.student.lastName}</p>
                <p className="text-md">{response.student.classroom}</p>
                {console.log("answer", response.answers)}
              </div>
            })
          }
        </div>
      }
    </div>
  );
};

export default QuizResponses;
