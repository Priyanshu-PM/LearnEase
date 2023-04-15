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
  
  const [responses, setResponses] = useState([]);
  const [updatedResponses, setUpdatedResponses] = useState([]);


    useEffect(() => {

    // ithe pan responseKey takaychi aahe

      axios
      .get(responseDemo, {})
      .then((res) => {
        const data = res.data;
        console.log(data.success);

        setResponses(JSON.parse(data.data));

        console.log(responses);
        

        let resStudents = [];
        responses.forEach((response) => {


          console.log("for each loop k andar hu ");
          resStudents.push({
            student: response.student,
            answers: response.answers
          });
        });

        
      console.log(resStudents.students);
      setUpdatedResponses(resStudents);

      
      }).catch((err) => {
        console.log(err);
      });
    }, [responseDemo]);

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
