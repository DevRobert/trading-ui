import { combineReducers } from 'redux'
import instrumentsReducer from './instruments'

const marketReducer = combineReducers({
    instruments: instrumentsReducer
})

export default marketReducer
