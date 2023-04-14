import apiClient from "./axios";

const formatResponse = (data) => {
    return JSON.parse(data);
  };

export const getAllQuizById=(quizid)=>async () => {
    const { data } = await apiClient.get(`/quiz/${quizid}`);
    return formatResponse(data.data);
};


export const getAllSession=(token, student)=>async()=>{
    const config = {
        headers: {
          Authorization: `${token}`,
        }
      };
      const newData ={
        classroom: `${student.classroom}`,
      }
    const { data } = await apiClient.get(`/student/rooms`,newData, config)
    return formatResponse(data)
}