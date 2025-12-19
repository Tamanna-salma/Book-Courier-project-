import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const { user, logoutUserFunc } = UseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        if (user?.accessToken) {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (res) => res,
      (err) => {
        if (err?.response?.status === 401 || err?.response?.status === 403) {
          logoutUserFunc().catch(console.error);
          navigate("/login");
        }
        return Promise.reject(err);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logoutUserFunc, navigate]);

  return axiosSecure;
};

export default UseAxiosSecure;
