import { getAllRockets } from '../../api'

const ROCKETS_REQUESTED = 'ROCKETS_REQUESTED'
const ROCKETS_RECEIVED = 'ROCKETS_RECEIVED'

export const RocketsRequestAction = {
    type: ROCKETS_REQUESTED,
}

export const RocketsReceivedAction = (launches) => {
    return {
        type: ROCKETS_RECEIVED,
        payload: launches
    }
}

const initialState = {
    loading: false,
    rockets: null,
    payloadWeights: null

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ROCKETS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case ROCKETS_RECEIVED:
            const rocketPayloads = []
            action.payload.map(rocket => {
                const { payload_weights, rocket_id } = rocket
                payload_weights.map(payload => {
                    rocketPayloads.push({...payload, rocket_id})
                })
            })
            return {
                ...state,
                loading: false,
                rockets: action.payload,
                payloadWeights: rocketPayloads
            }
        default:
            return state
    }
}

export default reducer

export const fetchAllRocketsData = () => {
    return function (dispatch) {
        dispatch(RocketsRequestAction)
        getAllRockets()
            .then(response =>
                dispatch(RocketsReceivedAction(response)))
            .catch(err => console.log(err))
    }
}