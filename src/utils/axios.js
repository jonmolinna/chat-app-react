import axios from "axios";
// const BASE_URL = 'http://localhost:9000/api/';
const BASE_URL = 'https://chat-app-nodejs-rgvg.onrender.com/api';

export default axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
})