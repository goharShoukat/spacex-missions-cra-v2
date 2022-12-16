const LAUNCH_HISTORY_REQUESTED = 'LAUNCH_HISTORY_REQUESTED'
const LAUNCH_HISTORY_RECEIVED = 'LAUNCH_HISTORY_RECEIVED'

export const LaunchHistoryRequestAction = {
    type: LAUNCH_HISTORY_REQUESTED,
}

export const LaunchHistoryReceivedAction = (payload) => {
    return {
        type: LAUNCH_HISTORY_RECEIVED,
        launches: payload
    }
}

const initialState = {
    loading: false,
    launches: null
}

export default function HistoryReducer(state = initialState, action) {
    switch (action.type) {
        case LAUNCH_HISTORY_REQUESTED:
            return {
                loading: true,
                ...state
            }
        case LAUNCH_HISTORY_RECEIVED:
            return {
                loading: false,
                launches: action.payload,
                ...state
            }
        default:
            return state
    }
}