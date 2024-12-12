import axios from 'axios';

const BASE_URL = process.env.BASE_URL || 'https://ads.planetmedia.app';
const API_KEY = "b2f16a0e-655a-4044-a5a8-973b9b9c30d7";

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
