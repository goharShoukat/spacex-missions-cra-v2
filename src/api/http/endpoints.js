import axios from 'axios'
import { axiosInstance } from './'

const history = '/history'
const launches = '/launches'
export const getAllHistory = () => 
    axiosInstance.get(history)

export const getAllLaunches = () => 
    axiosInstance.get(launches)