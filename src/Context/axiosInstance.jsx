import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // baseURL: "http://127.0.0.1:8000/",
  // headers: {
  //   "Content-Type": "multipart/form-data",
  // },
});

// Request interceptor to add the token to headers
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
