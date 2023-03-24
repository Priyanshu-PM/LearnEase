import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";

const Quiz = () => {
  const [quizId, setQuizId] = useState("");
  const [quizes, setQuizes] = useState([]);

  const [quizData, setQuizData] = useState([]);

  let Id = useParams();

  const apiKey = process.env.REACT_APP_STUDYAI_API;
  const quizkey = `${apiKey}/quiz/${quizId}`;
  const quizDemo = `${apiKey}/quiz/63fa00bff48312e9af983087`;

  useEffect(() => {
    setQuizId(Id.quizid);
    getQuizes();
  }, [quizDemo]);
  console.log(Id.quizid);

  const getQuizes = async () => {
    try {
      const { data } = await axios.get(quizDemo);
      const res = JSON.parse(data.data)
      setQuizData(res)
      setQuizes(res.questions)
      console.log(quizes)
    } catch (error) {
      console.log(error)
    }
  };
  // useEffect(() => {
  //   axios
  //     .get(quizDemo, {})
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

  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      answers: [
        { id: "a", text: "London" },
        { id: "b", text: "Paris" },
        { id: "c", text: "Madrid" },
      ],
      correctAnswer: "b",
      selectedAnswer: null,
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      answers: [
        { id: "a", text: "Jupiter" },
        { id: "b", text: "Earth" },
        { id: "c", text: "Saturn" },
      ],
      correctAnswer: "a",
      selectedAnswer: null,
    },
    {
      id: 3,
      question: "What is the smallest country in the world?",
      answers: [
        { id: "a", text: "Monaco" },
        { id: "b", text: "Nauru" },
        { id: "c", text: "Vatican City" },
      ],
      correctAnswer: "c",
      selectedAnswer: null,
    },
  ];

  // Define a state variable to hold the quiz score
  const [score, setScore] = useState(0);

  const handleSubmit = (event) => {
    let newScore = 0;
    questions.forEach((question) => {
      if (question.selectedAnswer === question.correctAnswer) {
        newScore++;
      }
    });

    setScore(newScore);
    console.log(questions);

    event.preventDefault();

    // axios
    //   .post(submitquizKey, {
    //     student: student.student._id,
    //     quiz: quizid,
    //     answers: [],
    //   })
    //   .then((res) => {
    //     const data = res.data;
    //     console.log(data);

    //     if (data.success) {
    //       console.log("Quiz submitted successfully");
    //     } else {
    //       alert("Failed to submit quiz");
    //     }
    //   })
    //   .catch((err) => {
    //     alert(err);
    //     console.log(err);
    //   });
  };

  // console.log(quizData.title);
  // console.log(quizData.questions);

  return (
    <div className="bg-[#F3F8FF] min-h-screen ">
      <div className="grid grid-cols-11">
        <div
          className="hidden bg-white sm:block col-start-1 col-end-3 
text-[#9696a6] min-h-screen fixed w-[18%]"
        >
          <Sidebar />
        </div>

        <div className="col-start-3 col-span-full first-letter:w-full bg-gray-100 min-h-screen py-8">
          <div className="mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-8">
                  {quizData.title}
                </h1>
              </div>
              {console.log("inside map ", quizes)};
              <div>
                {quizes.map((question, index) => (
                  // <div key={question.id} className="mb-6">
                  //   <h2 className="text-xl font-bold text-gray-800 mb-4">
                  //     {index + 1}.{question.text}
                  //   </h2>
                  //   {question.options.map((answer) => (
                  //     <div className="flex flex-col" key={answer.id}>
                  //       <input
                  //         className="form-radio h-4 w-4"
                  //         type="radio"
                  //         id={answer.id}
                  //         name={`question-${question.id}`}
                  //         value={answer.id}
                  //         checked={question.selectedAnswer === answer.id}
                  //         onChange={() =>
                  //           // handleAnswerSelect(question.id, answer.id)
                  //           {}
                  //         }
                  //       />
                  //       <label
                  //         className="inline-flex items-center mb-2"
                  //         htmlFor={answer.id}
                  //       >
                  //         {answer.text}
                  //       </label>
                  //     </div>
                  //   ))}
                  // </div>
                  <>

                  </>
                ))}
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-center"
                  onClick={handleSubmit}
                >
                  Submit Quiz
                </button>
                {score > 0 && (
                  <div>
                    <h2>Your Score</h2>
                    <p>
                      {score} out of {questions.length}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
