import axios, { AxiosError, AxiosResponse } from "axios";

//buat instance untuk axiosnya
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true
});

//intercptor error'
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.log("api erros", error.response?.status || error.message);
    return Promise.reject(error);
  }
);

export default api;
