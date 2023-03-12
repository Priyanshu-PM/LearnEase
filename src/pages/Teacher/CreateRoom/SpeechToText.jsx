import React, { useState } from 'react';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');


  const startRecording = () => {
    recognition.start();
    recognition.onstart = () => {
      console.log("Voice recognition started.");
    };
    recognition.onresult = event => {
      let interimTranscript = '';
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }
      setTranscript(finalTranscript);
    };
  };

  const stopRecording = () => {
    recognition.stop();
    console.log("Voice recognition stopped.");
  };

  const submitTranscript = () => {
    // TODO: Send the transcript to a speech-to-text API for transcription
    console.log("Transcript submitted: ", transcript);
  };

  return (
    <div className="">
      <br/><button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' 
      onClick={startRecording}>
      Start Session
      </button><br/>
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={stopRecording}>
      End Session
      </button><br/>
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={submitTranscript}>
      Summarize session
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechToText;
