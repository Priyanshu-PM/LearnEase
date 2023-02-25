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
import QuizDetail from './pages/Quiz/QuizDetail';

function App() {
  return (
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/teacher/home" element={<Dashboard />} />
          <Route path="/teacher/create-room" element={<CreateRoom />} />
          <Route path="/teacher/quiz" element={<Quiz />} />
          <Route path="/teacher/quiz/quiz-details/:quizid" element={<QuizDetail/>}/>
          <Route path="/teacher/session" element={<SessionAnalytics />} />
          <Route path="/teacher/attendance" element={<Attendance />} />
          <Route path="/teacher/room-analytics" element={<RoomAnalytics />} />
          <Route path="/teacher/about" element={<About/>} />
      </Routes>
  );
}

export default App;