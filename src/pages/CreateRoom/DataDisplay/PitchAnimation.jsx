import React, { useEffect, useRef } from 'react';

const PitchAnimation = () => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const audio = audioRef.current;
    const audioContext = new AudioContext();
    const source = audioContext.createMediaElementSource(audio);
    const analyser = audioContext.createAnalyser();
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    let animationFrameId;

    const draw = () => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const barWidth = (canvasWidth / bufferLength) * 2.5;
      let x = 0;

      canvas.getContext('2d').clearRect(0, 0, canvasWidth, canvasHeight);

      analyser.getByteFrequencyData(dataArray);

      dataArray.forEach((item) => {
        const barHeight = item / 2;

        canvas.getContext('2d').fillStyle = `rgb(${barHeight + 100},50,50)`;
        canvas.getContext('2d').fillRect(x, canvasHeight - barHeight / 2, barWidth, barHeight);

        x += barWidth + 1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    source.connect(analyser);
    analyser.connect(audioContext.destination);
    audio.play();

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      source.disconnect();
      analyser.disconnect();
      audio.pause();
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src="./dhag.mp3" />
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
    </>
  );
};

export default PitchAnimation;