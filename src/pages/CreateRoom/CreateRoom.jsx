import React, { useState, useParams } from "react";
import RoomAnalytics from "./RoomAnalytics";
import { useNavigate } from "react-router-dom";

// import { Navigation } from 'react-router-dom';
// import Navigationindex from '../../Navigationindex';
import Sidebar from "../../Components/Sidebar";
import "./Create-room.css";

const CreateRoom = ({ Navigation }) => {
  const navigate = useNavigate();

  const [screen, setScreen] = useState("createroom");

  const [RoomID, setRoomID] = useState("");
  const [sessionName, setSessionName] = useState("");

  const [showInputValue, setShowInputValue] = useState(false);

  function handleChange(event) {
    setRoomID(event.target.value);
  }

  function handleSessionName(event) {
    setSessionName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowInputValue(true);
  }

  return (
    <div className="bg-[#F3F8FF] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3  text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>

        <div className="col-start-1 sm:col-start-3 col-end-12">
          <div className="pages_createroom">
            <div className="createroom_container">
              <form onSubmit={handleSubmit}>
                <div className="side-by-side bg-gradient-to-r from-cyan-200 to-blue-200">
                  <label>
                    Session ID:
                    <input type="text" value={RoomID} onChange={handleChange} />
                  </label>
                  <label>
                    Session Name:
                    <input
                      type="text"
                      value={sessionName}
                      onChange={handleSessionName}
                    />
                  </label>
                  
                </div>
                <br />
                <button type="submit" className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" >Submit</button>
                {showInputValue && (
                  <RoomAnalytics sessionID={RoomID} sessionName={sessionName}/>
                ) }
                
              </form>
            </div>

            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
