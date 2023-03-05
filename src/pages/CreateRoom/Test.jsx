import React, {useState, useEffect} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening
  } = useSpeechRecognition();


  const [recording, setRecording] = useState(false);
  const [transcription, setTranscription] = useState('');

  const startRecording = () => {

    setRecording(true);
    SpeechRecognition.startListening();
    
  };

  const stopRecording = () => {

    setRecording(false);
    SpeechRecognition.stopListening();

  };

  // useEffect(() => {
  //   recognition.onresult = (event) => {
  //     const transcript = event.results[0][0].transcript;
  //     setTranscription(transcription + ' ' + transcript);
  //   };
  // }, []);

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
      body: JSON.stringify({ transcript }),
    });

    if (response.ok) 
    {
      resetTranscript();
    } 
    else 
    {
      console.error('Failed to send transcription to server');
    }

  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  if(browserSupportsContinuousListening) {

    SpeechRecognition.startListening({continuous: true});
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={startRecording}>Start</button><br/><br/>
      <button onClick={stopRecording}>Stop</button><br/><br/>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;