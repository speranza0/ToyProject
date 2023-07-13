import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 4000,
  withCredentials: true,
});

export default instance;
