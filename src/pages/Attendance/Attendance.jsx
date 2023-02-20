import React from 'react'
import Sidebar from '../../Components/Sidebar'
const Attendance = () => {
  return (
    <div className='bg-[#F3F8FF] min-h-screen'>

      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
        <Sidebar/>
        </div>

        <div className="col-start-1 sm:col-start-3 col-end-12">

          <h1>helloekek</h1>
        </div>




      </div>

    </div>
  )
}

export default Attendance;