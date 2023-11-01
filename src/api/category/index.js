import { axiosInstance } from 'src/api';

const getAll = () => {
  return axiosInstance.get('/categories')
}

const getById = id => {
  return axiosInstance.get(`/categories/${id}`)
}

const create = data => {
  return axiosInstance.post('/categories', data)
}

const update = (id, data) => {
  return axiosInstance.patch(`/categories/${id}`, data)
}

export {
  getAll,
  getById,
  create,
  update
}
