import { combineReducers } from 'redux'
import accountReducer from './account/'
import strategyReducer from './strategy'
import scoringReducer from './scoring'
import tradesReducer from './trades'

const rootReducer = combineReducers({
    account: accountReducer,
    strategy: strategyReducer,
    scoring: scoringReducer,
    trades: tradesReducer
})

export default rootReducer
