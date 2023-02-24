import axios from "axios";

export const fetchApi = () => {
  const defaultOptions = {
    baseURL: "http://localhost:8000/api",
    // baseURL: "https://api.gofiber.vn/api",

    method: "get" || "delete" || "post" || "patch",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(function (config: any) {
    // const token = sessionStorage.getItem('access-token');
    // config.headers['x-access-token'] = token ? `${token}` : '';
    return config;
  });
  return instance;
};
