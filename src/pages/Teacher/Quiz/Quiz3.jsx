import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar";
import { useParams } from "react-router-dom";
import MultipleChoiceQuestion from "./MultipleChoiceQuestions";
import { addQuestionToQuiz, getAllQuizById } from "../../../axios/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import { showSuccessToast, showErrorToast } from "../../../helpers/toasters";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const Quiz3 = () => {
  const navigate = useNavigate();
  const [modal, setShowModal] = useState(false);
  const queryClient = useQueryClient();

  let { quizid } = useParams();
  // Fetching data from api
  const { isLoading, error, data } = useQuery({
    queryKey: ["quiz", quizid],
    queryFn: getAllQuizById(quizid),
  });
  // End of data fetching from api

  // start of creating new quiz
  const [questext, setQuestion] = useState("question");
  const [options, setOptions] = useState(["1",'2','3','4']);
  const [correctAnswer, setCorrectAnswer] = useState("4");
  const [explanation, setExplanation] = useState("explaination");

  
  // console.log("newQuiz", newQuiz);

  const sessionData = sessionStorage.getItem("teacher");
  const { tokem } = JSON.parse(sessionData);
  // console.log("teacher token", tokem)
  const createQuestionMutation = useMutation({
    mutationFn: (tokem, newQuiz) => {
      addQuestionToQuiz(tokem, newQuiz);
    },
    onSuccess: (data) => {
      console.log(data)
      setQuestion("");
      setOptions([3]);
      setCorrectAnswer("");
      setExplanation("");
      setShowModal(false);
      queryClient.invalidateQueries('quiz');
    },
    onSettled: () => {
      
    }
  });

  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  // const handleModalSubmit = (e) => {
  //   e.preventDefault();
  //   // const newQuiz = ;
  //   createQuestionMutation.mutate({
  //     text: questext,
  //     options: options,
  //     correctAnswer: correctAnswer,
  //     explanation,
  //   });
  // };

  function useAddQuestion() {
    const queryClient = useQueryClient();
  
    const addQuestionMutation = useMutation(
      (tokem, newQuiz) => {
          addQuestionToQuiz(tokem, newQuiz);
         },
      {
        onSuccess: () => {
          queryClient.invalidateQueries('quiz');
        },
      }
    );
  
    return addQuestionMutation;
  }
  const addQuestionMutation = useAddQuestion();

  const handleModalSubmit = (event) => {
    event.preventDefault();
    const newQuestion = {
      text: questext,
      options: options,
      correctAnswer: correctAnswer,
    };
    addQuestionMutation.mutate(newQuestion);
    setQuestion('');
    setOptions(["",'','','']);
    setCorrectAnswer('');
    setExplanation('');
  };
  // end of creating new quiz

  if (isLoading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div>
        <p>showErrorToast(error.message)</p>
        <ToastContainer />
      </div>
    );

  return (
    <>
      <div>
        <button onClick={() => showSuccessToast("my message")}>Notify</button>
        <ToastContainer />
      </div>
      <div className="">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-center mx-3"
          onClick={() => setShowModal(true)}
        >
          Add Question
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-center mx-3"
          // onClick={GetQuizResponses}
        >
          Get Responses
        </button>
      </div>
      {modal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <form
            onSubmit={handleModalSubmit}
            className="max-w-md mx-auto bg-gray-100 shadow-2xl p-10 rounded-md"
          >
            <div className="p-0 flex justify-end items-end">
              <button onClick={() => setShowModal(false)}>cross</button>
            </div>
            <div className="my-4">
              <label
                htmlFor="question"
                className="block text-gray-700 font-medium mb-2"
              >
                Question Text
              </label>
              <textarea
                id="question"
                className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={questext}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label className="block text-gray-700 font-medium mb-2">
                Options
              </label>
              {options.map((option, index) => (
                <input
                  key={index}
                  type="text"
                  className="w-full py-2 px-2 border-gray-300 rounded-lg mb-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder={`Option ${index + 1}`}
                  value={options[index]}
                  onChange={(e) => handleOptionChange(index, e)}
                />
              ))}
            </div>
            <div className="my-4 ">
              <h3 className="text-red-500">{alert}</h3>
              <label
                htmlFor="correctAnswer"
                className="block text-gray-700 font-medium mb-2"
              >
                Correct Answer
              </label>
              <input
                id="correctAnswer"
                type="text"
                className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
              />
            </div>
            <div className="my-4 ">
              <h3 className="text-red-500">{alert}</h3>
              <label
                htmlFor="correctAnswer"
                className="block text-gray-700 font-medium mb-2"
              >
                Explaination
              </label>
              <input
                id="explanation"
                type="text"
                className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                // disabled={createQuestionMutation.isLoading}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                {/* {createQuestionMutation.isLoading ? "adding ..." : "Add"} */}
                add
              </button>
            </div>
          </form>
        </div>
      ) : null}

      <div className="w-full px-auto ">
        <p>Session title: {data?.title}</p>

        {data.questions.map((question, index) => {
          console.log(question, index)
          return(
            <MultipleChoiceQuestion key={index} questionData={question} />
          )
        })}
      </div>
    </>
  );
};

export default Quiz3;
