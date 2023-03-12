import React, { useState, useEffect } from 'react';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const Testing = () => {
  const [recording, setRecording] = useState(false);
  const [transcription, setTranscription] = useState('');

  const startRecording = () => {
    setRecording(true);
    recognition.start();
  };

  const stopRecording = () => {
    setRecording(false);
    recognition.stop();
  };

  useEffect(() => {
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscription(transcription + ' ' + transcript);
    };
  }, []);

  useEffect(() => {
    let intervalId;
    if (recording) {
      intervalId = setInterval(() => {
        sendTranscriptionToServer();
      }, 300000); // repeat every 5 minutes
    }
    return () => clearInterval(intervalId);
  }, [recording]);

  const sendTranscriptionToServer = async () => {
    const response = await fetch('https://example.com/transcribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ transcription }),
    });
    if (response.ok) {
      setTranscription('');
    } else {
      console.error('Failed to send transcription to server');
    }
  };

  return (
    <div>
      <button onClick={startRecording}>Start recording</button>
      <button onClick={stopRecording}>Stop recording</button>
      <p>Transcription: {transcription}</p>
    </div>
  );
};

export default Testing;