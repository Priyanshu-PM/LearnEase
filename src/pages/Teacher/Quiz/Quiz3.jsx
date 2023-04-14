import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";
import MultipleChoiceQuestion from "./MultipleChoiceQuestions";
import { useQuery } from "@tanstack/react-query";
import { getAllQuizById } from "../../../axios/apiCalls";
import { Button, Box, Modal, Typography, TextField } from "@mui/material";


const Quiz = () => {
  

  let {quizid} = useParams();
  const navigate = useNavigate();

  console.log(quizid)
  const { isLoading, error, data } = useQuery({
    queryKey:["quiz", quizid],
    queryFn:getAllQuizById(quizid)
  });
  console.log("getAllQuizByid ", data)

  // start of modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };
  // end of modal
  
  if(isLoading)return <div>Loading...</div>

  return (
      <div className="w-full px-auto ">
          <p>Session title: {data?.title}</p>
          
          {data.questions.map((question, index)=>
            <MultipleChoiceQuestion
                          key={index}
                          questionData={question}
            />
          )}
      </div>
      )
};


export default Quiz;
