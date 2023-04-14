import React, { useState, useEffect } from "react";
import Sidebar from "../../../Components/Sidebar";
import { FaCopy, FaUserCircle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useParams } from "react-router-dom";

const students = [
  {
    id: 1,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 75,
  },
  {
    id: 2,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 95,
  },
  {
    id: 3,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 20,
  },
  {
    id: 4,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 40,
  },
  {
    id: 5,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 65,
  },
  {
    id: 6,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 70,
  },
  {
    id: 7,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 71,
  },
  {
    id: 8,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 72,
  },
  {
    id: 9,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 75,
  },
  {
    id: 10,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 95,
  },
  {
    id: 11,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 20,
  },
  {
    id: 12,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 40,
  },
  {
    id: 13,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 65,
  },
  {
    id: 14,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 70,
  },
  {
    id: 15,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 71,
  },
  {
    id: 16,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 72,
  },
  {
    id: 17,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 75,
  },
  {
    id: 18,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 95,
  },
  {
    id: 19,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 20,
  },
  {
    id: 20,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 40,
  },
  {
    id: 21,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 65,
  },
  {
    id: 22,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 70,
  },
  {
    id: 23,
    name: "Tony Stark",
    email: "tony@example.com",
    attentiveness: 71,
  },
  {
    id: 24,
    name: "Peter",
    email: "spidy@example.com",
    attentiveness: 72,
  },
];

