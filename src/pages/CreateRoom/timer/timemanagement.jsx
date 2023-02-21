import React from "react";
import {TaskTimer} from 'tasktimer';

import '../SpeechToText';

import '../SpeechToText';

const script = "";

const timemanagement = () => {


    function frameRecorder() {

        const timer = new TaskTimer(1000);

        timer.add([
            {
                id: 'frame-record',       // unique ID of the task
                tickInterval: 5,    // run every 5 ticks (5 x interval = 5000 ms)
                totalRuns: 2,      // run 10 times only. (set to 0 for unlimited times)
                callback(task) {
                    // code to be executed on each run
                    console.log(`${task.id} task has run ${task.currentRuns} times.`);


                    
                }
            }
        ]);
        
        // Start the timer
        timer.start();

        timer.on('tick', () => {
            console.log('tick count: ' + timer.tickCount);
            console.log('elapsed time: ' + timer.time.elapsed + ' ms.');
            // stop timer (and all tasks) after 1 hour
            if (timer.tickCount >= 16) timer.stop();
        });
         
    }


    return(
        <div>Time
        {frameRecorder}
        </div>
    )
}

export default timemanagement;