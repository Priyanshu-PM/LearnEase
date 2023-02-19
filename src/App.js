import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import About from './pages/About/About.jsx';
import CreateRoom from './pages/CreateRoom/CreateRoom.jsx';
import Quiz from './pages/Quiz/Quiz.jsx';
import SessionAnalytics from './pages/Session/SessionAnalytics.jsx';
import Attendance from './pages/Attendance/Attendance';
import RoomAnalytics from './pages/CreateRoom/RoomAnalytics';

function App() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/createroom" element={<CreateRoom/>}/>
        <Route path="/session" element={<SessionAnalytics/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/roomanalytics" element={<RoomAnalytics/>}/>
      </Routes>
    </Sidebar>
  );
}

export default App;