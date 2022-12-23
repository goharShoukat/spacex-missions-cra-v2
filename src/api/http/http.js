import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.REACT_SPACEX_API_ENV_VAR,
    responseType: 'json'
})

axiosInstance.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            ...config.headers
        }
    }
})

axiosInstance.interceptors.response.use(
    response => {
        return response.data
    },

    error => {
        return Promise.reject(error)
    }
)

export { axiosInstance }