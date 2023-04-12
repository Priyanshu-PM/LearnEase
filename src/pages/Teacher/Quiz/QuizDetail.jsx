import React, {useEffect, useState} from "react";


import { useParams } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

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
  const [updatedResponses, setUpdatedResponses] = useState([]);


    useEffect(() => {

    // ithe pan responseKey takaychi aahe

      axios
      .get(responseDemo, {})
      .then((res) => {
        const data = res.data;
        console.log(data.success);
        setResponses(JSON.parse(data.data));
        console.log(responses);

        let resStudents = [];
        responses.forEach((response) => {


          resStudents.push({
            student: response.student,
            answers: response.answers
          });
        });

        
      console.log(resStudents.students);
      setUpdatedResponses(resStudents);

      
      }).catch((err) => {
        console.log(err);
      });
    }, []);

    
  console.log(responses);
  console.log("updated responses : ",updatedResponses);

  return (
    <div className="bg-gradient-to-b from-gray-200 to-white  min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-1 sm:col-start-3 col-end-12 min-w-full">
          <div className="mx-auto bg-blue-500 p-2">
            <h1 className="text-center text-2xl">Quiz Responses</h1>
          </div>

          <div className="min-w-full pt-10 pb-10 pl-5 pr-5 space-y-10">

          {
            console.log(updatedResponses.student)}
          {
            
            updatedResponses.length > 0 ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 mt-8">
            {updatedResponses.map((response)=> (
              <div className="flex flex-row justify-start items-start
              gap-4 bg-white bg-opacity-20 rounded-lg shadow-md p-4" key={updatedResponses.student._id}>


              <FaUserCircle className="text-gray-500 w-12 h-12 mb-4" />
                      <div>
                        <h2 className="text-lg font-medium">{response.student.emailID}</h2>+{" "}
                        
                        <div className="flex items-center justify-between mt-4">
                          <div
                            className="w-32 h-3 rounded-lg
overflow-hidden bg-gray-300"
                          >
                          </div>

                        </div>
                      </div>

              </div>
            ))}

            </div>

          ): (
            <div className=" rounded-md p-4 ">

            <p className="text-gray-800 text-lg font-bold">
            No responses yet...
            </p>

            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetail;
