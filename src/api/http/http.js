import axios from 'axios'

const axiosInstance = axios.create({
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
        return response
    },

    error => {
        return Promise.reject(error)
    }
)

export { axiosInstance }