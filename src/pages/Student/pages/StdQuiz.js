/* eslint-disable no-whitespace-before-property */
import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import Questions from "./QuizComponents/Questions";


const StdQuiz = () => {
  
  let quizid = useParams();
  
  const {student} = JSON.parse(sessionStorage.getItem("student"))
  console.log("student", student._id)
  const [allQuestions, setAllQuestions] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const apiKey = process.env.REACT_APP_STUDYAI_API;
  const getAllQuizById = `${apiKey}/quiz/${quizid.quizId}`;
  const submitQuizResponse = `${apiKey}/quiz/${quizid.quizId}/response`;

  // Fetch all quizes from api
  const fetchQuizData = useCallback(async () => {
    try {
      const response = await axios.get(getAllQuizById);
      const { data } = response.data;
      const parsedData = JSON.parse(data);
      setQuizData(parsedData);
      setAllQuestions(parsedData.questions);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchQuizData();
  }, [fetchQuizData]); 
  console.log("student quiz data" ,quizData)
  
  const handleClearResponse = (questionId) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: null,
    }));
  };

  const handleAnswerSelect = (event, questionId) => {
    const { value } = event.target;
    setIsOptionSelected(true)
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: value,
    }));
  };
  console.log(selectedAnswers);

  const validateAnswers = () => {
    const selectedQuestions = Object.keys(selectedAnswers);
    const selectedAns = Object.values(selectedAnswers)

    if (selectedQuestions.length !== allQuestions.length || selectedAns.includes(null)) {
      alert("Please attempt all questions before submitting.");
      return false;
    }
    return true;
  };


  const handleSubmit = async (event) => {
    // submit response to database and let user see the score
    event.preventDefault();
    
    if (validateAnswers()) {
      let totalScore = 0;
      allQuestions.forEach((question) => {
        const selectedAnswer = selectedAnswers[question._id];
        if (selectedAnswer === question.correctAnswer) {
          totalScore += 1;
        }
      });
      setScore(totalScore);

      // formatting selectedAnswers to make it match backend api
      const formattedAnswers = Object.keys(selectedAnswers).map((questionId) => ({
        question: questionId,
        answer: selectedAnswers[questionId],
      }));
      console.log(formattedAnswers)      
      // sending selectedAnswers to database
      try {
        const {data} = await axios.post(submitQuizResponse,
          {
            student: student._id,
            quiz: quizid.quizId,
            "answers":formattedAnswers,
            score,
            total: allQuestions.length
        } )
        if(data.success === true){
          alert("quiz response sent to backend")
        }
        // now show the score to user
      } catch (error) {
        console.log("Error while quiz response", error)
      }
    
    } else {
      alert("Please answer all questions before submitting.");
      return
    }
  };
  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue =
      "Are you sure you want to leave the page? Your answers will be lost.";
  };

  

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // return (
  //   <div className="bg-gray-100 min-h-screen py-8">
  //     <h3>Quiz started</h3>
  //     <h3>Quiz on: {quizData.title}</h3>
  //     <div>
  //       <h2>Totol questions: {allQuestions.length}</h2>
  //       {allQuestions.map((question, index) => (
  //         <div key={question._id} className="p-10">
  //           <h3>{question.text}</h3>
  //           <ul>
  //             {question.options.map((option, optionIndex) => (
  //               <li key={optionIndex}>
  //               <label>
  //               <input
  //                 type="radio"
  //                 name={`question-${question._id}`}
  //                 value={option}
  //                 checked={selectedAnswers[question._id] === option}
  //                 onChange={(event) =>
  //                   handleAnswerSelect(event, question._id)
  //                 }
  //               />
  //               {option}
  //             </label>
  //               </li>
  //             ))}
  //           </ul>
  //           {isOptionSelected && <button onClick={() => handleClearResponse(question._id)}>Clear Response</button>}
  //         </div>
  //       ))}
  //       <button onClick={handleSubmit}>Submit</button>
  //       {score !== null && (
  //         <p>
  //           Your score is {score} out of {allQuestions.length}
  //         </p>
  //       )}
  //     </div>
  //   </div>
  // );

  return (
    <>
      <div className="w-4/6 flex flex-col mx-auto">
        {/* info card for quiz */}
        <div className="p-4">
          <div className="flex items-center font-rubik font-normal">
            <p className="flex items-center py-1 px-2 rounded-md text-xs justify-between text-green-600 bg-green-100 w-fit">
              <BiTime />
              <span className="pl-1">2:30am</span>
            </p>
            <p className="ml-4 flex items-center py-1 px-2 rounded-md text-xs justify-between text-pink-600 bg-pink-100 w-fit">
              <BsCalendar2Date />
              <span className="pl-1">5 April, 2023</span>
            </p>
          </div>

          <div className="pt-4">
            <h1 className="text-sm text-gray-400">Stared quiz on</h1>
            <h1 className="text-4xl font-rubik capitalize font-bold">
            {quizData.title}
            </h1>
          </div>

          <div className="pt-4 font-poppins">
            <p className="text-sm text-gray-500">
              Session conducted by:{" "}
              <span className="pl-1 capitalize text-black font-medium ">
                john
              </span>
            </p>
            <p className="text-sm text-gray-500">
              Total questions:{" "}
              <span className="pl-1 capitalize text-black font-medium ">
              {allQuestions.length}
              </span>
            </p>
          </div>
        </div>
        
        <div className="px-6 mt-10">

        <p className="text-2xl font-rubik font-normal text-gray-500">Questions:</p>
        </div>

        {/* start parent div for all questions */}
        <div className="px-6">
          {
            allQuestions.map((question, index)=>{
              return <Questions key={index} question={question}/>
            })
          }
        </div>
        {/* end of parent div for all questions */}
        
      </div>
    </>
  );
};

export default StdQuiz;
