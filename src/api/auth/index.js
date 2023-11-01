import { axiosInstance } from 'src/api';

const signIn = (email, password) => {
  return axiosInstance.post('/login', {
    email,
    password
  })
}

const signUp = data => {
  return axiosInstance.post('/register', data)
}

export {
  signIn,
  signUp,
}
