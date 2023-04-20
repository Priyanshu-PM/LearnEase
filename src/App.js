import './App.css';


import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Teacher/Dashboard/Dashboard';
import CreateRoom from './pages/Teacher/CreateRoom/CreateRoom.jsx';

import Quiz from './pages/Teacher/Quiz/Quiz.jsx';
import SessionAnalytics from './pages/Teacher/Session/SessionAnalytics.jsx';
import QuizResponses from './pages/Teacher/Quiz/QuizResponses';
import Welcome from './pages/Landingpage/WebView/Welcome';

import SignupPage from './pages/Landingpage/Forms/pages/Signup';
import LoginPage from './pages/Landingpage/Forms/pages/Login';
import LoginStudent from './pages/Landingpage/Forms/pages/LoginStudent';
import RegisterStudent from './pages/Landingpage/Forms/pages/RegisterStudent';

import InitSession from './pages/Teacher/CreateRoom/InitSession';
import SelectProfile from './Components/SelectProfile';

import About from './pages/Landingpage/About';
import Home from './pages/Student/pages/Home';
import StdQuiz from './pages/Student/pages/StdQuiz';
import DownloadExt from './pages/Student/pages/DownloadExt';
import Room from './pages/Student/pages/Room';
import StudentRoutes from './pages/Student/StudentRoutes';
import TeacherRoute from './pages/Teacher/TeacherRoute';
import Session from './pages/Teacher/CreateRoom/Session';
import Summary from './pages/Student/pages/Summary';
import LoadingModal from './helpers/LoadingModal';
import LoadingScreen from './helpers/LoadingScreen';
import TWElement from './pages/TWElement';
import Quizui from './pages/Student/Quizui';

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
          <Route path="/test" element={<TWElement/>}/>

          
          {/* _________________Teacher Routes____________________________ */}
          <Route path="/teacher" element = {<TeacherRoute/>}>
            <Route path="home" element={<Dashboard />} />
            <Route path="create-room" element={<CreateRoom />} />
            <Route path="quiz/:quizid" element={<Quiz />} />
            <Route path="quiz/responses/:quizid" element={<QuizResponses/>}/>
            <Route path="session" element={<SessionAnalytics />} />
            <Route path="current/:id" element={<InitSession/>}/>
            <Route path="lecture/:id" element= {<Session/>}/>
            <Route path="loading/modal" element={<LoadingModal msg={"We are creating meet for you"}/>}/>
            <Route path="loading" element={<LoadingScreen/>}/>
          </Route>

          {/* _________________Students Routes____________________________ */}
          <Route path = "/student" element={<StudentRoutes/>}>
            <Route path='home' element={<Home/>} />
            <Route path='download' element={<DownloadExt/>} />
            <Route path='room/:roomId' element={<Room/>} />
            <Route path='summary/:roomId' element={<Summary/>}/>
            <Route path='quiz/:quizId' element={<StdQuiz/>} />
            <Route path='quiz/ui' element={<Quizui/>}/>
          </Route>
      </Routes>
  );
}

export default App;