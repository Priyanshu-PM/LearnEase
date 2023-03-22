/* eslint-disable no-whitespace-before-property */
import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

const quizDataa = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: [
      { id: 1, text: "Paris" },
      { id: 2, text: "London" },
      { id: 3, text: "Berlin" },
      { id: 4, text: "Madrid" },
    ],
  },
  {
    id: 2,
    question: "What is the largest planet in our solar system?",
    options: [
      { id: 1, text: "Jupiter" },
      { id: 2, text: "Saturn" },
      { id: 3, text: "Neptune" },
      { id: 4, text: "Uranus" },
    ],
  },
  {
    id: 3,
    question: "What is the capital of France?",
    options: [
      { id: 1, text: "Paris" },
      { id: 2, text: "London" },
      { id: 3, text: "Berlin" },
      { id: 4, text: "Madrid" },
    ],
  },
  {
    id: 4,
    question: "What is the largest planet in our solar system?",
    options: [
      { id: 1, text: "Jupiter" },
      { id: 2, text: "Saturn" },
      { id: 3, text: "Neptune" },
      { id: 4, text: "Uranus" },
    ],
  },
  {
    id: 5,
    question: "What is the capital of France?",
    options: [
      { id: 1, text: "Paris" },
      { id: 2, text: "London" },
      { id: 3, text: "Berlin" },
      { id: 4, text: "Madrid" },
    ],
  },
  {
    id: 6,
    question: "What is the largest planet in our solar system?",
    options: [
      { id: 1, text: "Jupiter" },
      { id: 2, text: "Saturn" },
      { id: 3, text: "Neptune" },
      { id: 4, text: "Uranus" },
    ],
  },
];

const StdQuiz = () => {

  let quizid  = useParams();

  console.log(quizid.quizId);

  const [student, setStudent] = useState();

  const apiKey = process.env.REACT_APP_STUDY_API;


  const key = `${apiKey}/quiz/${quizid.quizId}`;
  const submitquizKey = `${apiKey}/quiz/${quizid.quizId}/response`;

  useEffect(() => {
    var studentData = sessionStorage.getItem("student");
    setStudent(JSON.parse(studentData));
  }, []);

  console.log(student);

  // /quiz/63fa0605fdc6720b99be9c69/response

  console.log(key);
  console.log(submitquizKey);

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
        alert(err);
        console.log(err);
      });
  }, [key]);

  console.log(quizData);

  // ====================================================================================

  // Define the questions and answers
  const [questions, setQuestions] = useState([
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
  ]);

  // Define a state variable to hold the quiz score
  const [score, setScore] = useState(0);

  const [sendingData, setSendingData] = useState([]);

  const setAnswers = (questionId, answerId) => {

    setSendingData((answers) => {

      return questions.map((question) => {
        if (question.id === questionId) {
          return setSendingData(...answers, { questionId, answerId });
        }
        else {
        }
      });
    });
  };

  

  console.log(sendingData);

  // Define a function to handle selecting an answer

  const handleAnswerSelect = (questionId, answerId) => {

    setAnswers(questionId, answerId);
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === questionId) {
          return { ...question, selectedAnswer: answerId };
        } else {
          return question;
        }
      });
    });
  };

  // Define a function to handle submitting the quiz
  const handleSubmit = (event) => {
    let newScore = 0;
    questions.forEach((question) => {
      if (question.selectedAnswer === question.correctAnswer) {
        newScore++;
      }
    });

    setScore(newScore);
    console.log(questions);
    console.log(submitquizKey);
    console.log(apiKey);
    event.preventDefault();

    axios
      .post(submitquizKey, {
        student: student.student._id,
        quiz: quizid,
        answers: [],
      })
      .then((res) => {
        const data = res.data;
        console.log(data);

        if (data.success) {
          console.log("Quiz submitted successfully");
        } else {
          alert("Failed to submit quiz");
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              Quiz Title
            </h1>
            <p className="text-gray-700 mb-8">
              Description of the quiz goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vestibulum vitae urna at massa
              accumsan eleifend. In euismod urna vel mi elementum volutpat.
              Praesent pretium malesuada nulla, at imperdiet nisi posuere vel.
              Nullam ac enim lectus. Sed blandit tortor felis, ac dictum leo
              bibendum a. Sed tempor fringilla sapien, vel sagittis eros
              interdum eget.
            </p>
          </div>

          <div>
            {questions.map((question, index) => (
              <div key={question.id} className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  {index + 1}.{question.question}
                </h2>
                {question.answers.map((answer) => (
                  <div className="flex flex-col" key={answer.id}>
                    <input
                      className="form-radio h-4 w-4"
                      type="radio"
                      id={answer.id}
                      name={`question-${question.id}`}
                      value={answer.id}
                      checked={question.selectedAnswer === answer.id}
                      onChange={() =>
                        handleAnswerSelect(question.id, answer.id)
                      }
                    />
                    <label
                      className="inline-flex items-center mb-2"
                      htmlFor={answer.id}
                    >
                      {answer.text}
                    </label>
                  </div>
                ))}
              </div>
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
  );
};

export default StdQuiz;
