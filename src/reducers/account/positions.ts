import { FETCH_ACCOUNT_POSITIONS_REQUESTED, FETCH_ACCOUNT_POSITIONS_SUCCEEDED, FETCH_ACCOUNT_POSITIONS_FAILED } from "../../actions";

const defaultState = {
    positions: [
        {
            isin: "DE0000000000",
            name: "Instrument name",
            quantity: 0,
            marketPrice: 0,
            totalMarketPrice: 0
        }
    ],
    summary: {
        totalStocksQuantity: 0,
        totalStocksMarketPrice: 0,
        availableMoney: 0,
        totalBalance: 0
    },
    isLoading: false,
    errorMessage: ""
}

const positionsReducer = (state = defaultState, action: any) => {
    switch(action.type) {
        case FETCH_ACCOUNT_POSITIONS_REQUESTED:
            return {
                ...state,
                positions: [],
                summary: {
                    totalStocksQuantity: 0,
                    totalStocksMarketPrice: 0,
                    availableMoney: 0,
                    totalBalance: 0
                },
                isLoading: true,
                errorMessage: null,
            }

        case FETCH_ACCOUNT_POSITIONS_SUCCEEDED:
            return {
                ...state,
                positions: action.positions,
                summary: action.summary,
                isLoading: false
            }

        case FETCH_ACCOUNT_POSITIONS_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.error.message
            }

        default:
            return state
    }
}

export default positionsReducer
