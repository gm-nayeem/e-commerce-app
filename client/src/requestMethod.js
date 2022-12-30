import axios from 'axios';

const BASE_URL = "http://localhost:4000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWYyZmQ1NTQzNGNkZDk2Mzc4YzE3NCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzI0MjU0NTIsImV4cCI6MTY3MjY4NDY1Mn0.M-_NzNcnGeBKwuxlf-4Mqtgqzb_8tBpiJ4KAzV6i1nE";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});