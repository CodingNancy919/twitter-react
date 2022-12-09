import axios from "axios"

//对接口请求前的参数做转换，主要是添加统一的domain
const domain = 'http://localhost:3333'
axios.interceptors.request.use((config) => ({
   ...config,
   url: domain+ config.url,
}))

//对返回的结果做拦截，主要是数据转换和错误处理
axios.interceptors.response.use((response) => {
   console.log(response.data);
   return response.data;
}, (err) => Promise.reject(err))

export const get = (url) => axios.get(url);

export const post = (url, params) => axios.post(url, params);

export const put = (url, params) => axios.put(url, params);

export const del = (url, params) => axios.del(url, params);

export const patch = (url, params) => axios.patch(url, params);