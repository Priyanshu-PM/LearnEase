import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Tester = () => {
  const [textChunks, setTextChunks] = useState([]);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening,
  } = useSpeechRecognition();

  useEffect(() => {
    const interval = setInterval(() => {
      if (textChunks.length > 0) {
        // send the text to the server
        sendTextToServer(textChunks.join(' '));
        // clear the textChunks array
        setTextChunks([]);
      }
    }, 1000); // 5 minutes

    return () => clearInterval(interval);
  }, [textChunks]);

  const sendTextToServer = (text) => {
    // TODO: implement the function to send text to the server
    console.log('sending text to server:', text);
  };

  const handleTextChange = (newText) => {
    setTextChunks((prevChunks) => [...prevChunks, newText]);
  };


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  if (browserSupportsContinuousListening) {
    SpeechRecognition.startListening({ continuous: true });
  } else {
    // Fallback behaviour
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <br />
      <br />
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <br />
      <br />
      <button
        onClick={() => {
          handleTextChange(transcript);
          resetTranscript();
        }}
      >
        Reset
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default Tester;
