import React, {useEffect, useState} from "react";


import { useParams } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const QuizDetail = () => {
  
  const navigate = useNavigate();
  
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


          console.log("for each loop k andar hu ");
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
    }, [responseDemo]);

    const saveData = () => {
      navigate("/teacher/home");
    }


  // console.log(responses);
  // console.log("updated responses : ",updatedResponses);

  return (
    <div className="bg-gradient-to-b from-gray-200 to-white  min-h-screen">
      <div className="grid grid-cols-11">
        <div className="block sm:hidden col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-3 msm:col-start-1 col-end-12 min-w-full">
          <div className="mx-auto bg-white p-2">
            <h1 className="text-center text-2xl font-serif">Quiz Responses</h1>
            <button className="bg-orngColor hover:bg-orngColor hover:scale-105 transition-all font-serif text-white font-bold py-2 px-4 rounded-2xl" onClick={saveData}>
          Save Responses
        </button>
          </div>

          <div className="min-w-full py-5 px-5 space-y-5">
          {
            
            updatedResponses.length > 0 ? (

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-7 mt-8">
            {updatedResponses.map((response)=> (
              <div className="flex flex-row justify-start items-start
              gap-4 bg-white bg-opacity-20 rounded-lg shadow-md p-4" >


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
