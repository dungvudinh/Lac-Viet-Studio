import axios from 'axios'
import { API_ROOT } from '../utils/constants'
import { refreshToken } from '~/shared/apis/userAPI'
const axiosClient = axios.create({
  baseURL: API_ROOT,
  withCredentials:true, 
  headers: {
    'Content-Type': 'application/json'
  }
})

// ✅ Response Interceptor (Global Error Handling)
axiosClient.interceptors.response.use(
  (config)=>{
    // tu dong gui token khi can
    const token = localStorage.getItem('accessToken')
    if(token)
      config.headers.Authorization = `Bearer ${token}`
    return config;
  },
  // (response) => response.data, // Automatically return only the data
  async (error) => {
    const originalRequest = error.config
    if(error.response?.status === 401 && !originalRequest._retry)
    {
      originalRequest._retry = true 
      await refreshToken()
      return axiosClient(originalRequest)
    }
    return Promise.reject(error) // Return only the error message
  }
)


export default axiosClient
