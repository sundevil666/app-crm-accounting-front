import { axiosInstance } from 'src/api';

const getAll = (currentPage, limit) => {
  return axiosInstance.get(`/records?page=${currentPage}&limit=${limit}`)
}

const getById = id => {
  return axiosInstance.get(`/records/${id}`)
}

const create = data => {
  return axiosInstance.post('/records', data)
}

const update = (id, data) => {
  return axiosInstance.patch(`/records/${id}`, data)
}

export {
  getAll,
  getById,
  create,
  update
}
