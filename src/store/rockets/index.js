import { getAllRockets } from '../../api'

const LAUNCHES_REQUESTED = 'LAUNCHES_REQUESTED'
const LAUNCHES_RECEIVED = 'LAUNCHES_RECEIVED'

export const LaunchesRequestAction = {
    type: LAUNCHES_REQUESTED,
}

export const LaunchesReceivedAction = (launches) => {
    return {
        type: LAUNCHES_RECEIVED,
        payload: launches
    }
}

const initialState = {
    loading: false,
    rockets: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LAUNCHES_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case LAUNCHES_RECEIVED:
            return {
                ...state,
                loading: false,
                rockets: action.payload
            }
        default:
            return state
    }
}

export default reducer

export const fetchAllRocketsData = () => {
    return function (dispatch) {
        dispatch(LaunchesRequestAction)
        getAllRockets()
            .then(response =>
                dispatch(LaunchesReceivedAction(response)))
            .catch(err => console.log(err))
    }
}