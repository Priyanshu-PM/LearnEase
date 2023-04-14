import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";
import MultipleChoiceQuestion from "./MultipleChoiceQuestions";
import { useQuery } from "@tanstack/react-query";
import { getAllQuizById } from "../../../axios/apiCalls";

const Quiz = () => {
  

  let {quizid} = useParams();
  const navigate = useNavigate();

  console.log(quizid)
  const { isLoading, error, data } = useQuery({
    queryKey:["quiz", quizid],
    queryFn:getAllQuizById(quizid)
  });
  console.log("getAllQuizByid ", data)
  

  return (
    <div>
      tyring something new
    </div>
  );
};

export default Quiz;
