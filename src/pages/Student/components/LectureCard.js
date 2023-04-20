import { isError, useQuery } from "@tanstack/react-query";

import React, {useCallback, useEffect, useState} from "react";
import { getSessionById } from "../../../axios/apiCalls";
import { showErrorToast } from "../../../helpers/toasters";
import { ToastContainer } from "react-toastify";
import axios from "../../../axios/axios";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

import Card from "."; 

const LectureCard = ({lecture,image}) => {

  
  const handleSessionClick = (sessionId) => {
    navigate(`/student/room/${sessionId}`);
  };

  const navigate = useNavigate();

    // const { isLoading, error, data:sessionDetails} = useQuery({
    //     queryKey: ["room", lecture._id],
    //     queryFn: getSessionById(lecture._id, tokem)

    // })

    const isLoading = false;

    // if(isLoading)return <div>Loading...</div>
    // if(error) return <div>{showErrorToast(error.message)}<ToastContainer/></div>

  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white `}
    >{
        isLoading ? (<div>Loading...</div>): (

            <div className="h-full w-full ">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:justify-between lg:flex-row lg:justify-between xl:flex-row xl:justify-between 2xl:flex-row 2xl:justify-between 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
          <div className="my-2 w-full h-full flex flex-row  justify-between space-x-24">
            
            <p className=" text-sm font-medium text-gray-600 dark:text-white py-1 ">
              {" "}
              
              <Moment interval={0} format='MMMM Do YYYY'>{lecture.createdAt}</Moment>
              {" "}
            </p>
          </div> 
            <div className=" flex h-full w-full flex-row justify-between xl:justify-between">
              <p className="text-xl font-bold text-navy-700 dark:text-white">
                {" "}
                {lecture.title}{" "}
              </p>
            </div>
            <div className="flex flex-col justify-between">
            
             
            <p className="mt-1 text-md text-gray-600 ">
              Conducted by {lecture.creator.firstName}{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center md:flex-col md:items-center lg:flex-row lg:justify-center xl:flex-col 2xl:items-center 3xl:flex-row 3xl:items-center 3xl:justify-center">
          <button
            onClick={()=> {handleSessionClick(lecture._id)}}
            className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white bg-[#3912E6] transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
          >
            View Details
          </button>
        </div>
      </div>
        )
    }
      
    </Card>
  );
};

export default LectureCard;
