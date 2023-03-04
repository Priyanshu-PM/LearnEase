import axios from 'axios';

const instance = axios.create({
    baseURL : process.env.STUDYAI_API
})


export default instance;