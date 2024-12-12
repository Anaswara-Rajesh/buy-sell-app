import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://ads.planetmedia.app';
const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
