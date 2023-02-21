import React from 'react'
import SpeechToText from './SpeechToText';
import { TaskTimer } from 'tasktimer';
import TestFile from './TestFile';


const RoomAnalytics = ({sessionID, sessionName}) => {


  function timemanagement() {
    const { TaskTimer } = require("tasktimer");
  
    // Timer with 1000ms (1 second) base interval resolution.
    const timer = new TaskTimer(1000);
    // interval can be updated anytime by setting the `timer.interval` property.
  
    // Add multiple tasks (at once) based on tick intervals.
    timer.add([
      {
        id: "task-1", // unique ID of the task
        tickInterval: 5, // run every 5 ticks (5 x interval = 5000 ms)
        totalRuns: 10, // run 10 times only. (set to 0 for unlimited times)
        callback(task) {
          // code to be executed on each run
          console.log(`${task.id} task has run ${task.currentRuns} times.`);
        },
      },
      {
        id: "task-2", // unique ID of the task
        tickDelay: 1, // 1 tick delay before first run
        tickInterval: 10, // run every 10 ticks (10 x interval = 10000 ms)
        totalRuns: 2, // run 2 times only. (set to 0 for unlimited times)
        callback(task) {
          // code to be executed on each run
          console.log(`${task.id} task has run ${task.currentRuns} times.`);
        },
      },
    ]);
  
    // You can also execute some code on each tick... (every 1000 ms)
    timer.on("tick", () => {
      console.log("tick count: " + timer.tickCount);
      console.log("elapsed time: " + timer.time.elapsed + " ms.");
      // stop timer (and all tasks) after 1 hour
      if (timer.tickCount >= 160) timer.stop();
    });
  
    // Start the timer
    timer.start();
  
    return <div>timemanagement</div>;
  };

  return (

    <div className='bg-[#F3F8FF] min-h-screen'>

      <div className='border-solid border-2 border-black-500'>
        <h3 className=''>Welcome to the today's Session on {sessionName}</h3>
        <div className='flex flex-row justify-start pt-5 pl-5 gap-x-4'>
          <h4>Session ID : {sessionID}</h4>
          <h4>Session name : {sessionName}</h4>
        </div>

        <TestFile/>
    </div>

  </div>
   

  )
}



export default RoomAnalytics;