import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal";

const Quiz = () => {
  const [quizId, setQuizId] = useState("");
  const [quizes, setQuizes] = useState([]);
  const [modal, setShowModal] = useState(false);
  const [QUESTIONS, setQUESTIONS] = useState();

  const [quizData, setQuizData] = useState([]);

  let Id = useParams();

  const apiKey = process.env.REACT_APP_STUDYAI_API;
  const quizKey = `${apiKey}/quiz/${quizId}`;
  const quizDemo = `${apiKey}/quiz/63fa00bff48312e9af983087`;

  useEffect(() => {
    setQuizId(Id.quizid);
    getQuizes();
  }, [quizDemo]);
  console.log(Id.quizid);

  var teacherData = sessionStorage.getItem("teacher");
  const tdata = JSON.parse(teacherData);

  console.log(tdata.teacher._id);

  const getQuizes = async () => {
    try {
      const { data } = await axios.get(quizDemo);
      const res = JSON.parse(data.data);
      setQuizData(res);

      setQUESTIONS(quizData.questions);
      setQuizes(res);
    } catch (error) {
      console.log(error);
    }
  };



  // useEffect(() => {
  //   axios
  //     .get(quizKey, {})
  //     .then((res) => {
  //       const data = res.data;
  //       console.log("inside " , quizData);
  //       const quizes = quizData.questions
  //       setQuizData(JSON.parse(data.data));
  //       setQuizes(quizData.questions)
  //       console.log(quizes)
  //     })
  //     .catch((err) => {
  //       alert("invalid");
  //       console.log(err);
  //     });
  // }, [quizDemo]);





  const handleSubmit = (event) => {
    console.log(QUESTIONS);

    event.preventDefault();
  };

  const GetQuizResponses = () => {

    // useEffect(() => {

    // }, [quizKey])
  

  };


  const [questext, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };


  // console.log(tdata.tokem);

  const handleCorrectAnswerChange = (e) => {
    setCorrectAnswer(e.target.value);
  };

  const handleaddQuestion = (event) => {
    event.preventDefault();

    axios
      .patch(
        quizKey,
        {
          text: questext,
          options: options,
          correctAnswer: correctAnswer,
        },
        {
          headers: {
            Authorization: `${tdata.tokem}`,
          },
        }
      )
      .then((res) => {
        const data = res.data;
        console.log(data);

        if (data.success) {
          console.log("Question added successfully");
          setShowModal(false);
        } else {
          alert("Failed to add question");
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  console.log("=====================");
  console.log(quizData.title);
  console.log(quizData.questions);
  console.log("=====================");
  console.log(QUESTIONS);
  console.log("=====================");

  return (
    <div >
      {modal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <form
            onSubmit={handleaddQuestion}
            className="max-w-md mx-auto bg-gray-100 shadow-2xl p-10 rounded-md"
          >
            <div className="my-4">
              <label
                htmlFor="question"
                className="block text-gray-700 font-medium mb-2"
              >
                Question
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
            <div className="my-4">
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
            className="hidden bg-white sm:block col-start-1 col-end-3 
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
                </h1></div>
                <div className="">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-center mx-3"
                    onClick={() => setShowModal(true)}
                  >
                    Add Question
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-center mx-3"
                    onClick={GetQuizResponses}
                  >
                    Get Responses
                  </button>
                </div>
              </div>

              <div></div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                {console.log(quizData.questions)}
                <div className="">
                  <div>{console.log(quizData.questions)}
                  <h1>Quiz data</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;