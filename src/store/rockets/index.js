import { getAllRockets } from '../../api'

const ROCKETS_REQUESTED = 'ROCKETS_REQUESTED'
const ROCKETS_RECEIVED = 'ROCKETS_RECEIVED'

const RocketsRequestedAction = {
    type: ROCKETS_REQUESTED
}

const RocketsReceivedAction = (rockets) => {
    return {
        type: ROCKETS_RECEIVED,
        payload: rockets
    }
}

const initialState = {
    loading: false,
    rockets: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ROCKETS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case ROCKETS_RECEIVED:
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
        dispatch(RocketsRequestedAction)
        getAllRockets()
            .then(response => dispatch(RocketsReceivedAction(response)))
            .catch(err => console.log(err))
    }
}