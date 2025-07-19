import axios from 'axios'

export const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(
  config => {

    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error?.response?.status === 401) {
      window.location.href = '/'
      localStorage.removeItem('token')
    }
    return Promise.reject(error)
  }
)
