import axios from 'axios'

export default function getRequest(config) {
  const instance = axios.create({
    baseURL: config.baseurl,
    timeout: 5000
  });

  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 将promise函数返回
  return instance(config)
}
