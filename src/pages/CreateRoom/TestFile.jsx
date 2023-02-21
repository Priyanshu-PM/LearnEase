import React, { useState } from "react";
import { IoRecording } from "react-icons/io5";

import { TaskTimer } from "tasktimer";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US";

const TestFile = () => {
  const [transcript, setTranscript] = useState("");

  const [frameData, setFrameData] = useState("");

  const [stopRecord, setStopRecord] = useState(false);

  const [closebtn, displayclosebtn] = useState(false);

  

  const timer = new TaskTimer(1000);

  const startRecording = () => {
    recognition.start();
    recognition.onstart = () => {
      console.log("Voice recognition started.");
    };

    let interimTranscript = "";
    let finalTranscript = "";
    timer.start();

    timer.on("tick", () => {
      console.log("tick count: " + timer.tickCount);

      recognition.onresult = (event) => {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;

          if (event.results[i].isFinal) {
            finalTranscript += transcript + " ";
          } else {
            interimTranscript += transcript;
          }

          
        displayclosebtn(true);
        }
        setFrameData(finalTranscript);
        setTranscript(finalTranscript);
      };

      if (timer.tickCount >= 5) {
        recognition.stop();
        timer.stop();
        console.log(frameData);
        if(recognition.stop())
            recognition.start();
      }
    });
  };

  const stopRecording = () => {
    recognition.stop();
    console.log("Voice recognition stopped.");
    setStopRecord(true);
    timer.stop();
  };

  const submitTranscript = () => {
    // TODO: Send the transcript to a speech-to-text API for transcription
    console.log("Transcript submitted: ", transcript);
  };

  return (
    <div>
      <br />
      <div className="flex flex-row justify-around items-center">

      {
        closebtn === false && 
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={startRecording}
        >
          Start Session
        </button>
      }

        
        {closebtn === true && <button 
            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            onClick={stopRecording}>Close Session</button>}

        <br />
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={submitTranscript}
        >
          Summarize session
        </button>
      </div>
      <br />
      frame data
      <p>{frameData}</p>
      transcript data
      <br />
      <p>{transcript}</p>
      <br />
    </div>
  );
};

export default TestFile;
