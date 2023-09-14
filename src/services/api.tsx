import axios, { InternalAxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'https://api-auto-escola.vercel.app/',
})

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const userData = localStorage.getItem('autoEscola:userData1.0')
  const confirmEmail = localStorage.getItem('autoEscola:UserConfirmEmail')
  const token = userData && JSON.parse(userData).token
  const tokenUpdatePassword = confirmEmail && JSON.parse(confirmEmail).token

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  if (tokenUpdatePassword) {
    config.headers.Authorization = `Bearer ${tokenUpdatePassword}`
  }

  return config
})

export default api
