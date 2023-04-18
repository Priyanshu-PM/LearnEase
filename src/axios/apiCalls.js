import apiClient from "./axios";

const formatResponse = (data) => {
  return JSON.parse(data);
};

// Teachers api calls
export const getAllQuizById=(quizid)=>async () => {
    const { data } = await apiClient.get(`/quiz/${quizid}`);
    return formatResponse(data.data);
};


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

// creating room/session for teacher
export const createRoom = async ({ roomdata, tokem }) => {
  const config = {
    headers: {
      'Authorization': `${tokem}`,
    }
  };
  return await apiClient.post(`/teacher/room`, roomdata, config);
  // const response = await apiClient.post(`/teacher/room`, roomdata, config);
  // const newdata = response.data
  // const newData2 = newdata.data
  // return newData2;
};

export const addQuestionToQuiz=async ({quizid, token, newQuizData})=>{
  const config = {
    headers: {
      'Authorization': `${token}`
    }
  }
  const res = await apiClient.patch(`/quiz/${quizid}`, newQuizData, config)
  return res;   
}


// get classroom of each college for teacher at the room creation time
export const getClasses=(clgid)=>async() => {
    const { data } = await apiClient.get(`/common/get-classrooms-clg?clg_id=${clgid}`);
    return data;
};


