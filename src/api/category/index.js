import axios from 'src/api/index'

const getAll = () => {
  return axios.get('/categories')
}

const getById = id => {
  return axios.get(`/categories/${id}`)
}

const create = data => {
  return axios.post('/categories', data)
}

const update = (id, data) => {
  return axios.patch(`/categories/${id}`, data)
}

export {
  getAll,
  getById,
  create,
  update
}
