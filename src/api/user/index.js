import { axiosInstance, fileUploadInstance } from 'src/api';

const getAll = () => {
  return axiosInstance.get('/users')
}

const getMe = id => {
  return axiosInstance.get(`/users/me`)
}

const create = data => {
  return axiosInstance.post('/users', data)
}

const update = (id, data) => {
  return axiosInstance.patch(`/users/${id}`, data)
}

const setAvatar = data => {
  return fileUploadInstance.post('users/upload', data)
}

export {
  getAll,
  getMe,
  create,
  update,
  setAvatar,
}
