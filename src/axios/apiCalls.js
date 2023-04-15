import apiClient from "./axios";

const formatResponse = (data) => {
    return JSON.parse(data);
  };

// Teachers api calls
export const getAllQuizById=(quizid)=>async () => {
    const { data } = await apiClient.get(`/quiz/${quizid}`);
    return formatResponse(data.data);
};

export const addQuestionToQuiz=(token, newQuiz)=>async()=>{
  const config = {
    headers: {
      'Authorization': `${token}`
    }
  }
  const {data} = apiClient.patch(getAllQuizById, newQuiz, config)
  return formatResponse(data)
}


export const getSessionById=(sessionid, token)=> async()=>{
  const config = {
    headers: {
      'Authorization': `${token}`
    }
  }
  const response = await apiClient.get(`/room/${sessionid}`, config)
  const newData = response.data
  const newData2 = newData.data
  const parsedData = formatResponse(newData2)
  return parsedData
}

// for session.jsx
export const getSessionSummary=(sessionId)=>async()=>{
  const response = await apiClient.get(`/room/${sessionId}/topics`)
  const newData = response.data
  return newData.data
}

// for QuizResponse.jsx
export const getQuizResponses=(quizid)=>async()=>{
  const response = await apiClient.get(`/quiz/${quizid}/response`)
  const newdata = response.data
  const newdata2 = newdata.data
  return formatResponse(newdata2)
}



// *********************Student api side******************************************//
export const getAllRoomsForStudent=(token, studData)=>async()=>{
    const config = {
        headers: {
          Authorization: `${token}`,
        }
      };
      console.log("studedata", studData)
    const response = await apiClient.get(`/student/rooms`,config, studData)
    return response
}