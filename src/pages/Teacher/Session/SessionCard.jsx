import { isError, useQuery } from "@tanstack/react-query";
import React, { useCallback, useEffect, useState } from "react";
import { getSessionById } from "../../../axios/apiCalls";
import { showErrorToast } from "../../../helpers/toasters";
import { ToastContainer } from "react-toastify";
import axios from "../../../axios/axios";
import Moment from "react-moment";

const SessionCard = ({ session, tokem }) => {
  // console.log("sessioncard", session);
  // console.log("token", tokem);

  const { isLoading, error, data:sessionDetails } = useQuery({
      queryKey:["room", session._id],
      queryFn: getSessionById(session._id, tokem)
  })

  // console.log("data from getAllSessions", sessionDetails)

  if(isLoading)return <div>Loading...</div>
  if(error)return <div>{showErrorToast(error.message)}<ToastContainer/></div>

  return (
    <>
    {/* <ToastContainer/> */}
      <div className="flex justify-between mb-4 py-2">
        <div className="text-black font-bold text-xl">{session.title}</div>
        <div className="text-black text-sm pl-1">
        <Moment interval={0} format='MMMM Do YYYY'>{sessionDetails.createdAt}</Moment>
        </div>
      </div>
      <p className="text-black">
        Created by: {sessionDetails?.creator.firstName}
    </p>
      <div className="text-black">Class: {sessionDetails?.classroom}</div>{" "}
    </>
  );
};

export default SessionCard;
