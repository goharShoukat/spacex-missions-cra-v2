import thunk from 'redux-thunk'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import  historyReducer from './history'

const rootReducer = combineReducers({
    history: historyReducer,
})

const storeEnhancer = composeWithDevTools(applyMiddleware(thunk))

export default createStore(rootReducer, storeEnhancer)