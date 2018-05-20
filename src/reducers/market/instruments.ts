import { FETCH_INSTRUMENTS_REQUESTED, FETCH_INSTRUMENTS_SUCCEEDED, FETCH_INSTRUMENTS_FAILED } from "../../actions";

const defaultState = {
    isLoading: false,
    errorMessage: "",
    date: "",
    instruments: [{
        isin: "",
        name: "",
        marketPrice: 0.0
    }]
}

const instrumentsReducer = (state = defaultState, action: any) => {
    switch(action.type) {
        case FETCH_INSTRUMENTS_REQUESTED:
            return {
                ...state,
                isLoading: true,
                errorMessage: "",
                date: "",
                instruments: []
            }

        case FETCH_INSTRUMENTS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                date: action.date,
                instruments: action.instruments
            }
            
        case FETCH_INSTRUMENTS_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.errorMessage
            }

        default:
            return state
    }
}

export default instrumentsReducer
