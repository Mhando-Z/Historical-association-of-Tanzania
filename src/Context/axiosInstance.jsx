import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Request interceptor to add the token to headers
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  // If data is present, convert it to FormData
  // if (config.data) {
  //   const formData = new FormData();
  //   for (const key in config.data) {
  //     if (config.data.hasOwnProperty(key)) {
  //       formData.append(key, config.data[key]);
  //     }
  //   }
  //   config.data = formData;
  // }

  return config;
});

export default axiosInstance;
