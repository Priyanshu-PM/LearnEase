import React from 'react'
import SpeechToText from './SpeechToText';
import TestFile from './TestFile';
import RecordSession from './RecordSession';

import Testing from './Testing';


const RoomAnalytics = ({sessionID, sessionName}) => {


  return (

    <div className='bg-[#F3F8FF] min-h-screen'>

      <div className='border-solid border-2 border-black-500 mt-5'>
        <div className='flex flex-row justify-start pt-5 gap-x-4 ml-10'>
          <h4>Session ID : {sessionID}</h4>
          <h4>Session name : {sessionName}</h4>
        </div>
        <RecordSession/>
    </div>

  </div>
   

  )
}



export default RoomAnalytics;