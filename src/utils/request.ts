import Axios from 'axios'

const baseURL = ''

const axios = Axios.create({
  baseURL,
  timeout: 30 * 1000
})

axios.interceptors.request.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default axios
