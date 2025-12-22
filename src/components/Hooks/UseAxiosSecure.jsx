import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
 
});

const UseAxiosSecure = () => {
  const {  logOut ,user} = UseAuth();

  const navigate = useNavigate();

  useEffect(() => {
    // Request interceptor: JWT attach
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        const token = user?.accessToken;
        if (token) {
          config.headers.Authorization = `Bearer ${user?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor: 401/403 handle
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (res) => res,
      async (err) => {
        if (err?.response?.status === 401 || err?.response?.status === 403) {
          await  logOut();
          localStorage.removeItem("access-token");
          navigate("/auth/login");
        }
        return Promise.reject(err);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [logOut, navigate,user]);

  return axiosSecure;
};

export default UseAxiosSecure;
