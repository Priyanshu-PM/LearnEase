import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_STUDYAI_API,
  headers: {
    "Content-type": "application/json"
  }
});