import apiClient from "./axios";

export const getAllRoomsForStudent = (newData, tokem) => async () => {
  const config = { headers: { 'Authorization': `${tokem}` } };
  console.log("studedata", newData);
  console.log("studtoken", tokem);
  return await apiClient.get(`/student/rooms`, newData, config);
};


// export const getSessionById=(sessionid, token)=> async()=>{
//     const config = {
//       headers: {
//         'Authorization': `${token}`
//       }
//     }
//     const response = await apiClient.get(`/room/${sessionid}`, config)
//     const newData = response.data
//     const newData2 = newData.data
//     // const parsedData = formatResponse(newData2)
//     // return parsedData
//   }
