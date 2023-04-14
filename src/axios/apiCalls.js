import apiClient from "./axios";

const formatResponse = (data) => {
    return JSON.parse(data);
  };

export const getAllQuizById=(quizid)=>async () => {
    const { data } = await apiClient.get(`/quiz/${quizid}`);
    return formatResponse(data.data);
};
