import axios from 'axios';

const BASE_URL = "http://localhost:4000/api";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).loginUser.accessToken;

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmMzMTFjNGRjNjk4MDFlNGMyYTAzYSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzMyNzc3MzcsImV4cCI6MTY3MzUzNjkzN30.qkl-4WRFIQUXfHOdD_PZ19fkmieZP6LEAMI8ra6Y3Hw"
// const userId = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).loginUser.user._id;
// console.log( TOKEN );


export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});