const InitSession = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const [sessionID, setSessionID] = useState("");
  const [tdata, setTdata] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  let Id = useParams();

  const apiKey = process.env.REACT_APP_STUDYAI_API;

  console.log(sessionID);

  const quizkey = `${apiKey}/quiz/${sessionID}`;
  const quizDemo = `${apiKey}/quiz/63fa00bff48312e9af983087`;
  const getresKey = `${apiKey}/quiz/${sessionID}/response`;

  // const [transcript, setTranscript] = useState("");

  const [recording, setRecording] = useState(false);

  const [stopRecord, setStopRecord] = useState(false);

  const [closebtn, displayclosebtn] = useState(false);

  useEffect(() => {
    var teacherData = sessionStorage.getItem("teacher");
    setTdata(JSON.parse(teacherData));
    setSessionID(Id.id);
    setLoading(false);
  }, []);

  useEffect(() => {
    let intervalId;
    if (recording) {
      intervalId = setInterval(() => {
        sendTranscriptionToServer();
      }, 60000); // repeat every 5 minutes
    }
    return () => clearInterval(intervalId);
  }, [recording]);

  // useEffect(() => {
  //   axios.get(key, {}).then((res) => {});
  // });

  const sendTranscriptionToServer = () => {
    //sending data to server and reseting the transript;
    resetTranscript();
  };

  const startRecording = () => {
    setRecording(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const [qButton, setQButton] = useState(false);

  const stopRecording = () => {
    setRecording(false);
    SpeechRecognition.stopListening();
    // recognition.stop();
    console.log("Voice recognition stopped.");
    // setStopRecord(true);
    // timer.stop();

    setQButton(true);
  };

  const submitTranscript = (event) => {
    // TODO: Send the transcript to a speech-to-text API for transcription
    console.log("Transcript submitted: ", transcript);
    event.preventDefault();
  };

  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("Copied to clipboard!");
    } catch (err) {
      setCopySuccess("Failed to copy");
    }
  };

  const [quizequestion, quizesetQuestion] = useState("");
  const [quizeoptions, quizesetOptions] = useState(["", "", "", ""]);

  const quizehandleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  const quizehandleOptionChange = (event, index) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const [showModal, setShowModal] = useState(false);

  const handleGenerateQuiz = () => {
    console.log(`/teacher/quiz/${sessionID}`);
    navigate(`/teacher/quiz/${sessionID}`);
  };

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  // handle generate quiz button

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tdata.tokem);
    const data = { question, options, correctAnswer };
    axios
      .patch(
        quizkey,
        {
          text: question,
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
        console.log(res);
        if (res.success) {
          alert("question added successfully");
        }
        // Handle success
      })
      .catch((err) => {
        console.log(err);
        // Handle error
      });

    // setShowResponses(true);
    setShowModal(false);
    console.log(data);
  };

  const [responses, setResponses] = useState([]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const joinedTime = new Date().toLocaleTimeString();

  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      {showModal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-gray-200 shadow-2xl p-10 rounded-md"
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
                value={question}
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
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
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

      <div className="bg-[#F3F8FF] min-h-screen">
        <div className="grid grid-cols-11">
          <div
            className="block msm:hidden col-start-1 col-end-3 bg-white
text-[#9696a6] min-h-screen fixed w-[18%]"
          >
            <Sidebar />
          </div>
          <section className="  col-start-3 col-end-12 min-h-screen px-8">
            {stopRecord ? (
              <div className="px-10 py-5">
                <div className="flex flex-col justify-start items-start gap-10 ">
                  <div>
                    <form onSubmit={submitTranscript}>
                      <button
                        className="bg-transparent
hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2
px-4 border border-blue-500 hover:border-transparent rounded"
                      >
                        Summary
                      </button>
                      {transcript && (
                        <p
                          className="mt-4 px-6 py-6 w-[90rem]
rounded-md border-gray-700 bg-gray-200"
                        >
                          {transcript}
                        </p>
                      )}
                    </form>
                  </div>

                  <div>
                    <button
                      className="bg-transparent hover:bg-blue-500
text-blue-700 font-semibold hover:text-white py-2 px-4 border
border-blue-500 hover:border-transparent rounded"
                      onClick={() => {}}
                    >
                      Quiz responses
                    </button>

                    <div className="flex-1 w-full md:w-1/4 flex flex-col flex-grow flex-wrap flex-shrink grid-flow-row gap-5 pt-10">
                      {students.map((student) => (
                        <div
                          className="w-full md:w-1/3 flex flex-row justify-start
items-start gap-4 bg-white bg-opacity-20 rounded-lg shadow-md p-4"
                          key={student.email}
                        >
                          <FaUserCircle
                            className="text-gray-500 w-12
h-12 mb-4"
                          />
                          <div>
                            <h2 className="text-lg font-medium">
                              {student.name}
                            </h2>
                            <p className="text-gray-500 mb-2">
                              {student.email}
                            </p>
                            <p className="text-sm text-gray-400">
                              Joined at {joinedTime}
                            </p>
                            <div
                              className="flex items-center
justify-between mt-4"
                            >
                              <div
                                className="w-32 h-3 rounded-lg
overflow-hidden bg-gray-300"
                              >
                                <div
                                  className={`h-full rounded-lg ${
                                    student.attentiveness >= 80
                                      ? "bg-green-400"
                                      : student.attentiveness >= 60
                                      ? "bg-yellow-400"
                                      : "bg-red-400"
                                  }`}
                                  style={{ width: `${student.attentiveness}%` }}
                                ></div>
                              </div>
                              <div className="text-sm text-gray-500 ml-4">
                                {student.attentiveness}%
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="absolute top-0 right-6 p-2 text-gray-500">
                        Class Started at {joinedTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <br />
                <div className="  px-10">
                  {closebtn === false && (
                    <div className="">
                      <h1>The session has been created successfully</h1>
                      <br />
                      <h1>Share this link with the students </h1>
                      <br />
                      <div className=" bg-slate-200 p-3 rounded-lg mb-10">
                        <h1 className=" bg-slate-200 text-black">
                          {`${apiKey}/room_id=${sessionID}&redirect_url=`}
                          <button onClick={() => copyToClipboard(sessionID)}>
                            <FaCopy />
                          </button>
                        </h1>
                      </div>

                      <div className="flex justify-between">
                        <button
                          className="bg-transparent hover:bg-blue-500
text-blue-700 font-semibold hover:text-white py-2 px-4 border
border-blue-500 hover:border-transparent rounded"
                          onClick={startRecording}
                        >
                          Start Session
                        </button>

                        <button
                          className=" bg-transparent hover:bg-red-500
text-red-700 font-semibold hover:text-white py-2 px-4 border
border-red-500 hover:border-transparent rounded"
                          onClick={stopRecording}
                        >
                          Close Session
                        </button>
                      </div>
                    </div>
                  )}

                  {qButton ? (
                    <button
                      className="mt-5 bg-transparent hover:bg-blue-500
                  text-blue-700 font-semibold hover:text-white py-2 px-4 border
                  border-blue-500 hover:border-transparent rounded"
                      onClick={handleGenerateQuiz}
                    >
                      Generate Quiz
                    </button>
                  ) : null}

                  <br />
                  <p>{transcript}</p>
                </div>
                <div className="px-10">
                  <br />
                  {/* frame data
        <p>{frameData}</p> */}
                </div>

                <div className="grid grid-cols-1 msm:grid-cols-2 mmd:grid-cols-2 mlg:grid-cols-3 mxl:grid-cols-4 m2xl:grid-cols-5 gap-7 mt-8">
                  {students.map((student) => (
                    <div
                      className="flex flex-row justify-start items-start
gap-4 bg-white bg-opacity-20 rounded-lg shadow-md p-4"
                      key={student.id}
                    >
                      <FaUserCircle className="text-gray-500 w-12 h-12 mb-4" />
                      <div>
                        <h2 className="text-lg font-medium">{student.name}</h2>+{" "}
                        <p className="text-gray-500 mb-2">{student.email}</p>
                        <p className="text-sm text-gray-400">
                          Joined at {joinedTime}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <div
                            className="w-32 h-3 rounded-lg
overflow-hidden bg-gray-300"
                          >
                            <div
                              className={`h-full rounded-lg ${
                                student.attentiveness >= 80
                                  ? "bg-green-400"
                                  : student.attentiveness >= 60
                                  ? "bg-yellow-400"
                                  : "bg-red-400"
                              }`}
                              style={{ width: `${student.attentiveness}%` }}
                            ></div>
                          </div>
                          <div className="text-sm text-gray-500 ml-4">
                            {student.attentiveness}%
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="absolute top-0 right-6 p-2 text-gray-500">
                    Class Started at {joinedTime}
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default InitSession;
