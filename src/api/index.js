import axios from 'axios'
import { getItem } from '/src/helpers/persistanceStorage'

axios.defaults.baseURL = 'http://localhost:3123/api/'

axios.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/json'
  config.headers['Content-Type'] = 'multipart/form-data'

  const token = getItem('access_token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config

})

export default axios
