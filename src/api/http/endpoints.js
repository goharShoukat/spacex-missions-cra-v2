import { axiosInstance } from './'

const history = '/history'

export const getAllHistory = () => {
    axiosInstance.get(history)
}