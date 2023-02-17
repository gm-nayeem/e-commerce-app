import axios from 'axios';

const BASE_URL = "http://localhost:4000/api";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).admin).currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: JSON.parse(localStorage.getItem("persist:root")).admin && {token: `Bearer ${
        JSON.parse(JSON.parse(localStorage.getItem("persist:root")).admin).currentUser?.accessToken
    }`}
});