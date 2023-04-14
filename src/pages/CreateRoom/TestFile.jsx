import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar";
import { FaUserCircle } from "react-icons/fa";
import { TaskTimer } from "tasktimer";

// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// recognition.continuous = true;
// recognition.interimResults = true;
// recognition.lang = "en-US";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

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
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening,
  } = useSpeechRecognition();

  // const [transcript, setTranscript] = useState("");

  const [recording, setRecording] = useState(false);
  const [transcription, setTranscription] = useState("");

  const [frameData, setFrameData] = useState("");

  const [stopRecord, setStopRecord] = useState(false);

  const [closebtn, displayclosebtn] = useState(false);

  useEffect(() => {
    let intervalId;
    if (recording) {
      intervalId = setInterval(() => {
        sendTranscriptionToServer();
      }, 60000); // repeat every 5 minutes
    }
    return () => clearInterval(intervalId);
  }, [recording]);

  const sendTranscriptionToServer = () => {
    //sending data to server and reseting the transript;
    resetTranscript();
  };

  const startRecording = () => {
    setRecording(true);
    SpeechRecognition.startListening({ continuous: true });

    // recognition.start();
    // recognition.onstart = () => {
    //   console.log("Voice recognition started.");
    // };

    let interimTranscript = "";
    let finalTranscript = "";
    // timer.start();

    // timer.on("tick", () => {
    //   // console.log("tick count: " + timer.tickCount);

    //   recognition.onresult = (event) => {
    //     for (let i = event.resultIndex; i < event.results.length; i++) {
    //       const transcript = event.results[i][0].transcript;

    //       if (event.results[i].isFinal) {
    //         finalTranscript += transcript + " ";
    //       } else {
    //         interimTranscript += transcript;
    //       }

    //       displayclosebtn(true);
    //     }
    //     setFrameData(finalTranscript);
    //     setTranscript(finalTranscript);
    //   };
    //   console.log(finalTranscript);
    //   if (finalTranscript.length > 100) {
    //     console.log(finalTranscript);
    //     console.log("sending data to server and reseting it.");
    //     finalTranscript = "";
    //   }

    //   // if (timer.tickCount >= 300) {
    //   //   recognition.stop();
    //   //   timer.stop();
    //   //   console.log(frameData);
    //   //   if (recognition.stop()) recognition.start();
    //   // }
    // });
  };

  const stopRecording = () => {
    setRecording(false);
    SpeechRecognition.stopListening();
    // recognition.stop();
    console.log("Voice recognition stopped.");
    // setStopRecord(true);
    // timer.stop();
  };

  const submitTranscript = (event) => {
    // TODO: Send the transcript to a speech-to-text API for transcription
    console.log("Transcript submitted: ", transcript);
    event.preventDefault();
  };

  const joinedTime = new Date().toLocaleTimeString();

  return (
    <div className="bg-[#F3F8FF] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <section className="col-start-3 col-end-12 min-h-screen px-8">
          {stopRecord ? (
            <div className="px-10 py-5">
              <div className="flex flex-col justify-start items-start gap-10 ">
                <div>
                  <form onSubmit={submitTranscript}>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Summary
                    </button>
                    {transcript && (
                      <p className="mt-4 px-6 py-6 w-[90rem] rounded-md border-gray-700 bg-gray-200">
                        {transcript}
                      </p>
                    )}
                  </form>
                </div>

                <div>
                  <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => {}}
                  >
                    Quiz responses
                  </button>

                  <div className="  grid grid-cols-5 gap-4 pt-10">
                    {students.map((student) => (
                      <div
                        className="flex flex-row justify-start items-start gap-4 bg-white bg-opacity-20 rounded-lg shadow-md p-4"
                        key={student.email}
                      >
                        <FaUserCircle className="text-gray-500 w-12 h-12 mb-4" />
                        <div>
                          <h2 className="text-lg font-medium">
                            {student.name}
                          </h2>
                          <p className="text-gray-500 mb-2">{student.email}</p>
                          <p className="text-sm text-gray-400">
                            Joined at {joinedTime}
                          </p>
                          <div className="flex items-center justify-between mt-4">
                            <div className="w-32 h-3 rounded-lg overflow-hidden bg-gray-300">
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
              <div className="flex flex-row justify-start items-start px-10">
                {closebtn === false && (
                  <div>
                    <h1>Session</h1>

                    <button
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      onClick={startRecording}
                    >
                      Start Session
                    </button>
                  </div>
                )}

                <button
                  className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                  onClick={stopRecording}
                >
                  Close Session
                </button>

                <br />
                <p>{transcript}</p>
              </div>
              <div className="px-10">
                <br />
                {/* frame data
        <p>{frameData}</p> */}
              </div>

              <div className="  grid grid-cols-5 gap-4">
                {students.map((student) => (
                  <div
                    className="flex flex-row justify-start items-start gap-4 bg-white bg-opacity-20 rounded-lg shadow-md p-4"
                    key={student.id}
                  >
                    <FaUserCircle className="text-gray-500 w-12 h-12 mb-4" />
                    <div>
                      <h2 className="text-lg font-medium">{student.name}</h2>
                      <p className="text-gray-500 mb-2">{student.email}</p>
                      <p className="text-sm text-gray-400">
                        Joined at {joinedTime}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="w-32 h-3 rounded-lg overflow-hidden bg-gray-300">
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
  );
};

export default InitSession;
