import axios,{ AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const app: AxiosInstance  = axios.create({ 
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }});

  app.interceptors.request.use(
    (config: any) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );
  
 