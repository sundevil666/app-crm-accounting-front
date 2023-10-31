import axios from 'src/api/index'

const getAll = (currentPage, limit) => {
  return axios.get(`/records?page=${currentPage}&limit=${limit}`)
}

const getById = id => {
  return axios.get(`/records/${id}`)
}

const create = data => {
  return axios.post('/records', data)
}

const update = (id, data) => {
  return axios.patch(`/records/${id}`, data)
}

export {
  getAll,
  getById,
  create,
  update
}
