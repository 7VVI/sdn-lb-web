import axios from 'axios'
import BaseResponse = FasLB.BaseResponse;
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
// 自定义 axios 实例
const request = axios.create({
    baseURL:
        process.env.NODE_ENV === "production"
            ? "https://xxx/api"
            : "http://localhost:5001/api",
});

request.defaults.withCredentials = true;

// 添加请求拦截器
request.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
request.interceptors.response.use(
    function (response: AxiosResponse):Promise<AxiosResponse<BaseResponse<any>>> {
      console.log("拦截器",response.data);
      // 对响应数据做点什么
      return response.data;
    },
    function (error:any) {
      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );



export default request;
