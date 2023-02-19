import React, {useState} from 'react'
import RoomAnalytics from './RoomAnalytics';
import { useNavigate } from "react-router-dom";
// import { Navigation } from 'react-router-dom';
// import Navigationindex from '../../Navigationindex';


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
  )
}

export default CreateRoom;