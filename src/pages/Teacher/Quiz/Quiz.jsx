import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";
import MultipleChoiceQuestion from "./MultipleChoiceQuestions";

const Quiz = () => {
  // conditional rendering of add question 
  const searchParams = new URLSearchParams(window.location.search);
  const showAddQBtn = searchParams.get('addquestion');

  let Id = useParams();
  const navigate = useNavigate();
  console.log(Id)

  let teacherData = sessionStorage.getItem("teacher");
  const tdata = JSON.parse(teacherData);
  
  const [modal, setShowModal] = useState(false);
  const [allQuestions, setAllQuestions] = useState([]);

  const [quizData, setQuizData] = useState([]);

  const apiKey = process.env.REACT_APP_STUDYAI_API;
  const getAllQuizById = `${apiKey}/quiz/${Id.quizid}`;

  const fetchQuizData = useCallback(async () => {
    try {
      const response = await axios.get(getAllQuizById);
      if (!response) {
        console.log("emtpy");
        return;
      }
      const { data } = response.data;
      const parsedData = JSON.parse(data);
      setQuizData(parsedData);
      setAllQuestions(parsedData.questions);
    } catch (error) {
      console.log("Error while fetching quiz data", error);
    }
  }, []);

  console.log("teacher id : ", tdata.teacher._id);

  const GetQuizResponses = () => {
    navigate(`/teacher/quiz/responses/${Id.quizid}?addquestion=false`);
  };

  const [questext, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [alert, setAlert] = useState("");

  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const handleaddQuestion = (event) => {
    event.preventDefault();

    const config = {
      headers: {
        Authorization: `${tdata.tokem}`,
        "Content-Type": "application/json",
      },
    };
    const newQuiz = {
      text: questext,
      options: options,
      correctAnswer: correctAnswer,
    };

    if (options.includes(correctAnswer)) {
      // const response = axios.patch(getAllQuizById, newQuiz)

      // idhar bhi correct quizKey dalni hai
      axios
        .patch(getAllQuizById, newQuiz, config)
        .then((res) => {
          const data = res.data;
          console.log(data);

          if (data.success) {
            console.log("Question added successfully");

            setQuestion("");
            setOptions(["", "", "", ""]);
            setCorrectAnswer("");
            setAlert("");
            setShowModal(false);

            fetchQuizData();
          } else {
            alert("Failed to add question");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setAlert("Correct Answer should match any one of the options");
    }
  };

  useEffect(() => {
    fetchQuizData();
  }, [fetchQuizData]);

  return (
    <>
      {modal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <form
            onSubmit={handleaddQuestion}
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
                  className="w-full border-gray-300 rounded-lg mb-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : null}
      <div className="bg-[#F3F8FF] min-h-screen ">
        <div className="grid grid-cols-11">
          <div
            className="block bg-white msm:hidden col-start-1 col-end-3 
text-[#9696a6] min-h-screen fixed w-[18%]"
          >
            <Sidebar />
          </div>

          <div className="col-start-3 col-span-full first-letter:w-full bg-gray-100 min-h-screen py-8 pt-0">
            <div className="mx-auto px-4 py-8">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-8">
                    {quizData.title}
                  </h1>
                </div>
                <div className="">
                {
                  showAddQBtn ? <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-center mx-3"
                  onClick={() => setShowModal(true)}
                >
                  Add Question
                </button>: null
                }
                  
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-center mx-3"
                    onClick={GetQuizResponses}
                  >
                    View Responses
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg  mb-8">
                <div className="">
                  <div className="gap-5 space-y-3">
                    <div>
                      {allQuestions.map((question, index) => (
                        <MultipleChoiceQuestion
                          key={index}
                          questionData={question}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
