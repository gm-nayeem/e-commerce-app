import axios from 'axios';

const BASE_URL = "http://localhost:4000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjE1ZGQ2M2ZhNzhmMWVlNjU2ODU2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzIwNDA3MiwiZXhwIjoxNjczNDYzMjcyfQ.xkjTnc-dU9e1K6BpiNnx8ahg46HY9uzW_wYpjY_cjF0";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});