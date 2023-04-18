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
  console.log("room heading", sessionDetails)


  // starting to fetch quiz response
  const {isLoading:isQuizResponseLoading, error, data:quizResponses} = useQuery({
    queryKey:["response", quizid, "response"],
    queryFn: getQuizResponses(quizid)
  })

  if(isQuizResponseLoading)return <p className="text-center text-2xl font-poppins">Loading...</p>
  if(error)return <p className="text-red-500 text-xl font-rubik">{error.message}</p>
  // end to fetch quiz response


  const Responses = [

    {

      name: "Priyanshu",
      email: "xyz@gmail.com"
      
    },
    {

      name: "Priyanshu",
      email: "xyz@gmail.com"
      
    },
    {

      name: "Priyanshu",
      email: "xyz@gmail.com"
      
    },
    {

      name: "Priyanshu",
      email: "xyz@gmail.com"
      
    },
    {

      name: "Priyanshu",
      email: "xyz@gmail.com"
      
    },
    {

      name: "Priyanshu",
      email: "xyz@gmail.com"
      
    },
    {

      name: "Priyanshu",
      email: "xyz@gmail.com"
      
    },
    {

      name: "Priyanshu",
      email: "xyz@gmail.com"
      
    }
  ];

  // const [sortOrder, setSortOrder] = useState('asc');

  // const sortByScore = () => {
  //   const sortedData = [...data].sort((a, b) => {
  //     if (sortOrder === 'asc') {
  //       return a.score - b.score;
  //     } else {
  //       return b.score - a.score;
  //     }
  //   });
  //   setData(sortedData);
  //   setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  // };
  // console.log(quizResponses);

  return (

    <div className="bg-[#F3F8FF] min-h-screen">
        <div className="grid grid-cols-11">
          <div
            className="block msm:hidden col-start-1 col-end-3 bg-white
text-[#9696a6] min-h-screen fixed w-[18%]"
          >
            <Sidebar />
          </div>
          <section className=" col-start-3 col-end-12 min-h-screen  ">
          <div className="m-5 block p-5 bg-[#3912E6] rounded-xl h-1/7">
          <h1 className="text-4xl font-bold font-serif text-white">Quiz Responses</h1>
          </div>

    <div className="flex flex-row items-center justify-center mx-auto px-5 bg-[#F3F8FF] ">
      {
        !isQuizResponseLoading && 
      
        
        <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm space-y-2 text-left text-gray-500 dark:text-gray-400">
    <thead className="text-lg border-b-2 mb-2 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="px-6 py-3">
                Student Name
            </th>
            <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                    Email
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                </div>
            </th>
            <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                    Score
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                </div>
            </th>
        </tr>
    </thead>
    <tbody>
    
          {
            quizResponses.map((response, index)=>{
              return (

        <tr key={index} className="bg-white text-lg border-b text-gray-700 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                {response.student.firstName}
            </th>
            <td className="px-6 py-4">
              {response.student.emailID}
            </td>
            <td className="px-6 py-4">
                {response.score}
            </td>
        </tr>)

            })
          }
          
    </tbody>
</table>
</div>
      }
    </div>
    </section>
    </div>
    </div>
  );
};

export default QuizResponses;
