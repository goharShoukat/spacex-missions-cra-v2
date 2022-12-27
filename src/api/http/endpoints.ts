 import { axiosInstance, LaunchesResponse } from '.'

const history = '/history'
const launches = '/launches'
export const getAllHistory = () => 
    axiosInstance.get(history)

export const getAllLaunches = (): Promise<LaunchesResponse> => 
    axiosInstance.get(launches)