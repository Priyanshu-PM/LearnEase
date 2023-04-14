import React, {useEffect, useState} from "react";


import { useParams } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const QuizDetail = () => {
  
  const navigate = useNavigate();

  const { quizID } = useParams();

  const apiKey = process.env.REACT_APP_STUDYAI_API;
  const responseKey = `${apiKey}/quiz/${quizID}/response`;
  const responseDemo = `${apiKey}/quiz/63fa0605fdc6720b99be9c69/response`;



    const saveData = () => {

      navigate("/teacher/home");
    }

  return (
    <div>
      responses
    </div>
  );
};

export default QuizDetail;
