import React, {useState} from 'react'
import RoomAnalytics from './RoomAnalytics';
import { useNavigate } from "react-router-dom";
// import { Navigation } from 'react-router-dom';
// import Navigationindex from '../../Navigationindex';
import Sidebar from '../../Components/Sidebar'

const CreateRoom = ({Navigation}) => {
  const  navigate = useNavigate()
  
  const [screen, setScreen] = useState('createroom');
  const [RoomID, setRoomID] = useState('');
  const [showInputValue, setShowInputValue] = useState(false);

  function handleChange(event) {
    setRoomID(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowInputValue(true);
  }

  function navigateUserAnalytics() {

    setScreen("roomanalytics");
    navigate("/roomanalytics");

  }

  return (

    <div className='bg-[#F3F8FF] min-h-screen'>

    <div className="grid grid-cols-11">
      <div className="hidden sm:block col-start-1 col-end-3 bg-white text-[#9696a6] min-h-screen fixed w-[18%]">
      <Sidebar/>
      </div>

      <div className="col-start-1 sm:col-start-3 col-end-12">

      <div className="pages_createroom">
      <div className="createroom_container">

        <form onSubmit={handleSubmit}>
        <label>
          Enter the room id:
          <input type="text" value={RoomID} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
        {showInputValue && <p>Input Value: {RoomID}</p>}
      </form>
      </div>
      <button
        title="Go to Details"
            onClick={navigateUserAnalytics}
      >Go to analytics</button>

      {screen === "roomanalytics" && <RoomAnalytics roomID={RoomID}/>}
    </div>
      </div>




    </div>

  </div>

  )
}

export default CreateRoom;