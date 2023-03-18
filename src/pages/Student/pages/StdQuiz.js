import React, { useState, useEffect } from "react";

import axios from "axios";

// const quizData = [
//   {
//     id: 1,
//     question: "What is the capital of France?",
//     options: [
//       { id: 1, text: "Paris" },
//       { id: 2, text: "London" },
//       { id: 3, text: "Berlin" },
//       { id: 4, text: "Madrid" },
//     ],
//   },
//   {
//     id: 2,
//     question: "What is the largest planet in our solar system?",
//     options: [
//       { id: 1, text: "Jupiter" },
//       { id: 2, text: "Saturn" },
//       { id: 3, text: "Neptune" },
//       { id: 4, text: "Uranus" },
//     ],
//   },
//   {
//     id: 3,
//     question: "What is the capital of France?",
//     options: [
//       { id: 1, text: "Paris" },
//       { id: 2, text: "London" },
//       { id: 3, text: "Berlin" },
//       { id: 4, text: "Madrid" },
//     ],
//   },
//   {
//     id: 4,
//     question: "What is the largest planet in our solar system?",
//     options: [
//       { id: 1, text: "Jupiter" },
//       { id: 2, text: "Saturn" },
//       { id: 3, text: "Neptune" },
//       { id: 4, text: "Uranus" },
//     ],
//   },
//   {
//     id: 5,
//     question: "What is the capital of France?",
//     options: [
//       { id: 1, text: "Paris" },
//       { id: 2, text: "London" },
//       { id: 3, text: "Berlin" },
//       { id: 4, text: "Madrid" },
//     ],
//   },
//   {
//     id: 6,
//     question: "What is the largest planet in our solar system?",
//     options: [
//       { id: 1, text: "Jupiter" },
//       { id: 2, text: "Saturn" },
//       { id: 3, text: "Neptune" },
//       { id: 4, text: "Uranus" },
//     ],
//   },
// ];

const StdQuiz = () => {
  const apiKey = process.env.REACT_APP_STUDY_API;
  const key = `${apiKey}/quiz/63f4ff4aa769c0748f2af39c`;

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    axios
      .get(key, {})
      .then((res) => {
        const data = res.data;
        console.log(data.success);
        setQuizData(JSON.parse(data.data));
      })
      .catch((err) => {
        alert("invalid");
        console.log(err);
      });
  }, [key]);

  console.log(quizData);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Quiz Title</h1>
          <p className="text-gray-700 mb-8">
            Description of the quiz goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum vitae urna at massa accumsan
            eleifend. In euismod urna vel mi elementum volutpat. Praesent
            pretium malesuada nulla, at imperdiet nisi posuere vel. Nullam ac
            enim lectus. Sed blandit tortor felis, ac dictum leo bibendum a. Sed
            tempor fringilla sapien, vel sagittis eros interdum eget.
          </p>
          <form>
            {quizData.map((question, index) => (
              <div key={question.id} className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  {index + 1}. {question.question}
                </h2>
                <div className="flex flex-col">
                  {question.options.map((option) => (
                    <label
                      key={option.id}
                      className="inline-flex items-center mb-2"
                    >
                      <input
                        type="radio"
                        className="form-radio h-4 w-4"
                        name={`question-${question.id}`}
                        value={option.id}
                      />
                      <span className="ml-2 text-gray-700">{option.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-center">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StdQuiz;
