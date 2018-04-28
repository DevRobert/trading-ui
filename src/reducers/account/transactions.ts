import { FETCH_ACCOUNT_TRANSACTIONS_REQUESTED, FETCH_ACCOUNT_TRANSACTIONS_SUCCEEDED, FETCH_ACCOUNT_TRANSACTIONS_FAILED } from "../../actions";

const defaultState = {
    transactions: [
        {
            date: '2018-04-23',
            type: 'Buy',
            isin: 'DE0000000000',
            name: 'Instrument name',
            quantity: 0,
            marketPrice: 0,
            totalPrice: 0,
            commission: 0
        }
    ],
    isLoading: false,
    errorMessage: ""
}

const transactionsReducer = (state = defaultState, action: any) => {
    switch(action.type) {
        case FETCH_ACCOUNT_TRANSACTIONS_REQUESTED:
            return {
                ...state,
                transactions: null,
                isLoading: true,
                errorMessage: null
            }
        
        case FETCH_ACCOUNT_TRANSACTIONS_SUCCEEDED:
            return {
                ...state,
                transactions: action.transactions,
                isLoading: false
            }

        case FETCH_ACCOUNT_TRANSACTIONS_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.error.message
            }

        default:
            return state
    }
}

export default transactionsReducer
