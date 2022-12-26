import { getAllHistory } from '../../api/http'

const LAUNCH_HISTORY_REQUESTED = 'LAUNCH_HISTORY_REQUESTED'
const LAUNCH_HISTORY_RECEIVED = 'LAUNCH_HISTORY_RECEIVED'

export const LaunchHistoryRequestAction = {
    type: LAUNCH_HISTORY_REQUESTED,
}

export const LaunchHistoryReceivedAction = (launchHistory) => {
    return {
        type: LAUNCH_HISTORY_RECEIVED,
        payload: launchHistory
    }
}

const initialState = {
    loading: false,
    launchHistory: null
}

export default function HistoryReducer(state = initialState, action) {
    switch (action.type) {
        case LAUNCH_HISTORY_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case LAUNCH_HISTORY_RECEIVED:
            return {
                ...state,
                loading: false,
                launchHistory: action.payload,
            }
        default:
            return state
    }
}


export const fetchAllHistoryData = () => {
    return function (dispatch) {
        dispatch(LaunchHistoryRequestAction)
        getAllHistory().then(response => {
            dispatch(LaunchHistoryReceivedAction(response))
        })
            .catch(err => console.log(err))
    }
}