import axios from 'src/api/index'

const getAll = () => {
  return axios.get('/users')
}

const getMe = id => {
  return axios.get(`/users/me`)
}

const create = data => {
  return axios.post('/users', data)
}

const update = (id, data) => {
  return axios.patch(`/users/${id}`, data)
}

const setAvatar = data => {
  return axios.post('users/upload', data)
}

export {
  getAll,
  getMe,
  create,
  update,
  setAvatar,
}
