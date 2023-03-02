import './App.css';


import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import CreateRoom from './pages/CreateRoom/CreateRoom.jsx';
import Quiz from './pages/Quiz/Quiz.jsx';
import SessionAnalytics from './pages/Session/SessionAnalytics.jsx';
import Attendance from './pages/Attendance/Attendance';
import RoomAnalytics from './pages/CreateRoom/RoomAnalytics';
import QuizDetail from './pages/Quiz/QuizDetail';
import Welcome from './pages/Landingpage/WebView/Welcome';
import SignupPage from './pages/Landingpage/Forms/pages/Signup';
import LoginPage from './pages/Landingpage/Forms/pages/Login';

import About from './pages/Landingpage/About';

function App() {
  return (
      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/teacher/home" element={<Dashboard />} />
          <Route path="/teacher/create-room" element={<CreateRoom />} />
          <Route path="/teacher/quiz" element={<Quiz />} />
          <Route path="/teacher/quiz/quiz-details/:quizid" element={<QuizDetail/>}/>
          <Route path="/teacher/session" element={<SessionAnalytics />} />
          <Route path="/teacher/attendance" element={<Attendance />} />
          <Route path="/teacher/room-analytics" element={<RoomAnalytics />} />
          
          
      </Routes>
  );
}

export default App;