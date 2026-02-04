import axios from "axios";

// Default config options
const defaultOptions = {
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
};

// Create instance
export const api = axios.create(defaultOptions);

// Set the AUTH token for any request
api.interceptors.request.use(
    (config) => {
        // You can get the token from local storage or cookies logic here
        const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle global error responses like 401 Unauthorized
        if (error.response?.status === 401) {
            // redirect to login or clear storage
            // if (typeof window !== "undefined") window.location.href = "/auth/login"; 
        }
        return Promise.reject(error);
    }
);
