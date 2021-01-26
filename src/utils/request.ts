/**
 * 拦截器
 */
import axios from 'axios'

const instance = axios.create({
  baseURL: ''
})

// 请求拦截
instance.interceptors.request.use((config) => {
  // 请求之前做什么
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
})

// 响应拦截
instance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error);
})
module.exports = instance
