import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

// Request interceptor to add the token to headers
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle token expiration

export default axiosInstance;
