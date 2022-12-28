import { axiosInstance, LaunchesResponse, RocketsResponse } from '.'

const history = '/history'
const launches = '/launches'
const rockets = '/rockets'
export const getAllHistory = () => 
    axiosInstance.get(history)

export const getAllLaunches = (): Promise<LaunchesResponse> => 
    axiosInstance.get(launches)

export const getAllRockets = () => 
    axiosInstance.get(rockets)