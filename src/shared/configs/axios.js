import axios from 'axios'
import { API_ROOT } from '../utils/constants'

const axiosClient = axios.create({
  baseURL: API_ROOT,
  headers: {
    'Content-Type': 'application/json'
  }
})

// ✅ Response Interceptor (Global Error Handling)
axiosClient.interceptors.response.use(
  (response) => response.data, // Automatically return only the data
  (error) => {
    let errorMessage = 'An unexpected error occurred'
    if (error.response) {
      switch (error.response.status) {
      case 400:
        errorMessage = 'Bad Request. Please check your input.'
        break
      case 401:
        errorMessage = 'Unauthorized. Please log in.'
        break
      case 403:
        errorMessage = 'Forbidden. You do not have permission.'
        break
      case 404:
        errorMessage = 'Resource not found.'
        break
      case 500:
        errorMessage = 'Server error. Please try again later.'
        break
      default:
        errorMessage = error.response.data?.message || errorMessage
      }
    }

    return Promise.reject(errorMessage) // Return only the error message
  }
)

export default axiosClient
