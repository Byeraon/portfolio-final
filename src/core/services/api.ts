import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";

export const initAxiosInstance = () => {
  axios.defaults.baseURL = "https://byeraon-backend.herokuapp.com/api/";
  axios.interceptors.request.use(async (config) => {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `bearer 36193fe80c75f1b15275477395dba246a98ede0e6d76414a404d554b065eddb4cfa581ab9f173874bf5c566db459fdf9e2a987509665cdd5ed580a22ec0dd89c2a153e51371986a778870a5aea159e4981347d545259cd67a0435a03b04f7bf8b44a95c87e9249d59dd8b0dc9b71502edc97cd327dc34666bc18177341d47348`;
    return config;
  });
};

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = {
      baseUrl: "https://byeraon-backend.herokuapp.com/api/",
    }
  ): BaseQueryFn<
    {
      url: string;
      method: Method;
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axios;
