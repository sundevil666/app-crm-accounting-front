import axios from 'src/api/index'

const signIn = (email, password) => {
  return axios.post('/login', {
    email,
    password
  })
}

const signUp = data => {
  return axios.post('/register', data)
}

export {
  signIn,
  signUp,
}
