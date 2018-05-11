import { FETCH_TRADES_REQUESTED, FETCH_TRADES_SUCCEEDED, FETCH_TRADES_FAILED } from "../actions";

const defaultState = {
    isLoading: false,
    errorMessage: '',
    trades: [
        {
            type: '',
            isin: '',
            name: '',
            quantity: 0,
            marketPrice: 0,
            totalPrice: 0,
            commission: 0
        }
    ],
    marketPricesDate: '0000-00-00'
}

export default (state = defaultState, action: any) => {
    switch(action.type) {
        case FETCH_TRADES_REQUESTED:
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
                trades: [],
                marketPricesDate: null
            }

        case FETCH_TRADES_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                trades: action.trades,
                marketPricesDate: action.marketPricesDate
            }

        case FETCH_TRADES_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.error.message
            }
        
        default:
            return state
    }
}
