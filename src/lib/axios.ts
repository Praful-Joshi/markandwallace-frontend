import axios from "axios";
import { ENV } from "@/app/config/app";

export const api = axios.create({
  baseURL: ENV.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  // Attach auth token here when you add auth
  // const token = useAuthStore.getState().token
  // if (token) config.headers.Authorization = `Bearer ${token}`
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors here (401 redirect, toast, etc.)
    return Promise.reject(error);
  },
);
