import './App.css';


import React from 'react';
import { Routes, Route, useParams} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import About from './pages/About/About.jsx';
import CreateRoom from './pages/CreateRoom/CreateRoom.jsx';
import Quiz from './pages/Quiz/Quiz.jsx';
import SessionAnalytics from './pages/Session/SessionAnalytics.jsx';
import Attendance from './pages/Attendance/Attendance';
import RoomAnalytics from './pages/CreateRoom/RoomAnalytics';

function App() {
  return (
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/create-room" element={<CreateRoom />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/session" element={<SessionAnalytics />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/room-analytics/:sessionId/:sessionName" element={<RoomAnalytics />} />
          <Route path="/about" element={<About/>} />
      </Routes>
  );
}

export default App;