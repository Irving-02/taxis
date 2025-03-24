import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Usar la URL definida en .env
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar automáticamente el token a cada petición
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
