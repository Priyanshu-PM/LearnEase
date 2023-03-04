import axios from 'axios';

const instance = axios.create({
    baseURL : "https://online-learning-backend.vercel.app/api/v1",
})


export default instance;