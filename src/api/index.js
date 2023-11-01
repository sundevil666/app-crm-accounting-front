import axios from 'axios'
import { getItem } from '/src/helpers/persistanceStorage'

axios.defaults.baseURL = 'http://localhost:3123/api'
//
// axios.interceptors.request.use(config => {
//   config.headers['Content-Type'] = 'application/json'
//   config.headers['Accept'] = 'application/json'
//   // config.headers['Content-Type'] = 'multipart/form-data'
//
//   const token = getItem('access_token')
//   config.headers.Authorization = token ? `Bearer ${token}` : ''
//   return config
//
// })

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

const fileUploadInstance = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

axiosInstance.interceptors.request.use(config => {
  const token = getItem('access_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

fileUploadInstance.interceptors.request.use(config => {
  const token = getItem('access_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export {
  axiosInstance,
  fileUploadInstance
}
// export default axios
