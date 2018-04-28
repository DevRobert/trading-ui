import { combineReducers } from 'redux'
import positionsReducer from './positions'
import transactionsReducer from './transactions'
import registerTransactionReducer from './registerTransaction'

const accountReducer = combineReducers({
    positions: positionsReducer,
    transactions: transactionsReducer,
    registerTransaction: registerTransactionReducer
})

export default accountReducer
