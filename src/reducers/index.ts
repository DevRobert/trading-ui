import { combineReducers } from 'redux'
import accountReducer from './account/'
import strategyReducer from './strategy'
import scoringReducer from './scoring'
import tradesReducer from './trades'
import marketReducer from './market/'
import taxesReducer from './taxes'

const rootReducer = combineReducers({
    account: accountReducer,
    strategy: strategyReducer,
    scoring: scoringReducer,
    trades: tradesReducer,
    market: marketReducer,
    taxes: taxesReducer
})

export default rootReducer
