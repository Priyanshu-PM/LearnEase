import React, { useState } from "react";

function Microphone() {
  const [recording, setRecording] = useState(false);
  const [audioStream, setAudioStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const handleRecordClick = () => {
    setRecording(true);

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.addEventListener("dataavailable", (event) => {
          setAudioChunks((chunks) => [...chunks, event.data]);
        });

        mediaRecorder.start();
        setAudioStream(stream);
      })
      .catch((err) => {
        console.error("Error starting microphone:", err);
        setRecording(false);
      });
  };

  const handleStopClick = () => {
    setRecording(false);

    if (audioStream) {
      audioStream.getTracks().forEach((track) => track.stop());
    }

    const audioBlob = new Blob(audioChunks, { type: "audio/mpeg-3" });
    console.log("Recorded audio:", audioBlob);
  };

  return (
    <div>
      <button onClick={handleRecordClick} disabled={recording}>
        Record
      </button>
      <button onClick={handleStopClick} disabled={!recording}>
        Stop
      </button>
    </div>
  );
}

export default Microphone;