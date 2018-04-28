import { combineReducers } from 'redux'
import accountReducer from './account/'
import scoringReducer from './scoring'

const rootReducer = combineReducers({
    account: accountReducer,
    scoring: scoringReducer
})

export default rootReducer
