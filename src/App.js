import './App.css';


import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Teacher/Dashboard/Dashboard';
import CreateRoom from './pages/Teacher/CreateRoom/CreateRoom.jsx';

import Quiz from './pages/Teacher/Quiz/Quiz.jsx';
import SessionAnalytics from './pages/Teacher/Session/SessionAnalytics.jsx';
import QuizDetail from './pages/Teacher/Quiz/QuizDetail';
import Welcome from './pages/Landingpage/WebView/Welcome';

import SignupPage from './pages/Landingpage/Forms/pages/Signup';
import LoginPage from './pages/Landingpage/Forms/pages/Login';
import LoginStudent from './pages/Landingpage/Forms/pages/LoginStudent';
import RegisterStudent from './pages/Landingpage/Forms/pages/RegisterStudent';

import TestFile from './pages/Teacher/CreateRoom/TestFile';
import SelectProfile from './Components/SelectProfile';

import About from './pages/Landingpage/About';
import Home from './pages/Student/pages/Home';
import StdQuiz from './pages/Student/pages/StdQuiz';
import DownloadExt from './pages/Student/pages/DownloadExt';
import Room from './pages/Student/pages/Room';
import StudentRoutes from './pages/Student/StudentRoutes';
import TeacherRoute from './pages/Teacher/TeacherRoute';

function App() {
  return (
      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/teacher/login" element={<LoginPage/>}/>
          <Route path="/teacher/signup" element={<SignupPage/>} />
          <Route path="/student/login" element={<LoginStudent/>}/>
          <Route path="/student/signup" element={<RegisterStudent/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/select" element={<SelectProfile/>}/>


          
          {/* _________________Teacher Routes____________________________ */}
          <Route path="/teacher" element = {<TeacherRoute/>}>
            <Route path="home" element={<Dashboard />} />
            <Route path="create-room" element={<CreateRoom />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="quiz/quiz-details/:quizid" element={<QuizDetail/>}/>
            <Route path="session" element={<SessionAnalytics />} />
            <Route path="session/id" element={<TestFile />} />
            <Route path="session/:id" element={<TestFile/>}/>
          </Route>


          {/* _________________Students Routes____________________________ */}
          <Route path = "/student" element={<StudentRoutes/>}>
            <Route path='home' element={<Home/>} />
            <Route path='download' element={<DownloadExt/>} />
            <Route path='room/:roomId' element={<Room/>} />
            <Route path='quiz/:quizId' element={<StdQuiz/>} />
          </Route>
      </Routes>
  );
}

export default App;